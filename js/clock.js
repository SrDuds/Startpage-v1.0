var clock = document.getElementById('clock');

function Clock() {
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds;

  clock.textContent = clockStr;

}

function checkTime(i) {
  if(i < 10){
    i = '0' + i;
  }
  return i;
}

Clock();
setInterval(Clock, 1000);
