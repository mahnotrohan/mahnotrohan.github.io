# frozen_string_literal: true

# Artefacts are meant to be drag-and-drop: put a self-contained .html file in
# _artefacts/ and it shows up on /artefacts and serves byte-for-byte as authored.
#
# Jekyll on its own ignores a collection file with no YAML front matter - it is
# neither rendered nor copied - so such a file would silently never appear.
# This generator registers those files as real collection documents, deriving
# what the listing needs:
#
#   title - the <title> tag, else the filename humanised
#   date  - a leading YYYY-MM-DD in the filename, else the file's mtime
#
# Front matter is still honoured when present and always wins; add
# `date: YYYY-MM-DD` to pin exactly where an artefact sorts.
#
# Content is wrapped in {% raw %} so the HTML is emitted verbatim: artefacts
# often contain JS or templating that would otherwise be eaten by Liquid.
class ArtefactAutoRegister < Jekyll::Generator
  safe true
  priority :high

  DATE_PREFIX = /\A(\d{4}-\d{2}-\d{2})[-_ ]?/.freeze

  def generate(site)
    collection = site.collections["artefacts"]
    return if collection.nil?

    already = collection.docs.map(&:path)

    Dir.glob(File.join(site.source, "_artefacts", "*.html")).sort.each do |path|
      next if already.include?(path)

      raw = File.read(path)
      next if raw.start_with?("---") # has front matter: Jekyll handles it

      slug = File.basename(path, ".html")

      doc = Jekyll::Document.new(path, site: site, collection: collection)
      doc.data["layout"] = "none"
      doc.data["title"]  = title_for(raw, path)
      doc.data["date"]   = date_for(path)
      doc.data["slug"]   = slug
      # Set the URL outright. The collection's `:slug` permalink template is
      # only filled in by Document#read, which never runs for these
      # synthesised docs - without this they all resolve to a literal
      # ":slug.html" and clobber each other.
      doc.data["permalink"] = "/artefacts/#{slug}/"
      doc.content = "{% raw %}#{raw}{% endraw %}"

      collection.docs << doc

      # Jekyll already read this file as a collection *static* file. A static
      # file in a collection resolves the permalink template literally, so it
      # would be written to "artefacts/:slug.html" and every such file would
      # clobber the same path. Now that it is a real document, drop the copy.
      site.static_files.reject! { |f| f.path == path }

      Jekyll.logger.info "Artefacts:", "auto-registered #{File.basename(path)}"
    end

    collection.docs.sort_by! { |d| d.data["date"] || Time.at(0) }
  end

  private

  def title_for(raw, path)
    match = raw.match(%r{<title[^>]*>(.*?)</title>}mi)
    title = match && match[1].strip
    return title unless title.nil? || title.empty?

    File.basename(path, ".html")
        .sub(DATE_PREFIX, "")
        .tr("-_", "  ")
        .split
        .map(&:capitalize)
        .join(" ")
  end

  def date_for(path)
    match = File.basename(path).match(DATE_PREFIX)
    return Time.parse("#{match[1]} 00:00:00") if match

    File.mtime(path)
  end
end
