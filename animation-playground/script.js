const toggleBtn = document.getElementById("toggleTheme");
const triggerAnim = document.getElementById("triggerAnim");
const box = document.getElementById("box");
const themeStatus = document.getElementById("themeStatus");

// Load saved theme from localStorage
function loadTheme() {
  const saved = localStorage.getItem("theme");
  document.body.className = saved || "light";
  themeStatus.textContent = `Current theme: ${saved || "light"}`;
}

toggleBtn.addEventListener("click", () => {
  const current = document.body.classList.contains("light") ? "dark" : "light";
  document.body.className = current;
  localStorage.setItem("theme", current);
  themeStatus.textContent = `Current theme: ${current}`;
});

triggerAnim.addEventListener("click", () => {
  box.classList.remove("bounce");
  void box.offsetWidth; // force reflow
  box.classList.add("bounce");
});

// Initialize on page load
loadTheme();