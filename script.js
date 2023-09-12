function generatePassword() {
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "w", "x", "y", "z"];
  var specialSymbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "<", ">", "{", "}", "[", "]", "|", "/"];

  // Computer message for the length of the password
  var numberOfCharacters = parseInt(prompt("How many characters do you wish your password to have? Choose between 8-128 characters."));

  if (isNaN(numberOfCharacters) || numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Please enter a valid number between 8 and 128");
    return "";
  }

  // Computer messages asking about what type of characters the user wants in their password
  var containsLowercase = confirm("Do you want lowercase characters in your password?");
  var containsUppercase = confirm("Do you want uppercase characters in your password?");
  var containsNumbers = confirm("Do you want your password to include numbers?");
  var containsSymbols = confirm("Do you want special symbols in your password?");

  // Message if the user did not choose any of the necessary character types
  if (!containsLowercase && !containsUppercase && !containsNumbers && !containsSymbols) {
    alert("Your password needs to contain at least one of the character types.");
    return "";
  }

  var possibleCharacters = [];

  if (containsLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (containsUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (containsNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (containsSymbols) {
    possibleCharacters = possibleCharacters.concat(specialSymbols);
  }

  
  // Generate the final password
  var finalPassword = "";
  for (var i = 0; i < numberOfCharacters; i++) {
    var rng = Math.floor(Math.random() * possibleCharacters.length);
    finalPassword += possibleCharacters[rng];
  }
  
  return finalPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  var newpassword = generatePassword();
  document.getElementById("password").placeholder = newpassword;

  // Display the generated password in an alert
  alert("Generated Password: " + newpassword);
});
