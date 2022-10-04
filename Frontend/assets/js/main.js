document.onkeydown = function (e) {
  let pressedKey = e.key.toLowerCase();
  if (!window.currentText) {
    window.currentText = '';
  }
  window.currentText += pressedKey;
  console.log(window.currentText);
  document.getElementById(`key-${pressedKey}`).classList.add("bg-green-400");
  let textBox = document.getElementById("text-box");
  textBox.innerText.replace(new RegExp('/^(' + currentText +')/'), 'L');
};

document.onkeyup = function (e) {
  document.querySelectorAll("[keyboard-key]").forEach((elem) => {
    elem.classList.remove("bg-green-400");
  });
};

window.onload = function () {
  //   let textBox = document.getElementById("text-box");
  //   let practiceText =
  //     "Lorem ipsum dolor sit amet. A veritatis quia temporibus internos ut consequatur dolorum ut ipsam voluptatem qui repellendus galisum ab ipsam ullam.";
  //   practiceText
  //     .replaceAll(" ", "\xa0")
  //     .split("")
  //     .forEach((char) => {
  //         let span = document.createElement('span')
  //         span.textContent = char
  //         textBox.append(span)
  //     });
};
