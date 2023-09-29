 // const hourHand = document.querySelector('.hour-hand');
 //    const minuteHand = document.querySelector('.min-hand');
 //    const secondHand = document.querySelector('.second-hand');

 //    // Set the initial rotation of the hands
 //    hourHand.style.transform = 'rotate(0deg)';
 //    minuteHand.style.transform = 'rotate(0deg)';
 //    secondHand.style.transform = 'rotate(0deg)';

 //    function updateClock() {
 //      const now = new Date();

 //      const hours = now.getHours();
 //      const minutes = now.getMinutes();
 //      const seconds = now.getSeconds();

 //      // Calculate the rotation of the hour hand
 //      const hourRotation = (hours % 12) * 360 / 12 + (minutes / 60) * 360 / 12 + 90;

 //      // Calculate the rotation of the minute hand
 //      const minuteRotation = (minutes * 360 / 60) + (seconds / 60) * 360 / 60 + 90;

 //      // Calculate the rotation of the second hand
 //      const secondRotation = (seconds * 360 / 60) + 90;

 //      // Set the rotation of the hands
 //      hourHand.style.transform = `rotate(${hourRotation}deg)`;
 //      minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
 //      secondHand.style.transform = `rotate(${secondRotation}deg)`;
 //    }

 //    // Update the clock every second
 //    setInterval(updateClock, 1000);

// Get the elements of the clock
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

// Set the initial rotation of the hands
hourHand.style.transform = 'rotate(0deg)';
minuteHand.style.transform = 'rotate(0deg)';
secondHand.style.transform = 'rotate(0deg)';

// Function to update the rotation of the hands every second
function updateClock() {
  // Get the current time
  const now = new Date();

  // Calculate the rotation of the second hand
  const seconds = now.getSeconds();
  const secondRotation = seconds * 360 / 60;

  // Calculate the rotation of the minute hand
  const minutes = now.getMinutes();
  const minuteRotation = minutes * 360 / 60 + secondRotation / 60;

  // Calculate the rotation of the hour hand
  const hours = now.getHours();
  const hourRotation = hours * 360 / 12 + minutes / 2;

  // Set the rotation of the hands
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
