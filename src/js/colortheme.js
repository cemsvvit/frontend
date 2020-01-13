var colorswitch = document.querySelector(".colormode");
document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("colormode")
);

if (localStorage.getItem("colormode") == "dark") {
    colorswitch.classList.add("dark");
    Chart.defaults.global.defaultFontColor = "white";
    try {
        // myChart.destroy();
        drawchart();
    } catch (error) {
        console.log(error);
    }
} else {
    colorswitch.classList.remove("dark");
    Chart.defaults.global.defaultFontColor = "#0c1018";
    try {
        // myChart.destroy();
        drawchart();
    } catch (error) {
        console.log(error);
    }
}

colorswitch.addEventListener("click", () => {
    console.log("Clicked");
    if (localStorage.getItem("colormode") == "dark") {
        localStorage.setItem("colormode", "light");
        document.documentElement.setAttribute("data-theme", "light");
        Chart.defaults.global.defaultFontColor = "#0c1018";
        try {
            // myChart.destroy();
            drawchart();
        } catch (error) {
            console.log(error);
        }
    } else {
        localStorage.setItem("colormode", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        Chart.defaults.global.defaultFontColor = "white";
        try {
            // myChart.destroy();
            drawchart();
        } catch (error) {
            console.log(error);
        }
    }
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
        colorswitch.classList.toggle("dark");
    }, 800);
});
