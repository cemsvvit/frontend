let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1; //January is 0!
let year = today.getFullYear();
if (date < 10) {
    date = "0" + date;
}
if (month < 10) {
    month = "0" + month;
}

today = year + "-" + month + "-" + date;
document.getElementById("date").setAttribute("max", today);

const renderprevgraph = async (day, block) => {
    let data = await fetchData(
        "previoususageptot/?date=" + day + "&mid=" + block
    );
    let processeddata = [];
    let labels = [];
    // Home Chart Calls
    data.forEach(element => {
        labels.push(element["tstamp"].slice(11, 16));
        processeddata.push(element["Ptot"]);
    });
    renderChart("line", processeddata, labels);
};

let pickdate = document.querySelector("#date");
let pickblock = document.querySelector("#block");

const goclick = () => {
    renderprevgraph(pickdate.value, pickblock.value);
};
