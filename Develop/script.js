// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordMinLength = 8;
var passwordMaxLength = 128;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var specialChar = "'!@#$%^&*()_+-=~`{}[]|\:;<>,.?/'";

// Function to generate password
function generatePassword() {
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);