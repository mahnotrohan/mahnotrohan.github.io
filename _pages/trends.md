---
layout: page
title: "Trends"
permalink: /trends
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
  const COUNTRY = "in"; // set your default; use "us" if you prefer
  const WORKER = "https://trends-proxy.rohan-mahnot27.workers.dev"; // <-- your Worker URL

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
  const url = `${WORKER}/api/android?collection=topselling_free&gl=IN&hl=en&num=10`; // try gl=US to compare
  const data = await fetchJSON(url, "android-list");
  if (!data) return;

  // Prefer explicit arrays SerpApi returns for charts; fall back to organic_results
  let items = data.apps || data.app_results || data.organic_results || data.items || [];

  // Keep only real app detail links
  items = items.filter(x => (x.link || x.url || "").includes("/store/apps/details"));

  const list = document.getElementById("android-list");
  list.innerHTML = "";
  items.slice(0,10).forEach(a => {
    const name = a.title || a.app_name || a.name || "App";
    const url  = a.link || a.url || a.app_url || "#";
    const dev  = a.developer || a.developer_name || (a?.seller?.name) || "";
    const li = document.createElement("li");
    li.innerHTML = `<a href="${url}" target="_blank" rel="noopener">${name}</a>` +
                   (dev ? ` <span style="opacity:.7">${dev}</span>` : "");
    list.appendChild(li);
  });
  if (!items.length) list.innerHTML = "<li>No data</li>";
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
