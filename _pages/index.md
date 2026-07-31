---
layout: page
title: Home
id: home
permalink: /
---

{%- assign recent = site.notes | sort: "date" | reverse -%}
{%- assign starts = "repairs,on-attention-2,ride-hailing" | split: "," -%}

# Rohan's space

<p class="lede">Hi, I'm Rohan — a Product Manager at Meesho, in Bangalore. I write short essays about attention, time, the people around me, and how I try to do things well. Most take two minutes. <a href="{{ site.baseurl }}/about">More about me →</a></p>

<div class="secth">Start here</div>

<div class="w-list">
{%- for slug in starts -%}
{%- assign note = site.notes | where_exp: "n", "n.path contains slug" | first -%}
{%- if note %}{% include post-row.html note=note %}{% endif -%}
{%- endfor -%}
</div>

<div class="secth">Recently</div>

<div class="w-list">
{%- for note in recent limit: 5 -%}
{% include post-row.html note=note %}
{%- endfor -%}
</div>

<p class="p-all"><a href="{{ site.baseurl }}/blog">See all {{ recent | size }} →</a></p>

<div class="secth">Made</div>

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

<div class="secth">Tastes</div>

<div class="tastes">
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
    <p>What I've been reading, with notes on what stayed with me.</p>
  </div>
  <div>
    <h3><a href="{{ site.baseurl }}/uses-this">Uses this</a></h3>
    <p>The hardware, software and brewing gear I actually use.</p>
  </div>
</div>

<div class="secth">Say hello</div>

<p>I'd love to hear from you — about something I wrote, a book you think I'd enjoy, or just to say hi.</p>

<p class="hello">
  <a href="mailto:mahnot.who@gmail.com">Email</a> |
  <a href="https://x.com/mahnotrohan">X</a> |
  <a href="https://www.linkedin.com/in/rohan-mahnot-569412182/">LinkedIn</a> |
  <a href="https://www.yourworldoftext.com/~rohanmahnot/">Guestbook</a>
</p>
