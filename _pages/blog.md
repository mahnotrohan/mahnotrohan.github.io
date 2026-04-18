---
layout: page
title: Writing
permalink: /blog
---

# Writing

<div class="writing-list">
  {%- for note in site.notes reversed -%}
    <div class="writing-entry">
      <span class="writing-date">{{ note.date | date: "%b %Y" }}</span>
      <a href="{{ note.url }}">{{ note.title }}</a>
    </div>
  {%- endfor -%}
</div>

<style>
  .writing-list {
    margin-top: 1.5rem;
  }

  .writing-entry {
    display: flex;
    align-items: baseline;
    gap: 1.5rem;
    padding: 0.6rem 0;
  }

  .writing-date {
    color: #6a6a6a;
    font-size: 0.85em;
    min-width: 5.5rem;
    flex-shrink: 0;
  }

  .writing-entry a {
    text-decoration-color: #3a3a3a;
  }

  .writing-entry a:hover {
    text-decoration-color: #e8e6e3;
  }
</style>
