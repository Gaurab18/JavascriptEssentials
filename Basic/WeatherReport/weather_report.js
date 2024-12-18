
// function showweatherDetails(event){
//     event.preventDefault();


//     const city = document.getElementById('city').value;
//     const apikey = '58b72e02c50b389f1b27f25fb8fbef47';
//     const apiurl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

//     fetch(apiurl)  //fetch initiates an asynchronous HTTP request to the specified apiUrl (OpenWeatherMap API) to retrieve weather data.
//         .then(response => response.json())
//         .then(data => {
//             const weatherInfo = document.getElementById('weatherInfo');
//             weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
//                                     <p>Temperature: ${data.main.temp} &#8451;</p>
//                                     <p>Weather: ${data.weather[0].description}</p>`;
//           })
    
//           .catch(error => {
//             console.error('Error fetching weather:', error);
//             const weatherInfo = document.getElementById('weatherInfo');
//             weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
//           });
// }

// document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );


function showweatherDetails(event) {
    event.preventDefault();

    // Get the city name entered by the user
    const city = document.getElementById('city').value;
    const apikey = '58b72e02c50b389f1b27f25fb8fbef47';

    // Construct the API URL using the city name and API key
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    // Fetch weather data from the OpenWeatherMap API
    fetch(apiurl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Display the weather information in the UI
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            // Handle errors gracefully
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

// Add event listener to the form
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
