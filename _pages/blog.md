---
layout: page
title: Writing
permalink: /blog
description: Notes on attention, systems, work, and the ordinary things that teach me.
---

{%- assign notes = site.notes | sort: "date" | reverse -%}
{%- assign current_year = "" -%}

<div class="writing-archive">
  <header>
    <h1>Writing</h1>
    <p class="page-deck">Notes on attention, systems, work, and the ordinary things that teach me.</p>
  </header>

  {%- for note in notes -%}
    {%- assign note_year = note.date | date: "%Y" -%}
    {%- if note_year != current_year -%}
      {%- unless current_year == "" -%}</ol></section>{%- endunless -%}
      <section class="writing-year" aria-labelledby="year-{{ note_year }}">
        <h2 id="year-{{ note_year }}">{{ note_year }}</h2>
        <ol class="writing-list">
      {%- assign current_year = note_year -%}
    {%- endif -%}
          <li>{% include post-row.html note=note %}</li>
  {%- endfor -%}
  {%- unless current_year == "" -%}</ol></section>{%- endunless -%}
</div>
