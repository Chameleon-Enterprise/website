(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.querySelector("#main-navigation");
  const label = toggle.querySelector(".nav-toggle-label");
  const mobile = window.matchMedia("(max-width: 760px)");
  const trail = document.querySelector(".chameleon-trail");
  const walker = document.querySelector(".chameleon-walker");
  const trailEnabled = window.matchMedia("(prefers-reduced-motion: no-preference)");
  const horizontalTrail = window.matchMedia("(max-width: 1100px)");
  let walkTimer;
  let menuOpen = false;
  let keyboardNavigation = false;
  let lastScroll = Math.max(0, window.scrollY);
  let scrollTravel = 0;
  let scrollDirection = 0;
  let framePending = false;

  function showHeader() {
    header.classList.remove("header-hidden");
  }

  function setMenu(open) {
    menuOpen = mobile.matches && open;
    toggle.setAttribute("aria-expanded", String(menuOpen));
    label.textContent = menuOpen ? "Close" : "Menu";
    navigation.hidden = mobile.matches && !menuOpen;
    header.classList.toggle("menu-open", menuOpen);
    showHeader();
  }

  function syncLayout() {
    toggle.hidden = !mobile.matches;
    setMenu(false);
    lastScroll = Math.max(0, window.scrollY);
    scrollTravel = 0;
  }

  toggle.addEventListener("click", () => setMenu(!menuOpen));
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") keyboardNavigation = true;
    if (event.key === "Escape" && menuOpen) {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener("pointerdown", (event) => {
    keyboardNavigation = false;
    if (menuOpen && !header.contains(event.target)) setMenu(false);
  });
  header.addEventListener("focusin", showHeader);
  mobile.addEventListener("change", syncLayout);

  function updateScroll() {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const currentScroll = Math.min(maxScroll, Math.max(0, window.scrollY));
    const movement = currentScroll - lastScroll;
    const direction = Math.sign(movement);
    if (direction && direction !== scrollDirection) scrollTravel = 0;
    if (direction) scrollDirection = direction;
    scrollTravel += movement;

    if (trailEnabled.matches) {
      trail.hidden = false;
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
      const horizontal = horizontalTrail.matches;
      const travel = Math.max(0, horizontal
        ? trail.clientWidth - walker.offsetWidth
        : trail.clientHeight - walker.offsetHeight);
      walker.style.transform = `translate${horizontal ? "X" : "Y"}(${Math.round(progress * travel)}px)`;
      const heading = scrollDirection || 1;
      walker.style.setProperty("--chameleon-angle", horizontal ? "0deg" : "90deg");
      walker.style.setProperty("--chameleon-facing", String(heading));
      if (movement) {
        walker.classList.add("is-walking");
        window.clearTimeout(walkTimer);
        walkTimer = window.setTimeout(() => walker.classList.remove("is-walking"), 160);
      }
    } else {
      trail.hidden = true;
      walker.classList.remove("is-walking");
      window.clearTimeout(walkTimer);
    }

    header.classList.toggle("is-scrolled", currentScroll > 8);
    const focusInside = keyboardNavigation && header.contains(document.activeElement);
    if (currentScroll < 24 || menuOpen || focusInside) {
      showHeader();
    } else if (direction && Math.abs(scrollTravel) >= 10) {
      header.classList.toggle("header-hidden", direction > 0 && currentScroll > header.offsetHeight);
    }

    lastScroll = currentScroll;
    framePending = false;
  }

  window.addEventListener("scroll", () => {
    if (!framePending) {
      framePending = true;
      window.requestAnimationFrame(updateScroll);
    }
  }, { passive: true });
  window.addEventListener("pageshow", () => {
    syncLayout();
    updateScroll();
  });
  window.addEventListener("resize", () => {
    if (!framePending) {
      framePending = true;
      window.requestAnimationFrame(updateScroll);
    }
  });
  trailEnabled.addEventListener("change", updateScroll);
  syncLayout();
  updateScroll();
})();
