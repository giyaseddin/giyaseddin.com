function onScroll() {
  const header = document.getElementById("header")
  if (window.scrollY > 0) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
}

let ticking = false;
document.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});
