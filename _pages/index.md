---
layout: page
title: Home
id: home
permalink: /
---

<div class="home-grid">
  <header class="home-intro">
    <h1>Hi, I&rsquo;m Rohan!</h1>
    <p class="home-lead">I write here, mostly about things I'm thinking about. There's also a bookshelf, some notes on coffee, and a few side projects. Poke around!</p>
    <a class="quiet-link" href="{{ '/about' | relative_url }}">More about me</a>
  </header>

  <aside class="home-recent" aria-labelledby="recent-writing-title">
    <h2 id="recent-writing-title">Recent writing</h2>
    <p class="home-recent-intro">Three places to begin.</p>
    <ol class="home-recent-list">
      <li>
        <a class="home-recent-title" href="{{ '/notes/make-the-chili/' | relative_url }}">Make The Chili</a>
        <p>A look back at a year that changed me, and a reminder to show up for the people we love.</p>
        <time datetime="2026-10-11">11 Oct 2026 &middot; 10 min</time>
      </li>
      <li>
        <a class="home-recent-title" href="{{ '/notes/thoughts-on-agentic-commerce/' | relative_url }}">Thoughts on Agentic Commerce</a>
        <p>How shopping agents could shift consumer intent and distribution away from marketplaces.</p>
        <time datetime="2026-10-11">11 Oct 2026 &middot; 3 min</time>
      </li>
      <li>
        <a class="home-recent-title" href="{{ '/notes/a-life-of-texture/' | relative_url }}">A Life of Texture</a>
        <p>Why some things can only be understood by stepping out and experiencing them for yourself.</p>
        <time datetime="2026-10-01">1 Oct 2026 &middot; 3 min</time>
      </li>
    </ol>
    <a class="quiet-link home-all-writing" href="{{ '/blog' | relative_url }}">All writing</a>
  </aside>

  <section class="home-section home-threads" aria-labelledby="threads-title">
    <div class="section-heading-row">
      <h2 id="threads-title">Threads I keep pulling on</h2>
      <span class="thread-count" aria-live="polite">01 / 05</span>
    </div>
    <div class="thread-options" role="group" aria-label="Choose a recurring question">
      <button class="thread-option" type="button" data-home-thread="control" aria-pressed="true">
        <span class="thread-knot" aria-hidden="true"></span>
        <span class="thread-label">Meaning Making</span>
      </button>
      <button class="thread-option" type="button" data-home-thread="identity" aria-pressed="false">
        <span class="thread-knot" aria-hidden="true"></span>
        <span class="thread-label">Stories</span>
      </button>
      <button class="thread-option" type="button" data-home-thread="meaning" aria-pressed="false">
        <span class="thread-knot" aria-hidden="true"></span>
        <span class="thread-label">Systems Thinking</span>
      </button>
      <button class="thread-option" type="button" data-home-thread="tools" aria-pressed="false">
        <span class="thread-knot" aria-hidden="true"></span>
        <span class="thread-label">Risk Taking</span>
      </button>
      <button class="thread-option" type="button" data-home-thread="making" aria-pressed="false">
        <span class="thread-knot" aria-hidden="true"></span>
        <span class="thread-label">Relationships</span>
      </button>
    </div>
    <!-- <p class="thread-question" aria-live="polite">How much of what happens to us is within our control&mdash;and how much is chance?</p> -->
  </section>

  <section class="home-section home-interests" id="interests" aria-labelledby="interests-title">
    <h1 id="interests-title">Interests</h1>
    <div class="home-content-grid">
      <div class="home-content-item">
        <a class="text-link" href="{{ '/thoughts/on-coffee' | relative_url }}">Coffee</a>
        <p>Brewing, learning and drinking lots of coffee.</p>
      </div>
      <div class="home-content-item">
        <a class="text-link" href="{{ '/bookshelf' | relative_url }}">Bookshelf</a>
        <p>Lots of Memoirs, fiction, and business books. </p>
      </div>
      <div class="home-content-item">
        <a class="text-link" href="{{ '/thoughts/on-food' | relative_url }}">Food</a>
        <p>Joy of eating, and craft of cooking</p>
      </div>
    </div>
  </section>

  <section class="home-section home-projects" aria-labelledby="projects-title">
    <h1 id="projects-title">Projects</h1>
    <div class="home-content-grid">
      <div class="home-content-item">
        <a class="text-link" href="{{ '/orrery' | relative_url }}">Orrery</a>
        <p>Constellations of concepts and ideas.</p>
      </div>
      <div class="home-content-item">
        <a class="text-link" href="https://bloom.rohanmahnot.space">Bloom</a>
        <p>A coffee brewing library.</p>
      </div>
      <div class="home-content-item">
        <a class="text-link" href="https://poker-dojo-xi.vercel.app">Poker Dojo</a>
        <p>A game I made to play poker</p>
      </div>
      <div class="home-content-item">
        <a class="text-link" href="https://vitals-app-v2.vercel.app">Vitals App</a>
        <p>An exploration of a different kind of health tracking software.</p>
      </div>
    </div>
  </section>
</div>
