let citys = ["Højrring", "Aalborg", "Skive", "Hobro", "Viborg", "Holstebro", "Herning", "Silkeborg", "Aarhus", "Randers", "Vejle", "Esbjerg", "Odense", "Ringsted", "Køge", "København", "Roskilde", "Hillerød"]

let selection = document.getElementById("citySelection")

let api = "4ca58c02db0e5bd08cba675c246b5762"
let WeatherData
let promise

let pictureId
let pictureSrc

let today
let time
let hours

let cloud

for(let i = 0; i < citys.length; i++){
    let option = document.createElement("option")
    option.value = citys[i]
    option.text = citys[i]
    selection.appendChild(option)
}

document.getElementById("time").addEventListener("click", () => {
    today = new Date()
    time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()
    alert(time)
})

function GetWeatherData(city){
    WeatherData = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    promise = fetch(WeatherData).then(response => response.json())
    promise.then(data => document.getElementById("temp").innerHTML = `Temp: ${Math.round(data.main.temp)}°C`)
    promise.then(data => document.getElementById("temp_min").innerHTML = `Temp min: ${Math.round(data.main.temp_min)}°C`)
    promise.then(data => document.getElementById("temp_max").innerHTML = `Temp max: ${Math.round(data.main.temp_max)}°C`)
    promise.then(data => document.getElementById("feels").innerHTML = `Feels like: ${Math.round(data.main.feels_like)}°C`)
    promise.then(data => document.getElementById("desc").innerHTML = `Description: ${data.weather[0].description}`)
    promise.then(data => document.getElementById("main_weather").innerHTML = `Main weather: ${data.weather[0].main}`)
    promise.then(data => document.getElementById("speed").innerHTML = `Wind speed: ${data.wind.speed}m/s`)
    promise.then(data => {
        pictureId = data.weather[0].id
        cloudPct = data.clouds.all
        today = new Date()
        hours = today.getHours()
        Weatherpic()
    })
}

function Weatherpic(){
    switch (true){
        case pictureId <= 232:
            pictureSrc = "11d"
            break;
        case pictureId <= 321:
            pictureSrc = "09d"
            break;
        case pictureId <= 531:
            if(hours < 17)
                pictureSrc = "10d"
            else
                pictureSrc = "09d"
            break;
        case pictureId <= 622:
            pictureSrc = "13d"
            break;
        case pictureId <= 781:
            pictureSrc = "50d"
            break;
        case pictureId == 800:
            if(hours < 17)
                pictureSrc = "01d"
            else
                pictureSrc = "01n"
            break;
        case pictureId <= 804:
            if(cloudPct <= 25){
                if(hours < 17)
                    pictureSrc = "02d"
                else
                    pictureSrc = "02n"
            }
            else if(cloudPct <= 50){
                if(hours < 17)
                    pictureSrc = "03d"
                else
                    pictureSrc = "03n"
            }
            else{
                if(hours < 17)
                    pictureSrc = "04d"
                else
                    pictureSrc = "04n"
            }
            break;
    }
    document.getElementById("pic").src = `http://openweathermap.org/img/wn/${pictureSrc}@2x.png`
}

