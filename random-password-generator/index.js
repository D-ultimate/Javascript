const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?","/"];
const passwordLengthEl = document.getElementById("password-length-el");
const uppercaseEl = document.getElementById("uppercase-el");
const lowercaseEl = document.getElementById("lowercase-el");
const numbersEl = document.getElementById("numbers-el");
const symbolsEl = document.getElementById("symbols-el");
const password1El = document.getElementById("password-1-el");
const password2El = document.getElementById("password-2-el");


function generatePasswords() {
    let length = passwordLengthEl.value;
    let isUpper = uppercaseEl.checked;
    let isLower = lowercaseEl.checked;
    let isNumber = numbersEl.checked;
    let isSymbol = symbolsEl.checked;
    let characters = [];
    if(isUpper)
        characters = characters.concat(uppercaseCharacters);
    if(isLower)
        characters = characters.concat(lowercaseCharacters);
    if(isNumber)
        characters = characters.concat(numberCharacters);
    if(isSymbol)
        characters = characters.concat(symbolCharacters);
    
    let password1 = "";
    let password2 = "";
    if (characters.length > 0) {
        for (let i = 0; i < length; i++) {
            let randomIndex1 = Math.floor(Math.random() * characters.length)
            password1 += characters[randomIndex1];
            let randomIndex2 = Math.floor(Math.random() * characters.length)
            password2 += characters[randomIndex2];
        }
    }
    else {
        alert("Please select atleast one checkbox!!!");
    }
    password1El.textContent = password1;
    password2El.textContent = password2;
}