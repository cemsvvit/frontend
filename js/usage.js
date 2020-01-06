console.log("Usage connected");

let usagedata = [];

function fetchdata() {
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
                usagedata = data;
            });
        })
        .catch(function(err) {
            console.log("Fetch Error :-S", err);
        });
}

function updatedata() {
    fetchdata();
    document.querySelectorAll(".statcontent p")[0].innerHTML =
        Math.round(usagedata[0]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[1].innerHTML =
        "12221" + "<br>units";
    document.querySelectorAll(".statcontent p")[2].innerHTML =
        Math.round(usagedata[1]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[3].innerHTML =
        "12221" + "<br>units";
    document.querySelectorAll(".statcontent p")[4].innerHTML =
        Math.round(usagedata[2]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[5].innerHTML =
        "12221" + "<br>units";
    document.querySelectorAll(".statcontent p")[6].innerHTML =
        Math.round(usagedata[3]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[7].innerHTML =
        "12221" + "<br>units";
    document.querySelectorAll(".statcontent p")[8].innerHTML =
        Math.round(usagedata[4]["Energy Consumed"]) + "<br>units";
    document.querySelectorAll(".statcontent p")[9].innerHTML =
        "12221" + "<br>units";
}

let dataupdateloop = setInterval(updatedata, 1000);
