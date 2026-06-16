// Scroll reveal
const photoMotionTargets = [
  ".event-card",
  ".usap-event-card",
  ".service-side-image",
  ".conference-collage",
  ".patent-certificate-fan",
  ".philosophy-feature-image",
  ".message-portrait",
  ".company-photos figure",
  ".member-photo",
].join(", ");

const photoMotionElements = document.querySelectorAll(photoMotionTargets);
const sectionMotionElements = document.querySelectorAll(".page-section");

if (photoMotionElements.length || sectionMotionElements.length) {
  document.body.classList.add("motion-ready");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

sectionMotionElements.forEach((el) => observer.observe(el));
photoMotionElements.forEach((el) => observer.observe(el));

// Header background on scroll
const siteHeader = document.querySelector(".site-header");
if (siteHeader) {
  const onScroll = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Mobile nav
const navToggle = document.getElementById("navToggle");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".global-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
