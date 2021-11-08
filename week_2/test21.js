const range = document.getElementById("js-range");
const title = document.querySelector(".js-title");
const Form = doucument.getElementById("js-guess");
const result = doucument.getElementById("js-result");

const handleRangeChange = (e) => {
    const selectedRange = title.querySelector("span");
    selectedRange.innerHTML = range.value;
};

function handleGuessSubmit(e) {
    e.preventDefault();
    const guessInput = guessForm.querySelector("input");
    if (guessInput.value === ""){
        return;
    }
    const max = range.value;
    const random = Math.ceil(Math.random() * max);
    const userGuess = parseInt(guessInput.value, 10);
    const resultSpan = result.querySelector("span");
    resultSpan.innerHTML = `
    You choose: ${userGuess},
    the machine chose: ${random}.<br />
    <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
    `;
}

guessForm.addEventListener("submit", handleGuessSubmit);
range.addEventListener("input", handleRangeChange);