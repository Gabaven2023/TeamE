var qrcode = document.getElementById('qrcode');
var button = document.getElementById('button');
var content = document.getElementById('content');
var hiddencontent = document.getElementById('hiddencontent');
var timer = document.getElementById('timer');

function getRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

var code = getRandomString(17);

button.addEventListener('click', () => {
  var create = new QRCode(qrcode, {
    text: "${code}",
    width: 200,
    height: 200,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  })
  hiddencontent.style.display = 'block';
  timer.style.display = 'block';
})