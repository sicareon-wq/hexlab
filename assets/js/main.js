/* ============================================================
   HEXALAB — main.js v1
   Nav glass · hamburger · scroll reveal · active link
   ============================================================ */

/* Tandai JS aktif → animasi reveal hanya jalan jika JS ada (no-js fallback) */
document.documentElement.classList.add("js");

/* ---------- Navbar: glass saat scroll ---------- */
const nav = document.querySelector(".nav");

const onScroll = () => {
  nav.classList.toggle("scrolled", window.scrollY > 24);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Hamburger → panel slide kanan ---------- */
const burger = document.querySelector(".hamburger");
const panel = document.querySelector(".mobile-panel");

const togglePanel = (open) => {
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  panel.classList.toggle("open", open);
  document.body.classList.toggle("no-scroll", open);
};

burger.addEventListener("click", () =>
  togglePanel(!panel.classList.contains("open"))
);

panel.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => togglePanel(false))
);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && panel.classList.contains("open")) togglePanel(false);
});

/* ---------- Scroll reveal (IntersectionObserver + stagger) ---------- */
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduced && "IntersectionObserver" in window) {
  const items = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) =>
    el.classList.add("is-visible")
  );
}
