var qrcodeD = document.getElementById('qrcode');
var buttonD = document.getElementById('buttonI');
var buttonDe = document.getElementById('buttonE');
var contentD = document.getElementById('content');
var hiddencontentD = document.getElementById('hiddencontent');
var timerD = document.getElementById('timer');
var doorOL = document.querySelector('.doorOL');
var doorOR = document.querySelector('.doorOR');
var doorEL = document.querySelector('.doorEL');
var doorER = document.querySelector('.doorER');

function getRandomStringD(length) {
  const charsD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let resultD = "";

  for (let i = 0; i < length; i++) {
    const randomIndexD = Math.floor(Math.random() * charsD.length);
    resultD += charsD[randomIndexD];
  }
  return resultD;
}

var codeD = getRandomStringD(17);

buttonD.addEventListener('click', () => {
  var createD = new QRCode(qrcodeD, {
    text: codeD,
    width: 200,
    height: 200,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  })
  used1++;
  hiddencontentD.style.display = 'block';
  timerD.style.display = 'block';
  localStorage.setItem('myDKey', used1);
})
doorOL.addEventListener('click', () => {
  var createK = new QRCode(qrcode, {
    text: "${code}",
    width: 200,
    height: 200,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  })
  used1++;
  hiddencontentD.style.display = 'block';
  timerD.style.display = 'block';
  localStorage.setItem('myDKey', used1);
})

doorOR.addEventListener('click', () => {
  var createK = new QRCode(qrcode, {
    text: "${code}",
    width: 200,
    height: 200,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  })
  used1++;
  hiddencontentD.style.display = 'block';
  timerD.style.display = 'block';
  localStorage.setItem('myDKey', used1);
})

buttonDe.addEventListener('click', () => {
  used2--;
  localStorage.setItem('myDKey', used1);
})

doorEL.addEventListener('click', () => {
  used1--;
  localStorage.setItem('myDKey', used1);
})

doorOL.addEventListener('click', () => {
  used1--;
  localStorage.setItem('myDKey', used1);
})
buttonDe.addEventListener('click', () => {
  used1--;
  localStorage.setItem('myDKey', used1);
})