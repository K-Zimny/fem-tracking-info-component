const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navUl = document.querySelector("#navUl");
const closeBtn = document.querySelector("#closeBtn");

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
