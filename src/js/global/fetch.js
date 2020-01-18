// Server URL
const serverURL = "http://3.6.41.81/";

// Fetching data from backend API
const fetchData = async route => {
    try {
        let response = await fetch(serverURL + route);
        let data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
