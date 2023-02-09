let scoreH = 0;
let scoreG = 0;
let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");

let x;
function incrScoreH(x) {
  scoreH += x;
  home.textContent = scoreH;
}
function incrScoreG(x) {
  scoreG += x;
  guest.textContent = scoreG;
}
