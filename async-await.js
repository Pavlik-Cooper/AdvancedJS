const fetch = require('node-fetch');

const getWeather = (woeid)=>{

    fetch(`https://www.metaweather.com/api/location/${woeid}/`)
    .then(resp =>{
        return resp.json()
    })
    .then(data =>{
        const today = data.consolidated_weather[0];
        console.log(`Temperatures in ${data.title} stays between ${today.min_temp} and ${today.max_temp}.`)
    }).catch(err => console.log(err))

};
getWeather(44418);


const getWeatherAsync = async (woeid)=>{
    try {
        const resp = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
        const data = await resp.json();
        const today = data.consolidated_weather[0];
        // console.log(`(Async) Temperatures in ${data.title} stays between ${today.min_temp} and ${today.max_temp}.`)
        return `(Async) Temperatures in ${data.title} stays between ${today.min_temp} and ${today.max_temp}.`
    }catch (e) {
        console.log(e)
    }

};
getWeatherAsync(44418)
.then(wheater => console.log(wheater));