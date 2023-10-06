const checkGuess = (word) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((data) => {
        guess = word
        guessIsWord = data.title !== "No Definitions Found"
        if (!guessIsWord) {
            alertBox.innerText = `${word} is not a recognized word.`
        } else {
            compareGuessToSecretWord()
        }
    })
}