// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

window.alert("Your password must contain between 8 characters and 128 characters. ");

function generatePassword() {
  var passwordLength = parseInt(prompt("YOUR PASSWORD MUST CONTAIN BETWEEN 8 CHARACTERS AND 128 CHARACTERS! ")); 
  if (passwordLength < 8 | !Number.isInteger(passwordLength)) {
    alert(" PASSWORD IS TOO SHORT, IT MUST CONTAIN AT LEAST 8 CHARACTERS. ");
    return; }
  if (passwordLength > 128 | !Number.isInteger(passwordLength)) {
    alert(" PASSWORD IS TOO LONG, IT MUST CONTAIN A MAXIMUM OF 128 CHARACTERS. ");
    return; }
  }

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const specialCharacters = "!@£$%^&*()_+{}:|?><~€#-=[];'\/.,`";




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
