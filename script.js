//your code here
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    console.log("curr", now, seconds, mins, hour)

    const hourDegrees = (30*hour + mins/2);
    const minsDegrees = 6*mins;
    const secondsDegrees = 6*seconds;


    console.log('degres', hourDegrees, minsDegrees, secondsDegrees)
    
    secondHand.style.transform = `rotate(${secondsDegrees }deg)`;
    minsHand.style.transform = `rotate(${minsDegrees + 90}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees +90 }deg)`;

	// hourHand.style.transform = `rotate(${Math.round(hourDegrees) + 90}deg)`;
}

setInterval(setDate, 1000);