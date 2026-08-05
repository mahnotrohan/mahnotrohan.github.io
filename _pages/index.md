---
layout: page
title: Home
id: home
permalink: /
---

{%- assign recent = site.notes | sort: "date" | reverse -%}
{%- assign starts = "repairs,on-attention-2,ride-hailing" | split: "," -%}

# Rohan's space

<p class="lede">Hi I'm Rohan! This website is my place to think, somewhere between a journal and a conversation, where ideas don't have to be finished to be worth writing down.</p>

<p class="lede">This is my digital garden: a place where I write about the things I notice, the questions I sit with, and the slow process of making sense of things as they take shape. <a href="{{ site.baseurl }}/about">More about me →</a></p>

<h2 class="secth" id="start-here">Start here</h2>

<div class="picks">
{%- for slug in starts -%}
{%- assign note = site.notes | where_exp: "n", "n.path contains slug" | first -%}
{%- if note %}{% include post-card.html note=note %}{% endif -%}
{%- endfor -%}
</div>

<p class="p-all"><a href="{{ site.baseurl }}/blog">Read more →</a></p>

<h2 class="secth" id="workshop">Workshop</h2>

<div class="cards">
  <a class="card" href="{{ site.baseurl }}/orrery">
    <h3>Orrery</h3>
    <p>Star-charts of subjects I'm working out from first principles. Zoom in, read a node, poke the simulations.</p>
    <span class="go">Open the charts →</span>
  </a>
  <a class="card" href="https://bloom.rohanmahnot.space">
    <h3>Bloom</h3>
    <p>A recipe builder and shared library for coffee. Dial in a V60, log it, share it.</p>
    <span class="go">bloom.rohanmahnot.space ↗</span>
  </a>
  <a class="card" href="https://www.are.na/rohan-mahnot-rh85hxg6yum/project-monet-oeekarcnrdy">
    <h3>Project Monet</h3>
    <p>Latte art, one pour at a time. A running visual log.</p>
    <span class="go">are.na ↗</span>
  </a>
</div>

<h2 class="secth" id="off-the-clock">Off the clock</h2>

<div class="blurbs">
  <div>
    <h3><a href="{{ site.baseurl }}/thoughts/on-coffee">Coffee</a></h3>
    <p>My setup, the beans I've loved, and the best cortado in Bangalore.</p>
  </div>
  <div>
    <h3><a href="{{ site.baseurl }}/thoughts/on-food">Food</a></h3>
    <p>Best meals, favourite desserts, and why Kahlua makes no sense.</p>
  </div>
  <div>
    <h3><a href="{{ site.baseurl }}/bookshelf">Shelf</a></h3>
    <p>Books I've been reading recently, plus a few ideas I've followed into Orrery.</p>
  </div>
  <div>
    <h3><a href="{{ site.baseurl }}/uses-this">Uses this</a></h3>
    <p>The hardware, software and brewing gear I actually use.</p>
  </div>
</div>

<h2 class="secth" id="say-hello">Say hello</h2>

<p>I'd love to hear from you - about something I wrote, a book you think I'd enjoy, or just to say hi.</p>

<p class="hello">
  <a href="mailto:mahnot.who@gmail.com">Email</a> |
  <a href="https://x.com/mahnotrohan">X</a> |
  <a href="https://www.linkedin.com/in/rohan-mahnot-569412182/">LinkedIn</a> |
  <a href="https://www.yourworldoftext.com/~rohanmahnot/">Guestbook</a>
</p>
