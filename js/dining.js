(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const carouselIds = [
      "#breakfastCarousel",
      "#restaurantCarousel",
      "#barCarousel",
    ];
    carouselIds.forEach((id) => {
      const element = document.querySelector(id);
      if (!element) return;
      const carousel = new bootstrap.Carousel(element, {
        interval: 4000,
        pause: "hover",
        ride: "carousel",
      });
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          carousel.pause();
        } else {
          carousel.cycle();
        }
      });
    });
  });
})();
