document.getElementById("hamburgerBtn").addEventListener("click", function () {
  document.getElementById("navUl").style.display = "flex";
  document.getElementById("closeBtn").style.display = "flex";
  document.getElementById("hamburgerBtn").style.display = "none";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("navUl").style.display = "none";
  document.getElementById("closeBtn").style.display = "none";
  document.getElementById("hamburgerBtn").style.display = "flex";
});
