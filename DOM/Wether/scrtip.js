const input = document.getElementById("input");
const btn = document.getElementById("btn");
const loc = document.getElementById("loc");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const all = document.getElementById("all");
const all1 = document.getElementById("all1");
const all2 = document.getElementById("all2");
const all3 = document.getElementById("all3");
const icon = document.getElementById("weather-icon");

const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=0feb7fd45492c7084df62e48214b6551&units=metric";

function updateWeather(city) {
    fetch(weatherApi + city + apiKey)
        .then(res => res.json())
        .then(data => {
loc.textContent=` 📍 ${data.name}`;
temp.textContent= data.main.temp;
all.textContent = ` Pressure ; ${data.main.pressure} mm `;
all1.textContent = `Humidity : ${data.main.humidity} % `;
all2.textContent = `Wind : ${data.main.wind.speed} m/s `;
all3.textContent = `Wind : ${data.main.wind.speed} m/s `;
all2.textContent = `Wind : ${data.main.wind.speed} m/s `;

        })

    }

    btn.addEventListener("click", () => {
        const city = input.value;
        updateWeather(city)
    })

