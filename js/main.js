document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-link");
  let menuOpen = false;

  // GSAP Timeline for animation
  const tl = gsap.timeline({ paused: true });

  tl.to(navLinks, {
    x: 0,  // Slide in from right
    opacity: 1,
    visibility: "visible",
    duration: 0.5,
    ease: "power3.out",
  });

  menuIcon.addEventListener("click", function () {
    menuOpen = !menuOpen;

    if (menuOpen) {
      tl.play(); // Show menu

      gsap.to(menuIcon, {
        rotate: 180,
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out",
      });

      menuIcon.innerHTML = "&#10006;"; // Change to ✖
      document.body.classList.add("menu-open"); // Add class when menu is open
    } else {
      tl.reverse(); // Hide menu

      gsap.to(menuIcon, {
        rotate: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      menuIcon.innerHTML = "&#9776;"; // Change back to ☰
      document.body.classList.remove("menu-open"); // Remove class when menu is closed
    }
  });
});



// Initialize ScrollReveal
ScrollReveal().reveal('.scroll-reveal', {
  delay: 150,
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease-in-out',
  reset: false,     
});



// my education