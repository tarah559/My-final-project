let li = document.querySelector("#day-time");
let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, '0'); 

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

li.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let city = searchInput.value.trim();
    let h1 = document.querySelector("h1"); 
    h1.innerHTML = `${searchInput.value}`;

    if (city.length === 0) {
        return;
    }

    let apiKey = "1524cd1695c511ab5e28d69b1070ad5f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(showTemperature);

}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
    console.log(response.data);
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature")
    let description=document.querySelector("#description-temp");
    temperatureElement.innerHTML = temperature;
    description.innerHTML=response.data.weather[0].description;
}









