var ctx = document.getElementById("Chart").getContext("2d");

Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = "#0c1018";

let energydata = [];
let energylabels = [];
var myChart;

function drawchart() {
    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: energylabels,
            datasets: [
                {
                    label: "Usage",
                    backgroundColor: "#1da1f2",
                    data: energydata
                }
            ]
        },
        options: {
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
        }
    });
}

function getblockdata(block) {
    let url = "http://18.208.162.97/ptottoday";
    url = url + block;
    energydata = [];
    energylabels = [];
    fetch(url)
        .then(function(response) {
            if (response.status !== 200) {
                console.log(
                    "Looks like there was a problem. Status Code: " +
                        response.status
                );
                return;
            }

            response.json().then(function(data) {
                data.forEach(element => {
                    if (element["tstamp"].slice(14, 16) == "01") {
                        energylabels.push(element["tstamp"].slice(11, 13));
                        energydata.push(element["Ptot"]);
                    }
                });
                myChart.destroy();
                drawchart();
            });
        })
        .catch(function(err) {
            console.log("Fetch Error :-S", err);
        });
}

// Initalize graph
fetch("http://18.208.162.97/ptottoday2")
    .then(function(response) {
        if (response.status !== 200) {
            console.log(
                "Looks like there was a problem. Status Code: " +
                    response.status
            );
            return;
        }

        response.json().then(function(data) {
            data.forEach(element => {
                if (element["tstamp"].slice(14, 16) == "01") {
                    energylabels.push(element["tstamp"].slice(11, 13));
                    energydata.push(element["Ptot"]);
                }
            });
            drawchart();
        });
    })
    .catch(function(err) {
        console.log("Fetch Error :-S", err);
    });

var statcards = document.querySelectorAll(".statcard");

statcards[0].addEventListener("click", () => {
    getblockdata(2);
});
statcards[1].addEventListener("click", () => {
    getblockdata(3);
});
statcards[2].addEventListener("click", () => {
    getblockdata(4);
});
statcards[3].addEventListener("click", () => {
    getblockdata(5);
});
statcards[4].addEventListener("click", () => {
    getblockdata(6);
});
