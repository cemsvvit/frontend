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

const renderprevdata = async day => {
    console.log("Triggered");
    let data = await fetchData("/dateprevious?date=" + day);
    let processeddata = [];
    let labels = [
        "School",
        "Academics Block",
        "Admin Block",
        "Girl's Hostel",
        "Auditorium"
    ];
    // Home Chart Calls
    data.forEach(element => {
        processeddata.push(element["Energy Consumed"]);
    });
    renderChart("bar", processeddata, labels);
};
