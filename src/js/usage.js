// Statcards data fetch and DOM manipulations
(async () => {
    let data = await fetchData("todaysusage");
    // DOM manipulations
    document.querySelectorAll(".statcontent p")[0].innerHTML =
        Math.round(data[0]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[1].innerHTML =
        "12221" + "<br>units";
    document.querySelectorAll(".statcontent p")[2].innerHTML =
        Math.round(data[1]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[3].innerHTML =
        "12221" + "<br>units";
    document.querySelectorAll(".statcontent p")[4].innerHTML =
        Math.round(data[2]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[5].innerHTML =
        "12221" + "<br>units";
    document.querySelectorAll(".statcontent p")[6].innerHTML =
        Math.round(data[3]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[7].innerHTML =
        "12221" + "<br>units";
    document.querySelectorAll(".statcontent p")[8].innerHTML =
        Math.round(data[4]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[9].innerHTML =
        "12221" + "<br>units";
})();

// fetch usage data and render chart
const usageChartRender = async block => {
    // Usage Chart Calls
    let labels = [];
    let processeddata = [];
    let data = await fetchData("ptottoday" + block);
    data.forEach(element => {
        labels.push(element["tstamp"].slice(11, 16));
        processeddata.push(element["Ptot"]);
    });
    renderChart("line", processeddata, labels);
};

usageChartRender("2");

var statcards = document.querySelectorAll(".statcard");

statcards[0].addEventListener("click", () => {
    usageChartRender(2);
});
statcards[1].addEventListener("click", () => {
    usageChartRender(3);
});
statcards[2].addEventListener("click", () => {
    usageChartRender(4);
});
statcards[3].addEventListener("click", () => {
    usageChartRender(5);
});
statcards[4].addEventListener("click", () => {
    usageChartRender(6);
});
