---
layout: page
title: Trends
permalink: /trends/
---

# What’s Trending

## Top iOS Apps
<ol id="ios-list"><li>Loading…</li></ol>

## Top Android Apps
<ol id="android-list"><li>Loading…</li></ol>

## Google Trending Searches
<ol id="trends-list"><li>Loading…</li></ol>

<script>
(async () => {
  const COUNTRY = "in"; // change to "in" for India

  // iOS top apps (public Apple JSON RSS)
  async function loadIOS() {
    const url = `https://rss.marketingtools.apple.com/api/v2/${COUNTRY}/apps/top-free/10/apps.json`;
    try {
      const res = await fetch(url, { cache: "no-store" });
      const data = await res.json();
      const items = data.feed?.results || [];
      const list = document.getElementById("ios-list");
      list.innerHTML = "";
      items.forEach(app => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${app.url}" target="_blank" rel="noopener">${app.name}</a> <span style="opacity:.7">by ${app.artistName}</span>`;
        list.appendChild(li);
      });
      if (!items.length) list.innerHTML = "<li>No data</li>";
    } catch { document.getElementById("ios-list").innerHTML = "<li>Failed to load</li>"; }
  }

  // Your Worker base URL (no trailing slash)
  const WORKER = "https://YOUR-WORKER.workers.dev";

  async function loadAndroid() {
    try {
      const res = await fetch(`${WORKER}/api/android?country=${COUNTRY}`, { cache: "no-store" });
      const data = await res.json();
      const apps = (data.organic_results || data.items || []).slice(0,10);
      const list = document.getElementById("android-list");
      list.innerHTML = "";
      apps.forEach(a => {
        const name = a.title || a.app_name || a.name || "App";
        const url = a.link || a.app_url || a.url || "#";
        const dev = a.developer || a.developer_name || "";
        const li = document.createElement("li");
        li.innerHTML = `<a href="${url}" target="_blank" rel="noopener">${name}</a> <span style="opacity:.7">${dev}</span>`;
        list.appendChild(li);
      });
      if (!apps.length) list.innerHTML = "<li>No data</li>";
    } catch { document.getElementById("android-list").innerHTML = "<li>Failed to load</li>"; }
  }

  async function loadTrends() {
    try {
      const res = await fetch(`${WORKER}/api/trends?country=${COUNTRY}`, { cache: "no-store" });
      const data = await res.json();
      const items =
        data.trending_searches ||
        data.news_results ||
        data.stories ||
        [];
      const list = document.getElementById("trends-list");
      list.innerHTML = "";
      items.slice(0,10).forEach(t => {
        const title = t.query || t.title || (t?.news_results?.[0]?.title) || "Trend";
        const link = t.explore_link || t.link || "#";
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link}" target="_blank" rel="noopener">${title}</a>`;
        list.appendChild(li);
      });
      if (!items.length) list.innerHTML = "<li>No data</li>";
    } catch { document.getElementById("trends-list").innerHTML = "<li>Failed to load</li>"; }
  }

  loadIOS();
  loadAndroid();
  loadTrends();
})();
</script>
