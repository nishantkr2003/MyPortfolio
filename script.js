document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const lightModeIcon = document.getElementById("lightModeIcon");
  const darkModeIcon = document.getElementById("darkModeIcon");

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    if (savedTheme === "light") {
      lightModeIcon.classList.add("hidden");
      darkModeIcon.classList.remove("hidden");
    }
  }

  // Toggle theme on icon click
  lightModeIcon.addEventListener("click", () => {
    body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightModeIcon.classList.add("hidden");
    darkModeIcon.classList.remove("hidden");
  });

  darkModeIcon.addEventListener("click", () => {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkModeIcon.classList.add("hidden");
    lightModeIcon.classList.remove("hidden");
  });
});
