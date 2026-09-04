/* Shared site navigation for standalone Orrery charts. */
(function () {
  "use strict";

  var nav = document.createElement("header");
  nav.id = "site-nav";
  nav.innerHTML =
    '<div class="inner">' +
      '<a class="brand" href="/">' +
        '<span class="brand-mark" aria-hidden="true"></span>' +
        '<span>Rohan Mahnot</span>' +
      '</a>' +
      '<nav aria-label="Primary navigation">' +
        '<a href="/">Home</a>' +
        '<a href="/blog">Writing</a>' +
        '<a href="/about">About</a>' +
        '<a class="current" aria-current="page" href="/orrery">Orrery</a>' +
      '</nav>' +
    '</div>';

  document.body.prepend(nav);
}());
