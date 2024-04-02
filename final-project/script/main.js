document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'c4262e295db4429dbb8224854240204 ';
    const searchButton = document.getElementById('search-btn');
    const locationInput = document.getElementById('location-input');
    const weatherInfo = document.getElementById('weather-info');

    // Function to fetch weather data based on user input
    const fetchWeatherData = async (location) => {
        try {
            const baseURL = 'http://api.weatherapi.com/v1';
            const apiMethod = `/current.json?key=${apiKey}&q=${location}`;
            const response = await fetch(baseURL + apiMethod);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return null;
        }
    };

    // Function to update the weather information on the page
    const updateWeatherInfo = (weatherData) => {
        if (weatherData) {
            const { location, current } = weatherData;
            const { temp_c, humidity, wind_kph, condition } = current;

            const weatherHTML = `
                <h2>${location.name}</h2>
                <p>Temperature: ${temp_c}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${wind_kph} km/h</p>
                <p>Weather: ${condition.text}</p>
            `;
            weatherInfo.innerHTML = weatherHTML;
        } else {
            weatherInfo.innerHTML = '<p>Weather information not available. Please try again later.</p>';
        }
    };

    // Event listener for the search button click
    searchButton.addEventListener('click', async () => {
        const location = locationInput.value.trim();
        if (location) {
            const weatherData = await fetchWeatherData(location);
            updateWeatherInfo(weatherData);
        } else {
            alert('Please enter a location.');
        }
    });
});