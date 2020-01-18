(async () => {
    let data = await fetchData("todaysusage");
    let processeddata = [];
    let labels = [
        "School",
        "Academics Block",
        "Admin Block",
        "Girl's Hostel",
        "Auditorium"
    ];

    // DOM manipulations
    document.querySelectorAll(".statcontent p")[0].innerHTML =
        Math.round(data[0]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[1].innerHTML =
        "12221" + "<br>units";
    document.querySelectorAll(".statcontent p")[2].innerHTML =
        "₹ " + Math.round(data[0]["Energy Consumed"] * 7);
    document.querySelectorAll(".statcontent p")[3].innerHTML = "₹ 100000";
    document.querySelectorAll(".statcontent p")[4].innerHTML = "0 errors";
    document.querySelectorAll(".statcontent p")[5].innerHTML = "0 warnings";

    // Home Chart Calls
    data.forEach(element => {
        processeddata.push(element["Energy Consumed"]);
    });
    renderChart("bar", processeddata, labels);
})();

// Navigation
document
    .querySelectorAll(".statheader svg")[0]
    .addEventListener("click", () => {
        window.location = "./usage.html";
    });
