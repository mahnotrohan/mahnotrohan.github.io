/* Shared site navigation for standalone Orrery charts. */
(function () {
  "use strict";

  var nav = document.createElement("header");
  nav.id = "site-nav";
  nav.innerHTML =
    '<div class="inner">' +
      '<a class="brand" href="/">Rohan\'s space</a>' +
      '<nav aria-label="Site navigation">' +
        '<a href="/blog">Writing</a>' +
        '<a href="/about">About</a>' +
        '<span class="group">Workshop</span>' +
        '<a class="current" href="/orrery">Orrery</a>' +
        '<a href="https://bloom.rohanmahnot.space">Bloom ↗</a>' +
        '<a href="https://www.are.na/rohan-mahnot-rh85hxg6yum/project-monet-oeekarcnrdy">Monet ↗</a>' +
      '</nav>' +
      '<span class="spacer"></span>' +
      '<button class="search-btn" id="orrery-search-open" type="button">Search</button>' +
      '<button class="menu-btn" id="site-nav-menu" type="button" aria-expanded="false" aria-controls="site-nav-drawer">Menu</button>' +
      '<div class="drawer" id="site-nav-drawer" aria-label="Site navigation">' +
        '<button class="drawer-search" id="orrery-search-open-mobile" type="button">Search</button>' +
        '<div class="drawer-label">Read</div>' +
        '<a href="/blog">Writing</a>' +
        '<a href="/about">About</a>' +
        '<div class="drawer-label">Workshop</div>' +
        '<a class="current" href="/orrery">Orrery</a>' +
        '<a href="https://bloom.rohanmahnot.space">Bloom ↗</a>' +
        '<a href="https://www.are.na/rohan-mahnot-rh85hxg6yum/project-monet-oeekarcnrdy">Project Monet ↗</a>' +
        '<div class="drawer-label">Off the clock</div>' +
        '<a href="/bookshelf">Shelf</a>' +
        '<a href="/thoughts/on-coffee">Coffee</a>' +
        '<a href="/thoughts/on-food">Food</a>' +
        '<div class="drawer-label">Tools</div>' +
        '<a href="/uses-this">Uses this</a>' +
      '</div>' +
      '<dialog id="orrery-search" aria-label="Search the site">' +
        '<form class="search-form" method="dialog"><input id="orrery-search-input" type="search" placeholder="Search writing, pages and constellations…" autocomplete="off"><button class="close-search" type="submit">Close</button></form>' +
        '<div class="results" id="orrery-search-results"><div class="empty">Type to search.</div></div>' +
      '</dialog>' +
    '</div>';

  document.body.prepend(nav);

  var menu = document.getElementById("site-nav-menu");
  var drawer = document.getElementById("site-nav-drawer");
  if (!menu || !drawer) return;

  menu.addEventListener("click", function () {
    var open = drawer.classList.toggle("open");
    menu.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      drawer.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }
  });

  var searchOpen = document.querySelectorAll("#orrery-search-open, #orrery-search-open-mobile");
  var search = document.getElementById("orrery-search");
  var searchInput = document.getElementById("orrery-search-input");
  var searchResults = document.getElementById("orrery-search-results");
  var searchIndex = null;

  function showResults(query) {
    if (!searchIndex) {
      searchResults.innerHTML = '<div class="empty">Loading…</div>';
      return;
    }
    query = query.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '<div class="empty">Type to search.</div>';
      return;
    }
    var hits = searchIndex.filter(function (item) {
      return [item.title, item.desc, item.body, (item.tags || []).join(" ")].join(" ").toLowerCase().indexOf(query) !== -1;
    }).slice(0, 12);
    if (!hits.length) {
      searchResults.innerHTML = '<div class="empty">Nothing for “' + query.replace(/[&<>\"]/g, "") + '”.</div>';
      return;
    }
    searchResults.innerHTML = "";
    hits.forEach(function (item) {
      var link = document.createElement("a");
      link.className = "result";
      link.href = item.url;
      var title = document.createElement("span");
      title.className = "result-title";
      title.textContent = item.title;
      var meta = document.createElement("span");
      meta.className = "result-meta";
      meta.textContent = item.kind;
      var desc = document.createElement("span");
      desc.className = "result-desc";
      desc.textContent = item.desc || "";
      link.append(title, meta, desc);
      searchResults.appendChild(link);
    });
  }

  if (searchOpen.length && search && searchInput && searchResults) {
    searchOpen.forEach(function (button) { button.addEventListener("click", function () {
      search.showModal();
      searchInput.focus();
      if (!searchIndex) {
        fetch("/search.json").then(function (response) { return response.json(); }).then(function (items) {
          searchIndex = items;
          showResults(searchInput.value);
        }).catch(function () { searchResults.innerHTML = '<div class="empty">Search is unavailable.</div>'; });
      }
    }); });
    searchInput.addEventListener("input", function () { showResults(searchInput.value); });
  }
}());
