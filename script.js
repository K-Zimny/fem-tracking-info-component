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
// mediaQuery.matches(alert);

// function alert() {
//   alert("Hello World");
// }

// // Create a media condition that targets viewports at least 768px wide
// const mediaQuery = window.matchMedia("(min-width: 768px)");
// // Check if the media query is true
// mediaQuery.matches(alert);
// // Then trigger an alert
// function alert() {
//   alert("Hello World");
// }

function checkMediaQuery() {
  // If the inner width of the window is greater then 768px
  if (window.innerWidth > 1024) {
    // Then log this message to the console
    showDesktopMenu();
  } else {
    hideMobileMenu();
  }
}

// Add a listener for when the window resizes
window.addEventListener("resize", checkMediaQuery);
