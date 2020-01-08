console.log("Home connected");

localStorage.setItem("colormode", "light");

let usagedata = [];

function fetchdata() {
    fetch("http://52.23.205.22/todaysusage")
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
        "₹ " + Math.round(usagedata[0]["Energy Consumed"] * 7);
    document.querySelectorAll(".statcontent p")[3].innerHTML = "₹ 100000";
    document.querySelectorAll(".statcontent p")[4].innerHTML = "0 errors";
    document.querySelectorAll(".statcontent p")[5].innerHTML = "0 warnings";
}

let dataupdateloop = setInterval(updatedata, 1000);

// Navigation
document
    .querySelectorAll(".statheader svg")[0]
    .addEventListener("click", () => {
        window.location = "./usage.html";
    });
