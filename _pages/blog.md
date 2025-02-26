---
layout: page
title: Blog
permalink: /blog
---

# Random Thoughts

<div>
  {%- for note in site.notes reversed -%}
    <p>
      {{ note.date | date: "%b '%Y" }} 
      <a href="{{ note.url }}">{{ note.title }}</a>
    </p>
  {%- endfor -%}
</div>
