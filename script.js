const button = document.querySelector('button');
const form = document.querySelector('form')
const input = document.querySelector('input');

let cityName;

async function findWeather(cityName) {
        
    try {
        
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=5b07045727136f2d4786580716e3cdd0',
        {
            mode: 'cors'
        })
    
        const data = await response.json(); {
           return console.log(response)
        }

        
    } catch(error){

        console.error('There has been a problem with your fetch operation:', error);
    
    };
    
}

button.addEventListener('click', function() {
    
    form.addEventListener('submit',  function(event) {
        event.preventDefault()
    });

    console.log('hi')
    
    cityName = input.value;

    findWeather(cityName);

});