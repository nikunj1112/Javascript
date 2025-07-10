const input = document.getElementById("input");
const btn = document.getElementById("btn");
const loc = document.getElementById("loc");
const date = document.getElementById("data");
const temp = document.getElementById("temp");
const all = document.getElementById("all");
const all1 = document.getElementById("all1");
const all2 = document.getElementById("all2");
const all3 = document.getElementById("all3");
const all4 = document.getElementById("all4");


const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=0feb7fd45492c7084df62e48214b6551&units=metric";

function Weather(city) {
    fetch(weatherApi + city + apiKey)
        .then(res => res.json())
        .then(data => {
            
            if (data.cod !== 200) {
                alert("City not found..!")
            }else{

                  // date & time
            const now = new Date();
            const day = now.toLocaleString("default", { weekday: "long" });
            const month = now.toLocaleString("default", { month: "long" });
            const num = now.getDate();
            const year = now.getFullYear();
            date.innerHTML = `<strong>${day} ${num}th</strong><br>${month}, ${year} `;


            loc.textContent = ` 📍 ${data.name} ${data.sys.country}`;
            temp.textContent = `🌡️ ${data.main.temp} `;
            all4.textContent = `🌥️ ${data.weather[0].description}`;
            all.textContent = ` Pressure 🌬️ : ${data.main.pressure} hPa `;
            all1.textContent = `Humidity 💧 : ${data.main.humidity} % `;
            all2.textContent = `Feels like 🤗 : ${data.main.feels_like} °C`;
            all3.textContent = `🌪️ Wind: ${data.wind.speed} m/s `;

            }

        });

};

btn.addEventListener("click", () => {
    const city = input.value;
    Weather(city);
    input.value = " ";
 
});




