---
layout: page
title: Writing
permalink: /blog
---

{%- assign notes = site.notes | sort: "date" | reverse -%}

# Writing

<div class="w-list" id="w-list">
  {%- for note in notes -%}
  {% include post-row.html note=note %}
  {%- endfor -%}
</div>
