---
layout: page
title: "Trends"
permalink: /trends/
---

# What’s Trending

_Updates on page load (default: US)._

## Top iOS Apps
<ol id="ios-list"><li>Loading…</li></ol>

## Top Android Apps
<ol id="android-list"><li>Loading…</li></ol>

## Google Trending Searches
<ol id="trends-list"><li>Loading…</li></ol>

<script>
(async () => {
  const COUNTRY = "in"; // set your default; use "us" if you prefer
  const WORKER = "https://trends-proxy.<subdomain>.workers.dev"; // <-- your Worker URL

  // Generic helpers
  const byId = (id) => document.getElementById(id);
  const safe = (x, d="") => (typeof x === "string" && x) ? x : d;

  async function loadIOS() {
    try {
      const r = await fetch(`${WORKER}/api/ios?country=${COUNTRY}&num=10`, { cache: "no-store" });
      const d = await r.json();
      const results = d.organic_results || d.items || [];
      const list = byId("ios-list");
      list.innerHTML = "";
      results.slice(0,10).forEach(app => {
        const title = safe(app.title, "App");
        const link  = safe(app.link, "#");
        const dev   = safe(app?.developer?.name || app.developer, "");
        const ratingArr = Array.isArray(app.rating) ? app.rating : [];
        const r0 = ratingArr[0];
        const ratingLine = r0 ? ` <span style="opacity:.7">⭐ ${r0.rating} (${r0.count})</span>` : "";
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link}" target="_blank" rel="noopener">${title}</a>` +
                       (dev ? ` <span style="opacity:.7">by ${dev}</span>` : "") +
                       ratingLine;
        list.appendChild(li);
      });
      if (!results.length) list.innerHTML = "<li>No data</li>";
    } catch (e) {
      console.error(e);
      byId("ios-list").innerHTML = "<li>Failed to load</li>";
    }
  }

  async function loadAndroid() {
    try {
      const r = await fetch(`${WORKER}/api/android?country=${COUNTRY}&collection=topselling_free&num=10`, { cache: "no-store" });
      const d = await r.json();
      const results = d.organic_results || d.items || [];
      const list = byId("android-list");
      list.innerHTML = "";
      results.slice(0,10).forEach(a => {
        const name = safe(a.title || a.app_name || a.name, "App");
        const url  = safe(a.link || a.app_url || a.url, "#");
        const dev  = safe(a.developer || a.developer_name, "");
        const li = document.createElement("li");
        li.innerHTML = `<a href="${url}" target="_blank" rel="noopener">${name}</a>` +
                       (dev ? ` <span style="opacity:.7">${dev}</span>` : "");
        list.appendChild(li);
      });
      if (!results.length) list.innerHTML = "<li>No data</li>";
    } catch (e) {
      console.error(e);
      byId("android-list").innerHTML = "<li>Failed to load</li>";
    }
  }

  async function loadTrends() {
    try {
      const r = await fetch(`${WORKER}/api/trends?country=${COUNTRY}`, { cache: "no-store" });
      const d = await r.json();
      const items = d.trending_searches || d.news_results || d.stories || [];
      const list = byId("trends-list");
      list.innerHTML = "";
      items.slice(0,10).forEach(t => {
        const title = safe(t.query || t.title || (t?.news_results?.[0]?.title), "Trend");
        const link  = safe(t.explore_link || t.link, "#");
        const li = document.createElement("li");
        li.innerHTML = `<a href="${link}" target="_blank" rel="noopener">${title}</a>`;
        list.appendChild(li);
      });
      if (!items.length) list.innerHTML = "<li>No data</li>";
    } catch (e) {
      console.error(e);
      byId("trends-list").innerHTML = "<li>Failed to load</li>";
    }
  }

  loadIOS();
  loadAndroid();
  loadTrends();
})();
</script>
