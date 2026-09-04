---
layout: page
title: Orrery
permalink: /orrery
description: An orrery is a model that shows how planets move. This one shows how ideas connect.
---

{%- assign first_constellation = site.data.orrery | where: "thread", "uncertainty" | first -%}

<div class="orrery-page">
  <section class="orrery-hero" aria-labelledby="orrery-title">
    <div>
      <h1 id="orrery-title">Orrery</h1>
      <p class="orrery-deck">An orrery is a model that shows how planets move. This one shows how ideas connect. Pick a topic below. Follow the path, or explore on your own.</p>
    </div>

    <figure class="orbit-figure">
      <svg viewBox="0 0 320 218" role="img" aria-labelledby="orbit-title orbit-description">
        <title id="orbit-title">The four threads in Orrery</title>
        <desc id="orbit-description">The Uncertainty thread is selected. Its five constellation points are highlighted.</desc>
        <g transform="translate(160 107) rotate(-8)">
          <ellipse class="orbit is-active" data-orbit="uncertainty" rx="142" ry="76"></ellipse>
          <ellipse class="orbit" data-orbit="thinking" rx="111" ry="59"></ellipse>
          <ellipse class="orbit" data-orbit="people" rx="80" ry="42"></ellipse>
          <ellipse class="orbit" data-orbit="inner-life" rx="48" ry="25"></ellipse>
          <circle class="orbit-axis" cx="0" cy="0" r="10"></circle>
          <circle class="orbit-core" cx="0" cy="0" r="3"></circle>
          <g data-orbit-group="uncertainty">
            <circle class="orbit-node is-active" cx="-122" cy="-39" r="4"></circle>
            <circle class="orbit-node is-active" cx="-48" cy="-72" r="4"></circle>
            <circle class="orbit-node is-active" cx="69" cy="-66" r="4"></circle>
            <circle class="orbit-node is-active" cx="139" cy="18" r="4"></circle>
            <circle class="orbit-node is-active" cx="-94" cy="57" r="4"></circle>
          </g>
          <g data-orbit-group="thinking">
            <circle class="orbit-node" cx="-88" cy="-36" r="4"></circle>
            <circle class="orbit-node" cx="1" cy="-59" r="4"></circle>
            <circle class="orbit-node" cx="91" cy="-33" r="4"></circle>
            <circle class="orbit-node" cx="96" cy="29" r="4"></circle>
            <circle class="orbit-node" cx="-28" cy="57" r="4"></circle>
          </g>
          <g data-orbit-group="people">
            <circle class="orbit-node" cx="-67" cy="-23" r="4"></circle>
            <circle class="orbit-node" cx="-3" cy="-42" r="4"></circle>
            <circle class="orbit-node" cx="67" cy="-21" r="4"></circle>
            <circle class="orbit-node" cx="48" cy="34" r="4"></circle>
            <circle class="orbit-node" cx="-56" cy="30" r="4"></circle>
          </g>
          <g data-orbit-group="inner-life">
            <circle class="orbit-node" cx="-37" cy="-16" r="4"></circle>
            <circle class="orbit-node" cx="18" cy="-23" r="4"></circle>
            <circle class="orbit-node" cx="43" cy="9" r="4"></circle>
            <circle class="orbit-node" cx="-17" cy="23" r="4"></circle>
          </g>
        </g>
      </svg>
    </figure>
  </section>

  <section class="orrery-browser" aria-labelledby="browse-constellations-title">
    <div class="section-heading-row orrery-browser-heading">
      <h2 id="browse-constellations-title">Browse the constellations</h2>
      <span class="small-meta">19 constellations</span>
    </div>

    <div class="orrery-tabs" role="tablist" aria-label="Orrery threads">
      {%- for thread in site.data.orrery_threads -%}
        {%- assign thread_items = site.data.orrery | where: "thread", thread.key -%}
        <button id="thread-tab-{{ thread.key }}" class="orrery-tab" type="button" role="tab" data-orrery-thread="{{ thread.key }}" data-thread-name="{{ thread.name | escape }}" data-thread-summary="{{ thread.summary | escape }}" aria-controls="thread-list-{{ thread.key }}" aria-selected="{% if forloop.first %}true{% else %}false{% endif %}" tabindex="{% if forloop.first %}0{% else %}-1{% endif %}">
          <span>{{ thread.name }}</span><span class="orrery-tab-count">{{ thread_items | size | prepend: "0" | slice: -2, 2 }}</span>
        </button>
      {%- endfor -%}
    </div>

    <p class="orrery-summary" aria-live="polite">{{ site.data.orrery_threads[0].summary }}</p>

    <div class="orrery-explorer">
      <div class="orrery-lists">
        {%- for thread in site.data.orrery_threads -%}
          {%- assign thread_items = site.data.orrery | where: "thread", thread.key -%}
          <div id="thread-list-{{ thread.key }}" role="tabpanel" aria-labelledby="thread-tab-{{ thread.key }}" data-orrery-panel="{{ thread.key }}"{% unless forloop.first %} hidden{% endunless %}>
            <ol class="constellation-list" data-orrery-list="{{ thread.key }}">
              {%- for item in thread_items -%}
                <li>
                  <a class="constellation-choice{% if forloop.first %} is-selected{% endif %}" href="{{ item.url }}" data-constellation-title="{{ item.title | escape }}" data-constellation-description="{{ item.description | escape }}" data-constellation-url="{{ item.url }}"{% if forloop.first %} aria-current="true"{% endif %}>{{ item.title }}</a>
                </li>
              {%- endfor -%}
            </ol>
          </div>
        {%- endfor -%}
      </div>

      <article class="constellation-detail" aria-live="polite">
        <p class="detail-label">Selected constellation</p>
        <h3 class="detail-title">{{ first_constellation.title }}</h3>
        <p class="detail-description">{{ first_constellation.description }}</p>
        <div class="detail-actions">
          <a class="text-link guided-link" href="{{ first_constellation.url }}#start">Start guided path</a>
          <a class="text-link map-link" href="{{ first_constellation.url }}">Explore map</a>
        </div>
      </article>
    </div>
  </section>
</div>
