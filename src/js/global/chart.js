// Chart JS Config
let chart = null;
let ctx = document.getElementById("Chart").getContext("2d");

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

// Render Chart
const renderChart = (type, data, labels) => {
    if (chart != null) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Usage",
                    backgroundColor: "#1da1f2",
                    data: data
                }
            ]
        },
        options: Chart.options
    });
};
