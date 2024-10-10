import "./style.css";
import { updateTime } from "./time";
import { toggleDegree } from "./degree";

const initialLoader = (() => {
    updateTime(); //updateTime will constantly update time

    // change degree functionality
    const check = document.querySelector('#toggleDegree');
    check.addEventListener('click', () => {
        toggleDegree();
    })

    // updateWeather();
})();