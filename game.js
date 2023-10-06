const wordInput = document.getElementById("word-input")
const guessButton = document.getElementById("guess-button")
const alertBox = document.getElementById("alert-box")

// Define guess, guessCount, and guessIsWord variables that can be accessed from anywhere.
let guess = ""
let guessCount = 0
let guessIsWord = false

const handleGuess = () => {
    let word = wordInput.value
    if (word.length !== 5) {
        alertBox.innerText = "Guesses must be five letters long."
    } else {
        wordInput.value = ""
        checkGuess(word)
    }
}

const compareGuessToSecretWord = () => {
    // Create a new HTML element with the class name "guess-box".
    let guessBox = document.createElement("div")
    document.body.appendChild(guessBox)
    guessBox.className = "guess-box"
    
    // Loop through the letters of the guess and add letters to the guess box.
    let index = 0
    for (letter of guess) {
        let newLetter = document.createElement("div")
        newLetter.innerText = letter
        if (letter === secretWord[index]) {
            newLetter.classList.add("green")
        } else if (secretWord.includes(letter)) {
            newLetter.classList.add("yellow")
        } else {
            newLetter.classList.add("red")
        }
        guessBox.appendChild(newLetter)
        index += 1
    }
}

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        handleGuess()
    }
})
guessButton.onclick = handleGuess