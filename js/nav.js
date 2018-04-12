document.addEventListener('DOMContentLoaded',
function click() {
  var op = ['0.3', '1'];
  var vb = ['hidden', 'visible'];

  if (document.querySelector("div#nav1").style.opacity = op[1]) {
    document.querySelector("div#nav2").style.opacity = op[0];
    document.querySelector("div#block2").style.visibility = vb[0];
    document.querySelector("div#nav1").style.opacity = op[1];
    document.querySelector("div#block1").style.visibility = vb[1];
  }
  else (document.querySelector("div#nav1").style.opacity = op[0]) {
    document.querySelector("div#nav2").style.opacity = op[1];
    document.querySelector("div#block2").style.visibility = vb[1];
    document.querySelector("div#nav1").style.opacity = op[0];
    document.querySelector("div#block1").style.visibility = vb[0];
  }
}

function click2() {
  var op = ['0.3', '1'];
  var vb = ['hidden', 'visible'];

  if(document.querySelector("div#nav2").style.opacity = op[0]) {
    document.querySelector("div#nav2").style.opacity = op[1];
    document.querySelector("div#block2").style.visibility = vb[1];
    document.querySelector("div#nav1").style.opacity = op[0];
    document.querySelector("div#block1").style.visibility = vb[0];
  }
  else (document.querySelector("div#nav2").style.opacity = op[1]) {
    document.querySelector("div#nav2").style.opacity = op[1];
    document.querySelector("div#block2").style.visibility = vb[1];
    document.querySelector("div#nav1").style.opacity = op[0];
    document.querySelector("div#block1").style.visibility = vb[0];
  }
}

document.getElementById("nav1").onclick = f() {click()};
document.getElementById("nav2").onclick = f2() {click2()};
);
