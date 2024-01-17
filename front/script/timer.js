let time;
let timerValueSecond = 0;
let timerValueMinute = 60;


document.getElementById('buttonI').addEventListener('click', function () {

  if (time) {
    clearInterval(time);
  }

  time = setInterval(function () {
    if (timerValueMinute === 0 && timerValueSecond === 0) {
      location.href = "../index.html"
    } else if (timerValueSecond === 0) {
      timerValueMinute--;
      timerValueSecond = 60;
    }

    if(timerValueSecond !== 0){
      timerValueSecond--;
    }

    const displayMinute = timerValueMinute < 10 ? '0' + timerValueMinute : timerValueMinute;
    const displaySecond = timerValueSecond < 10 ? '0' + timerValueSecond : timerValueSecond;

    document.getElementById('timerDisplayMinute').innerText = displayMinute;
    document.getElementById('timerDisplaySecond').innerText = displaySecond;
  }, 1000); // 1秒ごとに更新

});
document.getElementById("doorOL").addEventListener('click', function () {

  if (time) {
    clearInterval(time);
  }

  time = setInterval(function () {
    if (timerValueMinute === 0 && timerValueSecond === 0) {
      location.href = "../index.html"
    } else if (timerValueSecond === 0) {
      timerValueMinute--;
      timerValueSecond = 60;
    }

    if(timerValueSecond !== 0){
      timerValueSecond--;
    }

    const displayMinute = timerValueMinute < 10 ? '0' + timerValueMinute : timerValueMinute;
    const displaySecond = timerValueSecond < 10 ? '0' + timerValueSecond : timerValueSecond;

    document.getElementById('timerDisplayMinute').innerText = displayMinute;
    document.getElementById('timerDisplaySecond').innerText = displaySecond;
  }, 1000); // 1秒ごとに更新

});

document.getElementById('doorOR').addEventListener('click', function () {

  if (time) {
    clearInterval(time);
  }

  time = setInterval(function () {
    if (timerValueMinute === 0 && timerValueSecond === 0) {
      location.href = "../index.html"
    } else if (timerValueSecond === 0) {
      timerValueMinute--;
      timerValueSecond = 60;
    }

    if(timerValueSecond !== 0){
      timerValueSecond--;
    }

    const displayMinute = timerValueMinute < 10 ? '0' + timerValueMinute : timerValueMinute;
    const displaySecond = timerValueSecond < 10 ? '0' + timerValueSecond : timerValueSecond;

    document.getElementById('timerDisplayMinute').innerText = displayMinute;
    document.getElementById('timerDisplaySecond').innerText = displaySecond;
  }, 1000); // 1秒ごとに更新

});