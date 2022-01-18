function storeTheme(themeName) {
    localStorage.setItem('theme', themeName);
}

function loadTheme() {
    var storedTheme = localStorage.getItem('theme')

    if (storedTheme == "light") {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector(".sun-logo").classList.toggle("animate-sun");
        document.querySelector(".moon-logo").classList.toggle("animate-moon");
    }
}

document.querySelector(".lightdark").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");

    var currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme == "light") {
        document.documentElement.removeAttribute('data-theme', 'light');
        storeTheme('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        storeTheme('light');
    }
})

loadTheme();