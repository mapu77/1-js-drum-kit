const validKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL'];

document.addEventListener('keydown', function (event) {
    if (!isAValidKey(event.code)) return;
    addPressedAnimation(event.key);
    playSound(event.key);
});

document.addEventListener('keyup', function (event) {
    if (!isAValidKey(event.code)) return;
    removePressAnimation(event.key);
});


function addPressedAnimation(keyPressed) {
    let div = document.getElementById(keyPressed);
    div.classList.add('press');
}

function removePressAnimation(keyPressed) {
    let div = document.getElementById(keyPressed);
    div.classList.remove('press');
}

function playSound(keyPressed) {
    let sound = document.getElementById('audio-' + keyPressed);
    sound.currentTime = 0;
    sound.play();
}

function isAValidKey(keyPressed) {
    return validKeys.includes(keyPressed);
}

module.exports = {addPressedAnimation, removePressAnimation, isAValidKey};