// Assignment Code
var generateBtn = document.querySelector("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(lowerCaseLetters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 //some way for a user to input the desired length of the password



//console.log('Hello')

var lowerCaseLetters = 'asdked'
var numbers = '1234567789'
var selectedCharacters = ''
console.log
//verify the user is typing in a valid value (numbers between 0-128)
var num = prompt('How many characters do you want')
console.log(num)

// some way for the user to select the type of characters they t
var lowercase = confrim('Do you want to include lowercase letters')
//find a wat to check what the users input was we also want to do something with the info

if(lowercase === true){
  selectedCharacters = selectedCharacters + lowerCaseLetters 
  console.log(selectedCharacters)
console.log('the user picked true')
} else {
console.log('The user picked false')
}

if(lowercase === true){
  selectedCharacters = selectedCharacters + numbers
  console.log(selectedCharacters)

}


  
}


//find a way to reconcile the number of characters chosen with what they want