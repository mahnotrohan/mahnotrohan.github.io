---
layout: page
title: Notes In Transit
permalink: /notes-in-transit
---

# Notes In Transit
<div>
  {%- for note in site.notes-in-transit -%}
    <p><a href = "{{ note.url }}">{{ note.title }}</a></p>
  {%- endfor -%}
</div>
