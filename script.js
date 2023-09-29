const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    // Set the initial rotation of the hands
    hourHand.style.transform = 'rotate(0deg)';
    minuteHand.style.transform = 'rotate(0deg)';
    secondHand.style.transform = 'rotate(0deg)';

    function degreesToRadians(degrees) {
      return (degrees * Math.PI) / 180;
    }

    function updateClock() {
      const now = new Date();

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Calculate the rotation of the hour hand
      const hourRotation = (hours % 12) * 360 / 12 + (minutes / 60) * 360 / 12 + 90;

      // Calculate the rotation of the minute hand
      const minuteRotation = (minutes * 360 / 60) + (seconds / 60) * 360 / 60 + 90;

      // Calculate the rotation of the second hand
      const secondRotation = (seconds * 360 / 60) + 90;

      // Set the rotation of the hands
      hourHand.style.transform = `rotate(${hourRotation}deg)`;
      minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
      secondHand.style.transform = `rotate(${secondRotation}deg)`;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);