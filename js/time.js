window.onload = updateClock;

var totalTime = 45;

function updateClock() {
  document.getElementById("seconds").innerHTML = totalTime;
  if (totalTime == 0) {
    alert("El tiempo ha finalizado");
  } else {
    totalTime -= 1;
    setTimeout("updateClock()", 1000);
  }
}
