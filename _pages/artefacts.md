---
layout: page
title: Artefacts
permalink: /artefacts

---

{%- assign notes = site.artefacts | sort: "date" | reverse -%}
{%- assign current_year = "" -%}

<div class="writing-archive">
  <header>
    <h1>Writing</h1>
  </header>

  {%- for note in artefacts -%}
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
