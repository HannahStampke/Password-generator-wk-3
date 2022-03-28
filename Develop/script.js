// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var options;
var passwordMinLength = 8;
var passwordMaxLength = 128;
// Password options
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var specialChar = "'!@#$%^&*()_+-=~`{}[]|\:;<>,.?/'";

// Function to generate password
function generatePassword() {
  enter = parseInt(prompt("How many characters? (8-128)"));
  if (!enter) {
    alert("Please enter a number");
  }
  // Checks that password is the correct length
  else if (enter < passwordMinLength || enter > passwordMaxLength) {
    enter = parseInt(prompt("Please choose between 8 and 128"));
  }
  // If length is correct, offer the password options
  else {
    lowerCase = confirm("Will this contain lower case letters?");
    upperCase = confirm("Will this contain upper case letters?");
    numeric = confirm("Will this contain numbers?");
    specialChar = confirm("Will this contain special characters?");
  };
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
  else if (lowercase && upperCase && specialChar); {
    options = lowerCase.concat(upperCase, specialChar);
  }
  else if (lowercase && numeric && specialChar); {
    options = lowerCase.concat(numeric, specialChar);
  }
  else if (upperCase && numeric && specialChar); {
    options = upperCase.concat(numeric, specialChar);
  }
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);