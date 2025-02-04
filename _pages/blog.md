---
layout: page
title: Blog
permalink: /blog/
---

# Random Thoughts

<div>
  {% for note in site.notes %}
    <p><a href="{{ note.url }}">{{ note.title }}</a></p>
  {% endfor %}
</div>
