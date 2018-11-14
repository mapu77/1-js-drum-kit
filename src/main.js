const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;
const KEY_F = 70;
const KEY_G = 71;
const KEY_H = 72;
const KEY_J = 74;
const KEY_K = 75;
const KEY_L = 76;
const keyList = [KEY_A, KEY_S, KEY_D, KEY_F, KEY_G, KEY_H, KEY_J, KEY_K, KEY_L];
const keyMap = { [KEY_A]: 'A', [KEY_S]: 'S', [KEY_D]: 'D', [KEY_F]: 'F', [KEY_G]: 'G', [KEY_H]: 'H', [KEY_J]: 'J', [KEY_K]: 'K', [KEY_L]: 'L' };

document.addEventListener('keydown', function (event) {
  var keyPressed = event.keyCode;
  if (!keyList.includes(keyPressed)) return
  addPressedAnimation(keyPressed);
  playSound(keyPressed);
});

document.addEventListener('keyup', function (event) {
  var keyPressed = event.keyCode;
  if (!keyList.includes(keyPressed)) return;
  removePressAnimation(keyPressed);
});

function playSound(keyPressed) {
  var sound = document.getElementById('audio-' + keyMap[keyPressed]);
  sound.play();
}

function addPressedAnimation(keyPressed) {
  var div = document.getElementById(keyMap[keyPressed]);
  div.classList.add('press');
}

function removePressAnimation(keyPressed) {
  var div = document.getElementById(keyMap[keyPressed]);
  div.classList.remove('press');
}
