export const updateTime = () => {

    const now = new Date();

    updateClock(now);
    updateDay(now);

    setTimeout(() => {
        updateClock(now);
        updateDay(now);
    }, 60000)
}

const updateClock = (now) => {
    
    const clockElem = document.querySelector('#time');

    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    const clock = `${hours}:${minutes} PM`;
    clockElem.textContent = clock;
}

const updateDay = (now) => {

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekday = now.getDay();
    const year = now.getFullYear();
    const month = monthNames[now.getMonth()];
    const day = now.getDate();

    // remove white text
    const allDays = document.querySelector('#day').children;
    console.log(allDays)
    for(let i=0;i<allDays.length;i++){
        allDays[i].classList.remove("text-white");
    }

    // turn on day
    const selected = document.querySelector(`#${dayNames[weekday].toLowerCase().slice(0,3)}`);
    selected.classList.add("text-white", "font-semibold");


    const time = document.querySelector('#fulltime');
    time.textContent = `${dayNames[weekday]} ${day} ${month.slice(0,3)} ${year}`;
}