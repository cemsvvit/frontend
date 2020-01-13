function getData(url) {
    data = fetch(url)
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
                return data;
            });
        })
        .catch(function(err) {
            console.log("Fetch Error :-S", err);
        });
    return data;
}

getData("http://dummy.restapiexample.com/api/v1/employees");
