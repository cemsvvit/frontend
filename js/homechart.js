var ctx = document.getElementById("Chart").getContext("2d");

Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = "#253341";

let energydata = [];
let energylabels = [
    "School",
    "Academics Block",
    "Admin Block",
    "Girl's Hostel",
    "Auditorium"
];

fetch("http://18.208.162.97/todaysusage")
    .then(function(response) {
        if (response.status !== 200) {
            console.log(
                "Looks like there was a problem. Status Code: " +
                    response.status
            );
            return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
            data.forEach(element => {
                energydata.push(element["Energy Consumed"]);
            });
            console.log(energydata);
            var myBarChart = new Chart(ctx, {
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
                }
            });
        });
    })
    .catch(function(err) {
        console.log("Fetch Error :-S", err);
    });
