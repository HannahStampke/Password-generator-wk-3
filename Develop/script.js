// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var options;
var amount;
var passwordMinLength = 8;
var passwordMaxLength = 128;

// Password option confirmations
var confirmLowerCase;
var confirmUpperCase;
var confirmNumeric;
var confirmSpecialChar;

// Password options
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numeric = "1234567890";
specialChar = "'!@#$%^&*()_+-=~`{}[]|\:;<>,.?/'";


// Function to generate password
function generatePassword() {
  enter = parseInt(prompt("How many characters? (8-128)"));
  if (!enter) {
    alert("That's cheeky! Please enter a number...");
  }
  // Checks that password is the correct length
  else if (enter < passwordMinLength || enter > passwordMaxLength) {
    enter = parseInt(prompt("Please choose between 8 and 128"));
  }
  // If length is correct, offer the password options
  else {
    confirmLowerCase = confirm("Will this contain lower case letters?");
    confirmUpperCase = confirm("Will this contain upper case letters?");
    confirmNumeric = confirm("Will this contain numbers?");
    confirmSpecialChar = confirm("Will this contain special characters?");
  }
  // Store password character amount locally
  localStorage.setItem("amount", enter)

  // If NO password options are chosen
  if (!lowerCase && !upperCase && !numeric && !specialChar) {
    options = alert("Well it has to contain something!");
  }
  // If ALL password options are chosen
  else if (lowerCase && upperCase && numeric && specialChar) {
    options = lowerCase.concat(upperCase, numeric, specialChar);
  }
  // If 3 password options are chosen
  else if (lowerCase && upperCase && numeric) {
    options = lowerCase.concat(upperCase, numeric);
  }
  else if (lowercase && upperCase && specialChar) {
    options = lowerCase.concat(upperCase, specialChar);
  }
  else if (lowercase && numeric && specialChar) {
    options = lowerCase.concat(numeric, specialChar);
  }
  else if (upperCase && numeric && specialChar) {
    options = upperCase.concat(numeric, specialChar);
  }
  // If 2 password options are chosen
  else if (lowerCase && upperCase) {
    options = lowerCase.concat(upperCase);
  }
  else if (lowerCase && numeric) {
    options = lowerCase.concat(numeric);
  }
  else if (lowerCase && specialChar) {
    options = lowerCase.concat(specialChar);
  }
  else if (upperCase && numeric) {
    options = upperCase.concat(numeric);
  }
  else if (upperCase && specialChar) {
    options = upperCase.concat(specialChar);
  }
  else if (numeric && specialChar) {
    options = numeric.concat(specialChar);
  }
  // If 1 password option is chosen
  else if (lowerCase) {
    options = lowerCase;
  }
  else if (upperCase) {
    options = upperCase;
  }
  else if (numeric) {
    options = numeric;
  }
  else if (specialChar) {
    options = specialChar;
  }
}

// Array placeholder for generated password length
var password = [];
 
 // Random selection for all variables: 
 for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.amount)];
  password.push(pickChoices);
}

// Write password to the #password input
function writePassword() {

  password = generatePassword();
  passwordText = document.querySelector("#password");
  localStorage.getItem("amount", enter);
  passwordText.enter = password;
  alert(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);