
document.addEventListener('DOMContentLoaded', function() {
  var id = ['#e789ad', '#1cfeff', '#ffffff', '#ffffff', '#363877'];
  var randomNumber = Math.floor(Math.random() * id.length);

  console.log(randomNumber);

  document.querySelector("div#menu").style.borderColor = id[randomNumber];
});
