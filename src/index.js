import "./style.css";
import { updateTime } from "./time";
import { toggleDegree } from "./degree";
import { updateWeather } from "./weather";

const initialLoader = (() => {

    updateTime(); //updateTime will constantly update time

    // change degree functionality
    const check = document.querySelector('#toggleDegree');
    check.addEventListener('click', () => {
        toggleDegree();
    })

    // handle search
    const searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', () => {
        updateWeather();
    })
    const searchInput = document.querySelector('#searchBox');
    searchInput.addEventListener('keydown', (e) => {
        if(e.code == "Enter"){
            updateWeather();
        }
    });
})();