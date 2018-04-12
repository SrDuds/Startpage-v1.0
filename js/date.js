var date = document.getElementById('date');

function Calendario() {
  var time = new Date();
  var year = time.getFullYear().toString();
  var month = time.getMonth().toString();
  var day = time.getDate().toString();

  var monthName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  day = checkTime(day);

  var dateStr = day + ' de ' + monthName[month] + ', ' + year;

  date.textContent = dateStr;

}

function checkTime(i) {
  if(i < 10){
    i = '0' + i;
  }
  return i;
}

Calendario();
setInterval(Calendario, 1000);
