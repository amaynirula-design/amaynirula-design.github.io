(() => {
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  const label = button.querySelector(".theme-toggle__label");
  const symbol = button.querySelector(".theme-toggle__symbol");

  const updateButton = (theme) => {
    const isDark = theme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
    label.textContent = isDark ? "Light mode" : "Dark mode";
    symbol.textContent = isDark ? "☼" : "◐";
  };

  const currentTheme = document.documentElement.dataset.theme || "light";
  updateButton(currentTheme);

  button.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    updateButton(nextTheme);

    try {
      window.localStorage.setItem("amay-theme", nextTheme);
    } catch (_) {
      // Theme changes still work for this page when storage is disabled.
    }
  });
})();