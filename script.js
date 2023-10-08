$(document).ready(function() {
    const apiKey = 'ecb13e92a62f5f69bf664dbfe59c3fdd'; // Replace with your OpenWeatherMap API key

    $('#get-weather-btn').click(function() {
        const city = $('#city-input').val();
        if (city === '') {
            alert('Please enter a city.');
            return;
        }

        // Make an API request to OpenWeatherMap
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                // Handle the API response
                const weatherInfo = $('#weather-info');
                weatherInfo.empty(); // Clear any existing data

                const cityName = data.name;
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;

                weatherInfo.append(`<p>City: ${cityName}</p>`);
                weatherInfo.append(`<p>Temperature: ${temperature}°C</p>`);
                weatherInfo.append(`<p>Description: ${weatherDescription}</p>`);
            },
            error: function(xhr, status, error) {
                // Handle any errors
                console.error('Error:', error);
                alert('Error fetching weather data. Please try again.');
            }
        });
    });
});

