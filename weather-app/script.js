

// const apiKey = "4089d3dc2c04de66abeeebeb090ddbcc";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london";

const apiKey = "863242cfb2b1d357e6093d9a4df19a4b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"


async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed;
}

checkWeather();