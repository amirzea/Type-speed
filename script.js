const WRITING_BAR = document.getElementById("writingBar");
const TEXT_BAR = document.getElementById("textBar");
const CRONOMETER = document.getElementById("cronometer");
const WORDS = document.getElementById("words");
const INSTRUCTIONS = document.getElementById("instructions");
let words = ["garden", "shadow", "captain", "elephant", "bicycle", "adventure", "journey", "volcano", "tornado", "horizon", "paradise", "wonder", "zebra", "piano", "fragrance", "harmony", "symphony", "thunder", "chocolate", "melody", "serenade", "fantasy", "passion", "captivate", "enchant", "blossom", "silhouette", "lullaby", "symphony", "twinkle", "glimmer", "harmony", "cascade", "whirlwind", "luminary", "marvel", "gossamer", "solitude", "galaxy", "mystify", "enchanting", "captivating", "enrapture", "ethereal", "velvet", "enigma", "tranquil", "serenity", "solitude", "enchanting", "giggle", "dive", "skip", "twinkle", "bounce", "wander", "race", "breeze", "roar", "whisk", "explore", "dazzle", "delight", "skip", "gallop", "swim"];
let typedWords = [];
let numberWords = 0;
let seconds = 60;
let word;
let wordsIndex = 0;
let charIndex = -1;
let wordsOnTextBar = 3;
let wrongChar = 0;
let cronometer;
document.addEventListener("keyup", keyIsPressed);

function keyIsPressed(e) {
    if (charIndex < 0) {
        cronometer = setInterval(updateCronometer, 1000);
        INSTRUCTIONS.innerHTML = "Press space to submit word ";
        charIndex = 0;
    }
    if(e.key.charCodeAt(0) >= 97 && e.key.charCodeAt(0) <= 122) {
        let key = e.key.charCodeAt(0);
        checkCharacter(key);
    } else if (e.code == "Space") {
        WRITING_BAR.innerHTML = " ";
        if (wrongChar == 0) {
            ++wordsOnTextBar;
        }
        charIndex = 0;
        updateElements();   
        wrongChar = 0;
    }
}

function checkCharacter(key) {
    if (String.fromCharCode(key) == words[wordsIndex][charIndex]) {
        WRITING_BAR.innerHTML += `<p style='color: green '>${String.fromCharCode(key)}</p>`;
        if (words[wordsIndex].length == charIndex + 1) {
            ++wordsIndex;
            charIndex = 0;
            if (wrongChar == 0) {
                WORDS.innerHTML = wordsIndex;
            }    
        } else {
            ++charIndex;
        }
    } else {
        WRITING_BAR.innerHTML += `<p style='color: red'>${String.fromCharCode(key)}</p>`
        ++charIndex;
        wrongChar = 1;
    }
}

function updateCronometer() {
    --seconds;
    CRONOMETER.innerHTML = seconds;
    if (seconds == 0) {
        clearInterval(cronometer);
    }
}

function updateElements() {
    let subarrayWords = words.slice(wordsIndex, wordsOnTextBar);   
    TEXT_BAR.innerHTML = subarrayWords.join(" ");
}
