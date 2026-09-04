# If the configuration sets `open_external_links_in_new_tab` to a truthy value,
# add 'target=_blank' to anchor tags that don't have `internal-link` class

# frozen_string_literal: true
require 'nokogiri'
require 'uri'

Jekyll::Hooks.register [:notes], :post_convert do |doc|
  convert_links(doc)
end

Jekyll::Hooks.register [:pages], :post_convert do |doc|
  # jekyll considers anything at the root as a page,
  # we only want to consider actual pages
  next unless doc.path.start_with?('_pages/')
  convert_links(doc)
end

def convert_links(doc)
  open_external_links_in_new_tab = !!doc.site.config["open_external_links_in_new_tab"]

  if open_external_links_in_new_tab
    parsed_doc = Nokogiri::HTML::DocumentFragment.parse(doc.content)
    site_host = URI.parse(doc.site.config["url"].to_s).host

    parsed_doc.css("a:not(.footnote):not(.reversefootnote)").each do |link|
      href = link["href"].to_s.strip
      external = external_http_link?(href, site_host)

      if external
        link["target"] = "_blank"
        rel = link["rel"].to_s.split | ["noopener", "noreferrer"]
        link["rel"] = rel.join(" ")
      elsif link["target"] == "_blank"
        link.remove_attribute("target")
        link.remove_attribute("rel") if link["rel"].to_s.empty?
      end
    end
    doc.content = parsed_doc.inner_html
  end
end

def external_http_link?(href, site_host)
  return false if href.empty? || href.start_with?("#", "/", "./", "../")

  uri = if href.start_with?("//")
          URI.parse("https:#{href}")
        else
          URI.parse(href)
        end

  uri.is_a?(URI::HTTP) && !uri.host.nil? && uri.host != site_host
rescue URI::InvalidURIError
  false
end
