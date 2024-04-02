document.addEventListener('DOMContentLoaded', () => {
    const weatherApiKey = 'c4262e295db4429dbb8224854240204';
    const pexelsApiKey = '7Sw3BJZ0OF9jStEXuFEZ8Bc42sdq3N3d0IbUk1y3JlzNy3GdvUGcWdyp'; 
    const searchButton = document.getElementById('search-btn');
    const locationInput = document.getElementById('location-input');
    const weatherInfo = document.getElementById('weather-info');
    const photoContainer = document.getElementById('photo-container');

    // Function to fetch weather data based on user input
    const fetchWeatherData = async (location) => {
        try {
            const baseURL = 'http://api.weatherapi.com/v1';
            const apiMethod = `/current.json?key=${weatherApiKey}&q=${location}`;
            const response = await fetch(`${baseURL}${apiMethod}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch weather data: ${response.status} ${response.statusText}`);
            }
            return response.json();
        } catch (error) {
            console.error(`Error fetching weather data: ${error}`);
            return null;
        }
    };

    // Function to fetch photos from Pexels API based on search query
    const fetchPhotos = async (query) => {
        try {
            const apiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=5`;
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: pexelsApiKey
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch photos from Pexels API: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return data.photos.map(photo => photo.src.large);
        } catch (error) {
            console.error(`Error fetching photos from Pexels API: ${error}`);
            return [];
        }
    };

    // Function to update the weather information and images on the page
    const updateWeatherInfoAndImages = async (location) => {
        const weatherData = await fetchWeatherData(location);
        if (weatherData) {
            const { current } = weatherData;
            const { condition } = current;
            const weatherCondition = condition.text.toLowerCase();
            const imageUrls = await fetchPhotos(weatherCondition);
            updateWeatherInfo(weatherData);
            updateWeatherImages(imageUrls);
        } else {
            weatherInfo.innerHTML = '<p>Weather information not available. Please try again later.</p>';
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

    // Function to update the weather images on the page
    const updateWeatherImages = (imageUrls) => {
        photoContainer.innerHTML = '';
        imageUrls.forEach(imageUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            photoContainer.appendChild(imgElement);
        });
    };

    // Event listener for the search button click
    searchButton.addEventListener('click', async () => {
        const location = locationInput.value.trim();
        if (location) {
            updateWeatherInfoAndImages(location);
        } else {
            alert('Please enter a location.');
        }
    });
});


const updateWeatherImages = (imageUrls) => {
    photoContainer.innerHTML = '';
    imageUrls.forEach(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        photoContainer.appendChild(imgElement);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const toggleMode = document.getElementById('toggle-mode');

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('.container').forEach(container => {
            container.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.search-container').forEach(container => {
            container.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.weather-info').forEach(info => {
            info.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.photo-container').forEach(container => {
            container.classList.toggle('dark-mode');
        });
    };

    // Event listener for the toggle button
    toggleMode.addEventListener('change', toggleDarkMode);
});