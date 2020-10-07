//Array of Numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Array of Lower Case Letters
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//Array of Upper Case Letters
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Array of Special Characters
var specialCharacters = [
  " ",
  "!",
  '"',
  "#",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Function to Create Password Based On Parameters Provided
// num = numOfChar
// char = array(s) to Use for Password Generation
function passwordGeneration(num, char) {
  var result = "";
  for (var i = 0; i < num; i++) {
    if (i < char.length) {
      var arrNum = i;
      var charNum = Math.floor(Math.random() * char[arrNum].length);
      result = result + char[arrNum][charNum];
    } else {
      var arrNum = Math.floor(Math.random() * char.length);
      var charNum = Math.floor(Math.random() * char[arrNum].length);
      result = result + char[arrNum][charNum];
    }
  }
  document.getElementById("PasswordReturn").innerHTML = result;
}

// Function To Get Password Parameters
function passwordParameters() {
  // Declare Variables for Number of Characters
  var numOfChar = 0;
  var useCharacters = [];

  // While Loop To Get Character Count
  while (numOfChar < 8 || numOfChar > 129) {
    numOfChar = prompt("Please Enter A Number Of Characters Between 8 & 128:");
  }

  // Declare Variables to Determine Character Types
  var lc = confirm("Do You Want To Use Lower Case Letters:");
  var uc = confirm("Do You Want To Use Upper Case Letters:");
  var nu = confirm("Do You Want To Use Numeric Characters:");
  var sc = confirm("Do You Want To Use Special Characters:");

  // If No Character Type Returned, Notify User and End Program
  if (lc === false && uc === false && nu === false && sc === false) {
    alert("You Must Select At Least One Character Type. Please Try Again.");
  } else {
    // Push Each Character Type Selected Into useCharacters Array
    if (lc === true) {
      useCharacters.push(lowerCase);
    }
    if (uc === true) {
      useCharacters.push(upperCase);
    }
    if (nu === true) {
      useCharacters.push(numbers);
    }
    if (sc === true) {
      useCharacters.push(specialCharacters);
    }
  }

  // Call Password Generation Function
  passwordGeneration(numOfChar, useCharacters);
}
