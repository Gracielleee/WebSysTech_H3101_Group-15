(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // 1. Get the current page's identifier from the body tag
    var currentPageId = document.body.getAttribute("data-page-id");

    // 2. Select all nav links with data-page-id
    var navLinks = document.querySelectorAll(".nav-link[data-page-id]");

    navLinks.forEach(function (link) {
      // Reset all links
      link.classList.remove("active");
      link.removeAttribute("aria-current");

      // 3. Compare each link's data-page-id with the current page ID
      var linkId = link.getAttribute("data-page-id");
      if (linkId === currentPageId) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  });
})();
