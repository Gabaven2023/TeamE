let time;// タイマーが格納される変数

let timerValueSecond = 10;// タイマーの初期値（秒数）
let timerValueMinute = 0;

// ボタンクリック時の処理
document.getElementById('button').addEventListener('click', function () {
  // タイマーが既に実行中の場合は停止
  if (time) {
    clearInterval(time);
  }

  // タイマーの開始
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