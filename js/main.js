const phrases = ["This is a test", "All right", "We are coding new stuff"]
let currentPhrase = ""
let i = 0, j = 0
const message = document.querySelector("#message")
let backward = false

const printChar = () => {
    if (backward) {
        currentPhrase = currentPhrase.slice(0, -1)
        if (currentPhrase.length === 0) backward = false
    } else {
        currentPhrase += phrases [i][j]
        ++j
        if (j === phrases [i].length) {
            j = 0
            ++i
            backward = true
        }
    }
    if (i === phrases.length) i = 0

    message.innerHTML = currentPhrase
}

setInterval (printChar, 300)
