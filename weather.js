let city = "Viborg"
let api = "4ca58c02db0e5bd08cba675c246b5762"
//let WeatherData = "api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api;
let WeatherData = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api;

fetch(WeatherData)
.then(data=>data.text())
.then(data=>console.log(data))


fetch(WeatherData)
.then(response => response.json())
.then(data =>{
    document.getElementById("temp").innerHTML = data.main.temp;
    return fetch(WeatherData);}) 
.then(response => response.json())
.then(data => {
    console.log(data)
    return fetch(WeatherData);})
//document.getElementById("temp").innerHTML = "";
