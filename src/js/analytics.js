let analyticsnav = document.querySelectorAll(".tool svg");

analyticsnav[1].addEventListener("click", () => {
    window.location.href = "previousdata.html";
});
analyticsnav[3].addEventListener("click", () => {
    window.location.href = "previousgraph.html";
});
analyticsnav[5].addEventListener("click", () => {
    window.location.href = "comparegraph.html";
});
