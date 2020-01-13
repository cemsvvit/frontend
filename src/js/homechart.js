var ctx = document.getElementById("Chart").getContext("2d");

Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = "#0c1018";

let energydata = [];
let energylabels = [
    "School",
    "Academics Block",
    "Admin Block",
    "Girl's Hostel",
    "Auditorium"
];

var myChart;

function drawchart() {
    console.log("drawing");
    myChart = new Chart(ctx, {
        type: "bar",
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

fetch("http://52.23.205.22//todaysusage")
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
                energydata.push(element["Energy Consumed"]);
            });
            drawchart();
        });
    })
    .catch(function(err) {
        console.log("Fetch Error :-S", err);
    });
