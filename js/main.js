document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-link");
  let menuOpen = false;

  // GSAP Timeline for animation
  const tl = gsap.timeline({ paused: true });

  tl.to(navLinks, {
    x: 0, // Slide in from right
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

const items = document.querySelectorAll(".education-timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

items.forEach((item) => {
  observer.observe(item);
});

// Initialize ScrollReveal
ScrollReveal().reveal(".scroll-reveal", {
  delay: 150,
  duration: 1000,
  distance: "50px",
  origin: "bottom",
  easing: "ease-in-out",
  reset: false,
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-fill");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  progressBars.forEach((bar) => observer.observe(bar));
});

function showNotDeployedAlert() {
  Swal.fire({
    icon: "info",
    title: "Not Deployed",
    text: "This project website has not deploy yet. You can Visit in GitHub",
    confirmButtonText: "OKAY",
  });
}


  const botToken = '7559810524:AAHEU3Lu-ynrJ7it5WX7oh2hrOwE_dZjzgE';
  const chatId = '-1002887359185'; 

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    const text = `
📥 <b>New Portfolio Contact</b>\n
👤 <b>Name:</b> ${name}\n
📧 <b>Email:</b> ${email}\n
💬 <b>Message:</b>\n${message}
    `;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML" // ✅ Enables bold text formatting
      })
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        alert("✅ Message sent to Telegram!");
        document.getElementById("contactForm").reset();
      } else {
        alert("❌ Failed to send message.\n" + data.description);
        console.error("Telegram error:", data);
      }
    })
    .catch((error) => {
      alert("⚠️ Error sending message.");
      console.error("Fetch error:", error);
    });
  }); 

//  const marquee = document.getElementById("myMarquee");

//   marquee.addEventListener("mouseover", () => {
//     marquee.stop();
//   });

//   marquee.addEventListener("mouseout", () => {
//     marquee.start();
//   });
