document.onkeydown = function (e) {
  let pressedKey = e.key.toLowerCase();
  document.getElementById(`key-${pressedKey}`).classList.add("bg-green-400");
};

document.onkeyup = function (e) {
    document.querySelectorAll('[keyboard-key]').forEach((elem) => {
        elem.classList.remove('bg-green-400');
    });
};
