---
layout: page
title: Home
id: home
permalink: /
---

{%- assign starts = "the-ledger,seize-the-day,thoughts-on-forever" | split: "," -%}

<header class="intro">
  <h1>Rohan's digital garden</h1>

  <p>Hi, I'm Rohan. This website is my place to think&mdash;somewhere between a journal and a conversation, where ideas don't have to be finished to be worth writing down.</p>

  <p>I write about the things I notice, the questions I sit with, and the slow process of making sense of things as they take shape. <a href="{{ site.baseurl }}/about">More about me</a></p>
</header>

<aside class="recent-mobile" aria-label="Recent writing">
  {% include recent-writing.html %}
</aside>

<section class="page-section" id="start-here">
  <h2>Three essays to begin with</h2>

  <div class="home-entries">
{%- for slug in starts -%}
{%- assign note = site.notes | where_exp: "n", "n.path contains slug" | first -%}
{%- if note %}{% include post-card.html note=note %}{% endif -%}
{%- endfor -%}
  </div>

  <p class="more-link"><a href="{{ site.baseurl }}/blog">Read all writing</a></p>
</section>

<section class="page-section" id="workshop">
  <h2>Workshop</h2>

  <div class="inline-index">
    <p><a href="{{ site.baseurl }}/orrery">Orrery</a> &mdash; Star-charts of subjects I'm working out from first principles. Zoom in, read a node, poke the simulations.</p>
    <p><a href="https://bloom.rohanmahnot.space">Bloom</a> &mdash; A recipe builder and shared library for coffee. Dial in a V60, log it, share it.</p>
    <p><a href="https://www.are.na/rohan-mahnot-rh85hxg6yum/project-monet-oeekarcnrdy">Project Monet</a> &mdash; Latte art, one pour at a time. A running visual log.</p>
  </div>
</section>

<section class="page-section" id="off-the-clock">
  <h2>Off the clock</h2>

  <div class="inline-index">
    <p><a href="{{ site.baseurl }}/thoughts/on-coffee">Coffee</a> &mdash; My setup, the beans I've loved, and the best cortado in Bangalore.</p>
    <p><a href="{{ site.baseurl }}/thoughts/on-food">Food</a> &mdash; Best meals, favourite desserts, and why Kahlua makes no sense.</p>
    <p><a href="{{ site.baseurl }}/bookshelf">Shelf</a> &mdash; Books I've been reading recently, plus a few ideas I've followed into Orrery.</p>
  </div>
</section>

<section class="page-section hello" id="say-hello">
  <h2>Say hello</h2>

  <p>I'd love to hear from you&mdash;about something I wrote, a book you think I'd enjoy, or just to say hi.</p>

  <p class="hello-links">
    <a href="mailto:mahnot.who@gmail.com">Email</a> &middot;
    <a href="https://x.com/mahnotrohan">X</a> &middot;
    <a href="https://www.linkedin.com/in/rohan-mahnot-569412182/">LinkedIn</a> &middot;
    <a href="https://www.yourworldoftext.com/~rohanmahnot/">Guestbook</a>
  </p>
</section>
