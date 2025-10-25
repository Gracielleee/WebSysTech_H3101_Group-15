(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // 1. Get the current page's filename from the full path.
    //Handles cases where the path might end with a trailing slash or be empty (for the root index page)
    var currentPath = window.location.pathname;
    var currentPageFilename = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

    // 2. Select all nav links in the navbar (in both the main and offcanvas menus).
    var navLinks = document.querySelectorAll(".nav-link[data-page]");

    navLinks.forEach(function(link) {
      // Remove active class and aria-current from all links to reset the state.
      link.classList.remove("active");
      link.removeAttribute("aria-current");

      // 3. Get the the data-page attribute from the link.
      var linkIdentifier = link.getAttribute("data-page");

      // 4. Compare the link's data-page identifier with the current page's filename
      if (linkIdentifier === currentPageFilename) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
      }
    });
  });
})();
