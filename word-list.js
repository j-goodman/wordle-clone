// This application went live on October 6th, the 279th day of the year.
const startingDate = 279

function getCurrentDayOfYear() {
    // Returns what day of the year it is, from 0 - 365
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    return dayOfYear;
}

// Random list of five-letter words:
const wordList = ["spill", "lemur", "weary", "tiger", "mossy", "skirt", "bills", "crabs", "moose", "cribs", "bride", "stone", "stash", "crash", "pages", "dodgy", "krill", "water", "snout", "horse", "smile", "slain", "giant", "ounce", "black", "preps", "scour", "doubt", "brisk", "stoop", "mince", "spore", "heady", "trope", "party", "green", "joker", "onion"]

// Choose a secret word in a way that ensures that there's a new word every day, but also that the day's word is the same for everyone who uses the site.
// If the list of words runs out, it will loop back to the beginning.
let secretWord = wordList[(getCurrentDayOfYear() - startingDate) % wordList.length]
