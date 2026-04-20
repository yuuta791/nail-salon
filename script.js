const menuBtn = document.getElementById("menu-btn");
const globalNav = document.getElementById("global-nav");

if (menuBtn && globalNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = globalNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const fadeTargets = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.15
});

fadeTargets.forEach((target) => observer.observe(target));
