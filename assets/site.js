/* rohanmahnot.space — theme toggle, tag filtering, mobile sidebar, search. */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };

  /* ---------- theme ---------- */
  var toggle = $("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var root = document.documentElement;
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- mobile sidebar ---------- */
  var sbOpen = $("sb-open"), sbWrap = $("sb-wrap");
  if (sbOpen && sbWrap) {
    sbOpen.addEventListener("click", function () {
      sbWrap.classList.toggle("open");
    });
  }

  /* ---------- tag filtering on /blog ---------- */
  var filters = $("filters"), list = $("w-list");
  if (filters && list) {
    var rows = Array.prototype.slice.call(list.querySelectorAll(".w-row"));

    var apply = function (tag) {
      var shown = 0;
      rows.forEach(function (row) {
        var tags = (row.getAttribute("data-tags") || "").split(" ");
        var hit = tag === "all" || tags.indexOf(tag) !== -1;
        row.hidden = !hit;
        if (hit) shown++;
      });
      Array.prototype.forEach.call(filters.children, function (b) {
        b.classList.toggle("on", b.getAttribute("data-f") === tag);
      });
      if (history.replaceState) {
        history.replaceState(null, "", tag === "all" ? location.pathname : "#" + tag);
      }
      return shown;
    };

    filters.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (b) apply(b.getAttribute("data-f"));
    });

    // Tag chips elsewhere link to /blog#people, so honour the hash on load.
    var known = Array.prototype.map.call(filters.children, function (b) {
      return b.getAttribute("data-f");
    });
    var fromHash = function () {
      var h = decodeURIComponent((location.hash || "").replace(/^#/, ""));
      if (h && known.indexOf(h) !== -1) apply(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
  }

  /* ---------- search ---------- */
  var modal = $("search-modal"), input = $("search-input"), results = $("search-results");
  var openBtn = $("search-open");
  if (!modal || !input || !results) return;

  var index = null, loading = false;

  var load = function () {
    if (index || loading) return;
    loading = true;
    fetch(modal.getAttribute("data-search-url") || "/search.json")
      .then(function (r) { return r.json(); })
      .then(function (d) { index = d; loading = false; if (input.value) run(); })
      .catch(function () { loading = false; results.innerHTML = '<div class="sr-empty">Search is unavailable.</div>'; });
  };

  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };

  // Show the sentence around the first match, so results explain themselves.
  var snippet = function (body, q) {
    var i = body.toLowerCase().indexOf(q);
    if (i === -1) return "";
    var start = Math.max(0, i - 70), end = Math.min(body.length, i + q.length + 90);
    var frag = (start > 0 ? "…" : "") + body.slice(start, end) + (end < body.length ? "…" : "");
    var re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
    return esc(frag).replace(re, "<mark>$1</mark>");
  };

  var run = function () {
    var q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = ""; return; }
    if (!index) { results.innerHTML = '<div class="sr-empty">Loading…</div>'; return; }

    var hits = [];
    index.forEach(function (it) {
      var score = 0;
      if (it.title.toLowerCase().indexOf(q) !== -1) score += 10;
      if ((it.desc || "").toLowerCase().indexOf(q) !== -1) score += 5;
      if ((it.tags || []).join(" ").toLowerCase().indexOf(q) !== -1) score += 4;
      if ((it.body || "").toLowerCase().indexOf(q) !== -1) score += 1;
      if (score > 0) hits.push({ it: it, score: score });
    });
    hits.sort(function (a, b) { return b.score - a.score; });

    if (!hits.length) {
      results.innerHTML = '<div class="sr-empty">Nothing for “' + esc(input.value) + '”.</div>';
      return;
    }
    results.innerHTML = hits.slice(0, 12).map(function (h) {
      var it = h.it;
      var sn = snippet(it.body || "", q) || esc(it.desc || "");
      return '<a class="sr" href="' + it.url + '">' +
             '<span class="sr-t">' + esc(it.title) + '</span>' +
             '<span class="sr-m">' + (it.date ? esc(it.date) + " · " : "") + esc(it.kind) + '</span>' +
             (sn ? '<span class="sr-s">' + sn + '</span>' : '') +
             '</a>';
    }).join("");
  };

  var open = function () {
    load();
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    input.focus();
    input.select();
  };
  var close = function () {
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
  };

  if (openBtn) openBtn.addEventListener("click", open);
  input.addEventListener("input", run);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) close();
  });

  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); open(); return; }
    if (e.key === "Escape" && !modal.hidden) close();
    if (e.key === "Enter" && !modal.hidden) {
      var first = results.querySelector("a.sr");
      if (first) window.location.href = first.getAttribute("href");
    }
  });
})();
