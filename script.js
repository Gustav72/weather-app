const button = document.querySelector('button');
const form = document.querySelector('form')
const input = document.querySelector('input');
const unitSwitch = document.querySelector('.switch')

let cityName = 'boston';
let units = 'imperial'

async function findWeather(cityName) {
        
    try {
        
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' 
        + cityName 
        + '&appid=e37d4ef1a74a626d446d214d6d697470' 
        + '&units='
        + units,

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

unitSwitch.addEventListener('click', function() {

    if(units == 'imperial') {
        units = 'metric'        
    }
    else {
        units = 'imperial'
    }
});