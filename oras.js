window.onload = function() {
  const hourHand = document.querySelector('.hourHand');
  const minuteHand = document.querySelector('.minuteHand');
  const secondHand = document.querySelector('.secondHand');
  const time = document.querySelector('.time');
  const clock = document.querySelector('.clock');
  const audio = document.querySelector('.audio');

  function setDate(){
    const today = new Date();
    
    const seconds = today.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
    const minutes = today.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    let hours = today.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // Convert 24-hour format to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    time.innerHTML = `<span><strong>${hours}</strong> : ${minutes} : <small>${seconds}</small> ${ampm}</span>`;
  }

  setInterval(setDate, 1000);
  setDate(); // Initial call to display correct time immediately
}
