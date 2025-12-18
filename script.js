/* NAV SCROLL STYLE */
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
  
  /* PARALLAX HERO */
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector(".hero-img");
    heroImg.style.transform = `translateY(${scrolled * 0.15}px)`;
  });
  
  /* SCROLL REVEAL */
  function revealOnScroll() {
    document.querySelectorAll(".fade-up").forEach(el => {
      const trigger = window.innerHeight * 0.85;
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
  
  /* LIGHTBOX */
  document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
      const lb = document.querySelector("#lightbox");
      const lbImg = document.querySelector("#lightbox img");
      lbImg.src = img.src;
      lb.style.display = "flex";
    });
  });
  
  document.querySelector("#lightbox").addEventListener("click", () => {
    document.querySelector("#lightbox").style.display = "none";
  });
  