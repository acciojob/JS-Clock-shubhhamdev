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

  // Calculate the rotation of the hour hand
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const hourRotation = hours * 360 / 12 + minutes / 2;

  // Calculate the rotation of the minute hand
  const minuteRotation = minutes * 360 / 60;

  // Calculate the rotation of the second hand
  const seconds = now.getSeconds();
  const secondRotation = seconds * 360 / 60;

  // Set the rotation of the hands
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
