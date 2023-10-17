let clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  let dateArr = [
    date.getHours().toString().padStart(2, "0"),
    date.getMinutes().toString().padStart(2, "0"),
    date.getSeconds().toString().padStart(2, "0"),
  ];

  clock.innerText = dateArr.join(":");
}

getClock();
setInterval(getClock, 1000);
