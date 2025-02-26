---
layout: page
title: Blog
permalink: /blog
---

# Random Thoughts

<div>
  {%- for note in site.notes reversed -%}
    <p>
      <span class="date">{{ note.date | date: "%b '%Y" }}</span> 
      <a href="{{ note.url }}">{{ note.title }}</a>
    </p>
  {%- endfor -%}
</div>

<style>
  .date {
    color: gray;
  }
</style>
