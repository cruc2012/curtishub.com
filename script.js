const toggle = document.getElementById("themeToggle");

function setTheme(mode) {
  document.body.classList.toggle("dark", mode === "dark");
  document.cookie = `theme=${mode}; path=/; max-age=31536000`;
}

function getCookie(name) {
  return document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="))
    ?.split("=")[1];
}

// 🔥 Default to DARK if no cookie exists
const savedTheme = getCookie("theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme("dark");
}

toggle?.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});
