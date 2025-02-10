const themeToggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;

// Check if theme is stored in localStorage
let currentTheme = localStorage.getItem("theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

root.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

themeToggleButton.addEventListener("click", () => {
    let newTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const svgs = themeToggleButton.querySelectorAll("svg");
    if (theme === "dark") {
        svgs[0].style.display = "none";  
        svgs[1].style.display = "block"; 
    } else {
        svgs[0].style.display = "block";
        svgs[1].style.display = "none"; 
    }
}

updateThemeIcon(currentTheme);
