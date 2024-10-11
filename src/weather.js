import img1 from "./assets/snow.png";
import img2 from "./assets/rain.png";
import img3 from "./assets/fog.png";
import img4 from "./assets/wind.png";
import img5 from "./assets/cloudy.png";
import img6 from "./assets/partly-cloudy-day.png";
import img7 from "./assets/partly-cloudy-night.png";
import img8 from "./assets/clear-day.png";
import img9 from "./assets/clear-night.png";

export const updateWeather = () => {

    const hashmap = new Map();
    hashmap.set("snow", img1);
    hashmap.set("rain", img2);
    hashmap.set("fog", img3);
    hashmap.set("wind", img4);
    hashmap.set("cloudy", img5);
    hashmap.set("partly-cloudy-day", img6);
    hashmap.set("partly-cloudy-night", img7);
    hashmap.set("clear-day", img8);
    hashmap.set("clear-night", img9);

    const city = document.querySelector('#searchBox').value;
    const spinner = document.querySelector('#spinner');
    const head = document.querySelector('#head');
    const infoBox = document.querySelector('#info');

    async function fetchData(city){
        try{
            spinner.classList.remove('hidden');
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=current&key=M3U68LY4PJKMVGW27RG6XGX4T&contentType=json`)
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            return data;
        } catch(error){
            console.error('Fetch error: ', error);
        }
    }

    const data = fetchData(city);
    data.then((info) => {

        const degreeData = document.querySelector('#degreeData');
        const icon = document.querySelector('#icon');
        const weather = document.querySelector('#weatherType');
        const city = document.querySelector('#city');
        const country = document.querySelector('#country');
        const humidity = document.querySelector('#humidity');
        const visibility = document.querySelector('#visibility');
        const uvindex = document.querySelector('#uvindex');
        const pressure = document.querySelector('#pressure');
        const wind = document.querySelector('#wind');
        const precipitation = document.querySelector('#precipitation');

        // change degree
        degreeData.textContent = `${Math.ceil(info.currentConditions.temp)}°`;
        
        // change icon and weather type
        const iconSrc = hashmap.get(info.currentConditions.icon);
        icon.src = `${iconSrc}`;
        weather.textContent = `${info.currentConditions.conditions}`;

        // change city and country
        const [newCity, random, newCountry] = info.resolvedAddress.split(",");
        city.textContent = `${newCity}`;
        country.textContent = `${newCountry}`;

        // change forecast
        humidity.textContent = `${info.currentConditions.humidity}%`;
        visibility.textContent = `${info.currentConditions.visibility}km`;
        uvindex.textContent = `${info.currentConditions.uvindex} of 11`;
        pressure.textContent = `${info.currentConditions.pressure}mb`;
        wind.textContent = `${info.currentConditions.windspeed}km/h`;
        precipitation.textContent = `${info.currentConditions.precipprob}%`;
    
        spinner.classList.add('hidden');
        head.classList.remove('hidden');
        infoBox.classList.remove('hidden');
    });

    
}