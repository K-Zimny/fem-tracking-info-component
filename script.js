const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navUl = document.querySelector("#navUl");
const closeBtn = document.querySelector("#closeBtn");
// const mediaQuery = window.matchMedia("(min-width: 1024px)");

hamburgerBtn.addEventListener("click", showMobileMenu);
closeBtn.addEventListener("click", hideMobileMenu);

function showMobileMenu() {
  navUl.style.display = "flex";
  closeBtn.style.display = "flex";
  hamburgerBtn.style.display = "none";
}

function hideMobileMenu() {
  navUl.style.display = "none";
  closeBtn.style.display = "none";
  hamburgerBtn.style.display = "flex";
}

function showDesktopMenu() {
  navUl.style.display = "flex";
  closeBtn.style.display = "none";
  hamburgerBtn.style.display = "none";
}

function checkMediaQuery() {
  if (window.innerWidth > 1024) {
    showDesktopMenu();
  } else {
    hideMobileMenu();
  }
}

// Add a listener for when the window resizes
window.addEventListener("resize", checkMediaQuery);
