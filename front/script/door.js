var doorOL = document.querySelector('.doorOL');
var doorOR = document.querySelector('.doorOR');
var buttonI = document.getElementById('buttonI');


doorOL.addEventListener('click', function() {
  doorOL.classList.toggle('open');
  doorOR.classList.toggle('open');
  if (doorOR.classList.contains('open')) {
    doorOL.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(65deg) skewY(-5deg)';
    doorOR.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(-65deg) skewY(5deg)';
  } else {
    doorOL.style.transform = 'translate(0%, 0%) rotateY(0deg)';
    doorOR.style.transform = 'translate(0%, 0%) rotateY(0deg)';
  }
});
doorOR.addEventListener('click', function() {
  doorOL.classList.toggle('open');
  doorOR.classList.toggle('open');
  if (doorOR.classList.contains('open')) {
    doorOL.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(65deg) skewY(-5deg)';
    doorOR.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(-65deg) skewY(5deg)';
  } else {
    doorOL.style.transform = 'translate(0%, 0%) rotateY(0deg)';
    doorOR.style.transform = 'translate(0%, 0%) rotateY(0deg)';
  }
});

buttonI.addEventListener('click', function() {
  doorOL.classList.toggle('open');
  doorOR.classList.toggle('open');
  if (doorOR.classList.contains('open')) {
    doorOL.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(65deg) skewY(-5deg)';
    doorOR.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(-65deg) skewY(5deg)';
  } else {
    doorOL.style.transform = 'translate(0%, 0%) rotateY(0deg)';
    doorOR.style.transform = 'translate(0%, 0%) rotateY(0deg)';
  }
});

var doorEL = document.getElementById('doorEL');
var doorER = document.getElementById('doorER');
var buttonE = document.getElementById('buttonE');
let t;
let timer = 2;

doorEL.addEventListener('click', function() {
  doorEL.classList.toggle('close');
  doorER.classList.toggle('close');
  if (doorER.classList.contains('close')) {
    doorEL.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(65deg) skewY(-5deg)';
    doorER.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(-65deg) skewY(5deg)';
  } else {
    doorEL.style.transform = 'translate(0%, 0%) rotateY(0deg)';
    doorER.style.transform = 'translate(0%, 0%) rotateY(0deg)';
  }
});
document.getElementById('doorEL').addEventListener('click', function () {
  if (t) {
    clearInterval(t);
  }
  time = setInterval(function () {
    if (timer === 0) {
      location.href = "../index.html"
    } else if (timerValueSecond === 0) {
      timer--;
    }
  }, 1000);
});

doorER.addEventListener('click', function() {
  doorEL.classList.toggle('close');
  doorER.classList.toggle('close');
  if (doorER.classList.contains('close')) {
    doorEL.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(65deg) skewY(-5deg)';
    doorER.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(-65deg) skewY(5deg)';
  } else {
    doorEL.style.transform = 'translate(0%, 0%) rotateY(0deg)';
    doorER.style.transform = 'translate(0%, 0%) rotateY(0deg)';
  }
});

document.getElementById('doorER').addEventListener('click', function () {
  if (t) {
    clearInterval(t);
  }
  time = setInterval(function () {
    if (timer === 0) {
      location.href = "../index.html"
    } else if (timerValueSecond === 0) {
      timer--;
    }
  }, 1000);
});

buttonE.addEventListener('click', function() {
  doorEL.classList.toggle('close');
  doorER.classList.toggle('close');
  if (doorER.classList.contains('close')) {
    doorEL.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(65deg) skewY(-5deg)';
    doorER.style.transform = 'translate(0%, 2%) scale(0.95) rotateY(-65deg) skewY(5deg)';
  } else {
    doorEL.style.transform = 'translate(0%, 0%) rotateY(0deg)';
    doorER.style.transform = 'translate(0%, 0%) rotateY(0deg)';
  }
});

document.getElementById('buttonE').addEventListener('click', function () {
  if (t) {
    clearInterval(t);
  }
  time = setInterval(function () {
    if (timer === 0) {
      location.href = "../index.html"
    } else if (timerValueSecond === 0) {
      timer--;
    }
  }, 1000);
});