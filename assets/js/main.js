document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 150, // Slightly larger offset for earlier animation start
    delay: 0, // No additional delay
    duration: 400, // Faster animations for smoother scrolling
    easing: "ease-out", // Simple easing for smoother transitions
    once: true, // Animate elements only once
    mirror: false, // Do not reanimate when scrolling back
    anchorPlacement: "top-bottom", // Trigger animation when the top of the element hits the bottom of the viewport
    disable: "mobile", // Disable AOS on mobile for better performance
  });
});
//
