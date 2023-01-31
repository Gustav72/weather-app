const button = document.querySelector('button');
const form = document.querySelector('form')
const input = document.querySelector('input');
const unitSwitch = document.querySelector('.switch')
const container = document.querySelector('.weather-container')

let cityName = 'boston';
let units = 'imperial'

async function findWeather(cityName) {
        
try {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' 
    + cityName 
    + '&appid=e37d4ef1a74a626d446d214d6d697470' 
    + '&units='
    + units, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        let name = document.createElement('h2');
        let temperature = document.createElement('p');
        let weatherImg = document.createElement('img')
        let weather = document.createElement('p');

        name.innerHTML = response.name;
        temperature.innerHTML = `${response.main.temp} °F`;
        weatherImg.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
        weather.innerHTML = response.weather[0].description;

        container.appendChild(name)
        container.appendChild(temperature)
        container.appendChild(weatherImg)
        container.appendChild(weather)

        console.log(response)
    });
}
catch(error) {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let err = document.createElement('h2');
    err.innerHTML = 'Please Try Again Later';
    container.appendChild(err)

}
}   

button.addEventListener('click', function() {
    
    form.addEventListener('submit',  function(event) {
        event.preventDefault()
    });
    
    cityName = input.value;

    findWeather(cityName);

});

findWeather('boston');
