---
layout: page
title: Writing
permalink: /blog
---

{%- assign notes = site.notes | sort: "date" | reverse -%}
{%- assign allTags = "attention,time,people,learning,thinking,discipline,business,work,food,systems" | split: "," -%}

# Writing

<p class="lede">Essays and notes — {{ notes | size }} pieces, mostly two-minute reads. Everything here sits at a different stage of doneness.</p>

<div class="legend">
  <span><span class="dots" data-s="1"><i></i><i></i><i></i></span><b>rough</b> — noticed it, wrote it down</span>
  <span><span class="dots" data-s="2"><i></i><i></i><i></i></span><b>working</b> — has a shape, still moving</span>
  <span><span class="dots" data-s="3"><i></i><i></i><i></i></span><b>settled</b> — I'd stand behind this</span>
</div>

<div class="filters" id="filters">
  <button class="on" data-f="all" type="button">all {{ notes | size }}</button>
  {%- for t in allTags -%}
  {%- assign tagged = site.notes | where_exp: "x", "x.tags contains t" -%}
  <button data-f="{{ t }}" type="button">{{ t }} <span class="n">{{ tagged | size }}</span></button>
  {%- endfor -%}
</div>

<div class="w-list" id="w-list">
  {%- for note in notes -%}
  {% include post-row.html note=note %}
  {%- endfor -%}
</div>
