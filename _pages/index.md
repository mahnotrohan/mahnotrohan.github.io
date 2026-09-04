---
layout: page
title: Home
id: home
permalink: /
description: Product manager at Meesho, writing about attention, learning, people, and work.
---

<div class="home-grid">
  <header class="home-intro">
    <h1>Hello, I&rsquo;m Rohan.</h1>
    <p class="home-lead">Product manager at Meesho, previously a data scientist at Microsoft. I live in Bangalore and write about attention, learning, people, and work.</p>
    <p class="home-personal">Off the clock, I brew coffee, cook, read memoirs, and keep returning to questions with no clean answer.</p>
    <a class="quiet-link" href="{{ '/about' | relative_url }}">More about me</a>
  </header>

  <aside class="home-recent" aria-labelledby="recent-writing-title">
    <h2 id="recent-writing-title">Recent writing</h2>
    <p class="home-recent-intro">Three places to begin.</p>
    <ol class="home-recent-list">
      <li>
        <a class="home-recent-title" href="{{ '/notes/the-ledger/' | relative_url }}">The Ledger</a>
        <p>A conflict you suppress becomes resentment; soon disagreement feels like dismissal.</p>
        <time datetime="2026-07-30">30 Jul 2026 &middot; 2 min</time>
      </li>
      <li>
        <a class="home-recent-title" href="{{ '/notes/learning-and-intuition/' | relative_url }}">Learning &amp; Intuition</a>
        <p>Some things you can only be told. Others can only be learned by doing.</p>
        <time datetime="2026-07-29">29 Jul 2026 &middot; 2 min</time>
      </li>
      <li>
        <a class="home-recent-title" href="{{ '/notes/the-ripples/' | relative_url }}">The Ripples</a>
        <p>We don&rsquo;t see the world as it is; we see it as we are.</p>
        <time datetime="2026-07-20">20 Jul 2026 &middot; 3 min</time>
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
        <span class="thread-label">control / chance</span>
      </button>
      <button class="thread-option" type="button" data-home-thread="identity" aria-pressed="false">
        <span class="thread-knot" aria-hidden="true"></span>
        <span class="thread-label">identity</span>
      </button>
      <button class="thread-option" type="button" data-home-thread="meaning" aria-pressed="false">
        <span class="thread-knot" aria-hidden="true"></span>
        <span class="thread-label">meaning</span>
      </button>
      <button class="thread-option" type="button" data-home-thread="tools" aria-pressed="false">
        <span class="thread-knot" aria-hidden="true"></span>
        <span class="thread-label">tools / thought</span>
      </button>
      <button class="thread-option" type="button" data-home-thread="making" aria-pressed="false">
        <span class="thread-knot" aria-hidden="true"></span>
        <span class="thread-label">making / tending</span>
      </button>
    </div>
    <p class="thread-question" aria-live="polite">How much of what happens to us is within our control&mdash;and how much is chance?</p>
  </section>

  <section class="home-section home-interests" id="interests" aria-labelledby="interests-title">
    <h2 id="interests-title">Interests</h2>
    <div class="home-content-grid">
      <div class="home-content-item">
        <a class="text-link" href="{{ '/thoughts/on-coffee' | relative_url }}">Coffee</a>
        <p>Brewing, dialing in espresso, and recipes worth returning to.</p>
      </div>
      <div class="home-content-item">
        <a class="text-link" href="{{ '/bookshelf' | relative_url }}">Shelf</a>
        <p>Memoirs, decision-making, and fiction that shifts the frame.</p>
      </div>
      <div class="home-content-item">
        <a class="text-link" href="{{ '/thoughts/on-food' | relative_url }}">Food</a>
        <p>Cooking, meals, and what ends up on the plate.</p>
      </div>
    </div>
  </section>

  <section class="home-section home-projects" aria-labelledby="projects-title">
    <h2 id="projects-title">Projects</h2>
    <div class="home-content-grid">
      <div class="home-content-item">
        <a class="text-link" href="{{ '/orrery' | relative_url }}">Orrery</a>
        <p>Constellations of connected and unfinished ideas.</p>
      </div>
      <div class="home-content-item">
        <a class="text-link" href="https://bloom.rohanmahnot.space">Bloom</a>
        <p>A coffee recipe builder and shared brewing library.</p>
      </div>
      <div class="home-content-item">
        <a class="text-link" href="https://project-monet.vercel.app/">Project Monet</a>
        <p>A latte-art practice log, one pour at a time.</p>
      </div>
    </div>
  </section>
</div>
