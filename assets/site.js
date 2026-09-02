/* rohanmahnot.space — tag filtering for the writing index. */
(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };

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
        var active = b.getAttribute("data-f") === tag;
        b.classList.toggle("on", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
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
})();
