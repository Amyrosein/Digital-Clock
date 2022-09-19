function clock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();
  const hourDiv = document.querySelector(".hour");
  const minuteDiv = document.querySelector(".minute");
  const secondsDiv = document.querySelector(".second");

  hourDiv.innerHTML = hour;
  minuteDiv.innerHTML = minute;
  secondsDiv.innerHTML = seconds;
}

setInterval(clock,1000)