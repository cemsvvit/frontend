var colorswitch = document.querySelector(".colormode");

colorswitch.addEventListener("click", () => {
    if (colorswitch.classList.contains("dark")) {
        document.documentElement.setAttribute("data-theme", "light");
        Chart.defaults.global.defaultFontColor = "#0c1018";
        drawchart();
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        Chart.defaults.global.defaultFontColor = "white";
        drawchart();
    }
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
        colorswitch.classList.toggle("dark");
    }, 1000);
});
