
document.addEventListener('DOMContentLoaded', function() {
  var randomNumber = Math.floor((Math.random() * 8) + 1);
  var randomBackground = randomNumber + ".png";

  var id = ['#E38BAC', '#1DF3FF', '#ffffff', '#ffffff', '#E3CBE0', '#D7CBC1', '#FAEFD7', '#AAB5B2'];
  var randomColor = Math.floor(randomNumber - 1);

  console.log(randomNumber);

  document.querySelector("div#images").style.backgroundImage = "url(img/" + randomBackground + ")";
  document.querySelector("div#menu").style.borderColor = id[randomColor];
}
);
