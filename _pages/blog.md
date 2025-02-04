---
layout: page
title: Blog
permalink: /notes
---

# Random Thoughts

{% for note in site.notes %}
- [{{ notes.title }}]({{ notes.url }})
{% endfor %}
