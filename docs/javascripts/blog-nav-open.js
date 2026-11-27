// Keeps the blog's Archive and Categories sections open in the sidebar.
// navigation.sections is off in mkdocs.yml so the project sections fold open
// and closed. This opens every folding section under the Blog tab instead, so
// the archive and categories stay visible on blog pages.
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".md-nav--primary > .md-nav__list > .md-nav__item--nested")
    .forEach(function (item) {
      var link = item.querySelector(".md-nav__container > a, :scope > a");
      if (!link || !/\/blog\/$/.test(new URL(link.href).pathname)) return;
      item.querySelectorAll(".md-nav__toggle").forEach(function (toggle) {
        toggle.checked = true;
        var nav = toggle.parentElement.querySelector(":scope > nav.md-nav");
        if (nav) nav.setAttribute("aria-expanded", "true");
      });
    });
});
