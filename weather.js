let api = "4ca58c02db0e5bd08cba675c246b5762"
let WeatherData

function Weather(city){
    WeatherData = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api;


    fetch(WeatherData)
    .then(response => response.json())
    .then(data => document.getElementById("temp").innerHTML = "Temp: " + data.main.temp)
    
}

//document.getElementById("temp").innerHTML = "";
