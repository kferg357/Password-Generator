// Define our Data Set (Globally Scoped)
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseLetters = 'ABCDEfGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var selectedSpecialCharacters = "~!@#$%^&*()_-+=*/[{]}\|;:'<,>.?/";
  

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
  var password = ''
  //ask question about length
  var num = 0;
  function choseLength() {
    num = prompt('How many characters do you want')
    console.log(num)
    //parseInt(num);
    console.log(typeof num);
  }
  choseLength();

  // Check if the length is valid ?
  if(num < 8 || num > 128) {
    alert("Length must be greater than 8 characters or less than 128 characters");
    // Going back to the beginning
     choseLength();
  } // else {
var selectedCharacters = ''
  var selectLower = confirm('Would you like lower case letters') // returns a Boolean (True or False)
      console.log(selectLower);
  if(selectLower === true) {
      // Add the Character set to our VALID password character pool
      selectedCharacters = selectedCharacters + lowerCaseLetters;
      console.log(selectedCharacters);
  } else {
      console.log("No lowercase Characters wanted")
  }
   //}  

   // Continue with next prompts
  var selectUpper = confirm('Would you like upper case letters')
    console.log(selectUpper);
  if(selectUpper === true) {
    // Add the Character set to our VALID password character pool
    selectedCharacters = selectedCharacters + upperCaseLetters;
    console.log(selectedCharacters);
  } else {
      console.log("No upper Characters wanted")
  }

  // Continue with next propmts
  var selectedSpecial = confirm ('Would you like special characters')
    console.log(selectedSpecial);
  if(selectedSpecial === true) {
    // Add the Character set to our VALID password character pool
    selectedCharacters = selectedCharacters + selectedSpecialCharacters;
    console.log(selectedCharacters);
  } else {
    console.log("No special characters wanted")
  }

  for (var i = 0; i < num; i++) {
    var characterIndex = Math.floor(Math.random()*selectedCharacters.length);
    var character = selectedCharacters[characterIndex];
   



    password = password + character
  }
  //returnpasswored value 
  return password
}
