var qrcodeK = document.getElementById('qrcode');
var buttonK = document.getElementById('buttonI');
var buttonKe = document.getElementById('buttonE');
var contentK = document.getElementById('content');
var hiddencontentK = document.getElementById('hiddencontent');
var timerK = document.getElementById('timer');

function getRandomStringK(length) {
  const charsK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let resultK = "";

  for (let i = 0; i < length; i++) {
    const randomIndexK = Math.floor(Math.random() * charsK.length);
    resultK += charsK[randomIndexK];
  }
  return resultK;
}

var codeK = getRandomStringK(17);

buttonK.addEventListener('click', () => {
  var createK = new QRCode(qrcode, {
    text: "${code}",
    width: 200,
    height: 200,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  })
  used2++;
  hiddencontentK.style.display = 'block';
  timerK.style.display = 'block';
  localStorage.setItem('myKKey', used2);
})

buttonKe.addEventListener('click', () => {
  used2--;
  localStorage.setItem('myKKey', used2);
  location.href="../index.html";
})