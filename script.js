function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = 'dc81ab43f4260fdb3f5e11a0b6304a3c';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                throw new Error('City not found');
            }
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayError();
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const temperature = (data.main.temp - 273.15).toFixed(1); // Convert from Kelvin to Celsius
    const description = data.weather[0].description;

    weatherInfo.innerHTML = `Temperature: ${temperature}°C<br>Weather: ${description}`;
}

function displayError() {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = 'City not found or error fetching data';
}

