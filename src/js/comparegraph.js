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
document.getElementById("date1").setAttribute("max", today);
document.getElementById("date2").setAttribute("max", today);

const renderprevgraph = async (day1, day2, block) => {
    let data1 = await fetchData(
        "previoususageptot/?date=" + day1 + "&mid=" + block
    );
    let data2 = await fetchData(
        "previoususageptot/?date=" + day2 + "&mid=" + block
    );
    let processeddata1 = [];
    let labels1 = [];
    let processeddata2 = [];
    let labels2 = [];
    // Home Chart Calls
    data1.forEach(element => {
        labels1.push(element["tstamp"].slice(11, 16));
        processeddata1.push(element["Ptot"]);
    });
    data2.forEach(element => {
        labels2.push(element["tstamp"].slice(11, 16));
        processeddata2.push(element["Ptot"]);
    });

    // Chart JS Config
    let chart1 = null;
    let chart2 = null;
    let ctx1 = document.getElementById("Chart1").getContext("2d");
    let ctx2 = document.getElementById("Chart2").getContext("2d");

    Chart.defaults.global.defaultFontSize = 15;
    // Chart.defaults.global.defaultFontColor = "#0c1018";
    Chart.defaults.global.defaultFontColor = "white";
    Chart.defaults.global.defaultFontFamily = "Montserrat";

    Chart.options = {
        maintainAspectRatio: false,
        beginAtZero: true,
        zeroLineColor: "rgba(0,0,0,0)",
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)"
                    },
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false
                    }
                }
            ]
        }
    };

    chart1 = new Chart(ctx1, {
        type: "line",
        data: {
            labels: labels1,
            datasets: [
                {
                    label: "Usage",
                    backgroundColor: "#1da1f2",
                    data: processeddata1
                }
            ]
        },
        options: Chart.options
    });

    chart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: labels2,
            datasets: [
                {
                    label: "Usage",
                    backgroundColor: "#1da1f2",
                    data: processeddata2
                }
            ]
        },
        options: Chart.options
    });
};

let pickdate1 = document.querySelector("#date1");
let pickdate2 = document.querySelector("#date2");
let pickblock = document.querySelector("#block");

const goclick = () => {
    renderprevgraph(pickdate1.value, pickdate2.value, pickblock.value);
};
