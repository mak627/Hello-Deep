function startGame() {
  var timeleft = 4;
  var startcntdwn = setInterval(function () {
    timeleft = timeleft - 1;
    document.getElementById("gameTimer").textContent = "Game starts in: " + timeleft;
    document.getElementById("gameTimer").style.fontSize = "x-large";
    if (timeleft <= 0) {
      document.getElementById("gamediv").style.backgroundColor = "Black"
      clearInterval(startcntdwn);
    }
  }, 1000);
}

