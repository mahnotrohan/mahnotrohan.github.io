---
layout: page
title: Writing
permalink: /blog
---

{%- assign notes = site.notes | sort: "date" | reverse -%}
{%- assign allTags = "attention,time,people,learning,thinking,discipline,business,work,food,systems" | split: "," -%}

# Writing

<div class="filters" id="filters">
  <button class="on" data-f="all" type="button" aria-pressed="true">all {{ notes | size }}</button>
  {%- for t in allTags -%}
  {%- assign tagged = site.notes | where_exp: "x", "x.tags contains t" -%}
  <button data-f="{{ t }}" type="button" aria-pressed="false">{{ t }} <span class="n">{{ tagged | size }}</span></button>
  {%- endfor -%}
</div>

<div class="w-list" id="w-list">
  {%- for note in notes -%}
  {% include post-row.html note=note %}
  {%- endfor -%}
</div>
