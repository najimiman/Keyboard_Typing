document.onkeydown = function (e) {
    let pressedKey = e.key;
    let textBox = document.getElementById("text-box");
    let regEx = new RegExp(
        `^(${!window.typedText ? pressedKey : window.typedText + pressedKey})`.replaceAll('.', '\\.')
    );
    console.log(regEx)
    
    if (textBox.innerText.match(regEx)) {
        document
            .getElementById(`key-${pressedKey.toLowerCase()}`)
            .classList.add("bg-green-400");
        textBox.innerHTML = textBox.innerText.replace(
            regEx,
            '<span class="text-green-600 border-b border-green-600">$1</span>'
        );
        if (!window.typedText) {window.typedText = '';}
        window.typedText += pressedKey;

        if (textBox.innerText == window.typedText) {
            getRandomText();
            window.typedText = '';
        }
    } else {
        try {
            document
            .getElementById(`key-${pressedKey.toLowerCase()}`)
            .classList.add("bg-red-500");
        } catch (e) {}
    }
};

document.onkeyup = () => {
    document.querySelectorAll("[keyboard-key]").forEach((elem) => {
        elem.classList.remove("bg-green-400", "bg-red-500");
    });
};

window.onload = () => {
    setInterval(() => document.getElementById('timer').innerText == 0 ?clearInterval(this): document.getElementById('timer').innerText -= 1, 1000)
    getRandomText();

    // setInterval(() => {
    //     document.querySelectorAll("[keyboard-key]").forEach((elem) => {
    //         elem.style.backgroundColor = '#' +  Math.floor(Math.random()*16777215).toString(16);
    //     });
    // }, 300)

};

function getRandomText() {
    fetch('https://api.quotable.io/random')
    .then((data) => data.json())
    .then((json) => document.getElementById('text-box').innerText = json.content)
}