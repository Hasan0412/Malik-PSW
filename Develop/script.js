// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

window.alert("WELCOME TO MALIK PASSWORD GENERATOR!  ");

function createPassword() {
  var passwordLength = parseInt(prompt("YOUR PASSWORD MUST CONTAIN BETWEEN 8 CHARACTERS AND 128 CHARACTERS! ")); 
  if (passwordLength < 8 | !Number.isInteger(passwordLength)) {
    alert("PASSWORD IS TOO SHORT, IT MUST CONTAIN AT LEAST 8 CHARACTERS. ");
    return; }
  if (passwordLength > 128 | !Number.isInteger(passwordLength)) {
    alert("PASSWORD IS TOO LONG, IT MUST CONTAIN A MAXIMUM OF 128 CHARACTERS. ");
    return; }
  
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const specialCharacters = "!@£$%^&*()_+{}:|?><~€#-=[];'\/.,`";

var addLowercase = confirm("WOULD YOU LIKE THE PASSWORD TO INCLUDE LOWERCASE LETTERS?");
var addUppercase = confirm("WOULD YOU LIKE THE PASSWORD TO INCLUDE UPPERCASE LETTERS?");
var addNumber = confirm("WOULD YOU LIKE THE PASSWORD TO INCLUDE NUMBERS?");
var addSpecialCharacters = confirm("WOULD YOU LIKE THE PASSWORD TO INCLUDE SPECIAL CHARACTERS?");

if (!addLowercase && !addUppercase && !addNumber && !addSpecialCharacters) {
  alert("ERROR! AT LEAST ONE CHARACTER TYPE MUST BE SELECTED.");
  return;
}

var userChoices = "";
userChoices += addLowercase ? lowercase : "";
userChoices += addUppercase ? uppercase : "";
userChoices += addNumber ? number : "";
userChoices += addSpecialCharacters ? specialCharacters : "";

var passwordGenerator = "";
for(var i=0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * userChoices.length);
  passwordGenerator += userChoices[randomIndex];
}

return passwordGenerator;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
