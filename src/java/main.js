const themeToggleButton = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon-theme");
const moonIcon = document.getElementById("moon-icon-theme");
if (localStorage.getItem("theme") === "night") {
  document.body.classList.add("night-mode");
  moonIcon.style.display = "inline";
  sunIcon.style.display = "none";
}

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");

  if (document.body.classList.contains("night-mode")) {
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
    localStorage.setItem("theme", "night");
  } else {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
    localStorage.removeItem("theme");
  }
});