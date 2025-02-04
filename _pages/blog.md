---
layout: note
title: Blog
permalink: /blog
---

# Random Thoughts

<div>
  {%- for notes in site.note -%}
    <p><a href = "{{ notes.url }}">{{ notes.title }}</a></p>
  {%- endfor -%}
</div>
