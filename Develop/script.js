var generateBtn = document.querySelector("#generate");

// Options to add
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];

var allChar = [];


function generatePassword() {
    // How many characters
    var conLength = window.prompt(
        "How many characters do you want your password to be?"
    );
    // Length of password between 8-128
    if (conLength < 8 || conLength > 128) {
        alert("That's cheeky! I said between 8 and 128...");
    } else {
        // Add upper and lowercase
        var upperChoice = confirm("Would you like to use uppercase characters?");
        if (upperChoice) {
            allChar = allChar.concat(upperCase)
        };
        var lowerChoice = confirm("Would you like to use lowercase characters?");
        if (lowerChoice) {
            allChar = allChar.concat(lowerCase)
        };
        // Add Symbols
        var symbolChoice = confirm("Would you like to use symbols?");
        if (symbolChoice) {
            allChar = allChar.concat(symbol)
        };
        // Add numbers
        var numberChoice = confirm("Would you like to use numbers?");
        if (numberChoice) {
            allChar = allChar.concat(number)
        };
        if (
            lowerChoice === false &&
            upperChoice === false &&
            symbolChoice === false &&
            numberChoice === false
        ) {
            // Select something
            alert("Well, you have to pick something!");
            generatePassword();
        }
    }
    // math.floor math.random to create password
    var password = "";
    console.log(allChar)
    for (let i = 0; i < conLength; i++) {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }
    //return password
    return password
}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}



// Event listener generate button
generateBtn.addEventListener("click", writePassword);