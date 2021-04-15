// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 //some way for a user to input the desired length of the password



//console.log('Hello')
function generatePassword(){
  var password = 'Kenneth'
  //ask question about length 
  //ask question about upper characters
  //ask question about lower characters
  //..other questions
  //do something based on response to length question
  //do something based on response to upper characters
  //...other questions



  // var lowerCaseLetters = 'asdked' 
  // var numbers = '1234567789'
  // var selectedCharacters = ''
  // console.log
  // //verify the user is typing in a valid value (numbers between 0-128)
  // var num = prompt('How many characters do you want')
  // console.log(num)

  // // some way for the user to select the type of characters they t
  // var lowercase = confrim('Do you want to include lowercase letters')
  // //find a wat to check what the users input was we also want to do something with the info

  // if(lowercase === true){
  //   selectedCharacters = selectedCharacters + lowerCaseLetters 
  //   console.log(selectedCharacters)
  // console.log('the user picked true')
  // } else {
  // console.log('The user picked false')
  // }

  // if(lowercase === true){
  //   selectedCharacters = selectedCharacters + numbers
  //   console.log(selectedCharacters)

  // }

  //returnpasswored value 
  return password
}

//find a way to reconcile the number of characters chosen with what they want