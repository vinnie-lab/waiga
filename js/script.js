document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      navToggle.classList.toggle("active"); // For animating the hamburger icon
      document.body.classList.toggle("no-scroll"); // Optional: prevent scrolling when menu open
    });

    // Close nav when a link is clicked (for single-page navigation or if desired)
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("active")) {
          mainNav.classList.remove("active");
          navToggle.classList.remove("active");
          document.body.classList.remove("no-scroll");
        }
      });
    });
  }

  // Hero Carousel (Basic Implementation)
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  const intervalTime = 5000; // 5 seconds

  function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  function nextCarouselItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
  }

  if (carouselItems.length > 0) {
    showCarouselItem(currentIndex); // Show the first item initially
    setInterval(nextCarouselItem, intervalTime);
  }

  // Update current year in footer
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
