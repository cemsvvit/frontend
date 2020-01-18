let nav = document.querySelectorAll(".navigationitem");

// console.log(nav);
nav[0].addEventListener("click", () => {
    window.location.href = "home.html";
});
nav[1].addEventListener("click", () => {
    window.location.href = "analytics.html";
});

document.querySelector(".signoutbutton").addEventListener("click", () => {
    funcsignout();
});
