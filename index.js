const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = "";
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

function newPasswordLength() {
  passwordLength = document.getElementById("range").value;
  console.log(passwordLength);
}

function genRandomPassword() {
  passwordOne.value = "";
  passwordTwo.value = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomCharacterOne = Math.floor(Math.random() * characters.length);
    let randomCharacterTwo = Math.floor(Math.random() * characters.length);
    passwordOne.value += characters[randomCharacterOne];
    passwordTwo.value += characters[randomCharacterTwo];
  }
}

//
// function newPasswordLength() {
//   let newPasswordLength = document.getElementById("range");
//   passwordLength += newPasswordLength.value;
//   console.log(newPasswordLength.value);
// }

// for når jeg skal lage en eventuell checklist
// const characters = [
//   {
//     upperCase: [
//       "A",
//       "B",
//       "C",
//       "D",
//       "E",
//       "F",
//       "G",
//       "H",
//       "I",
//       "J",
//       "K",
//       "L",
//       "M",
//       "N",
//       "O",
//       "P",
//       "Q",
//       "R",
//       "S",
//       "T",
//       "U",
//       "V",
//       "W",
//       "X",
//       "Y",
//       "Z",
//     ],
//     lowerCase: [
//       "a",
//       "b",
//       "c",
//       "d",
//       "e",
//       "f",
//       "g",
//       "h",
//       "i",
//       "j",
//       "k",
//       "l",
//       "m",
//       "n",
//       "o",
//       "p",
//       "q",
//       "r",
//       "s",
//       "t",
//       "u",
//       "v",
//       "w",
//       "x",
//       "y",
//       "z",
//     ],
//     numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
//     signs: [
//       "~",
//       "`",
//       "!",
//       "@",
//       "#",
//       "$",
//       "%",
//       "^",
//       "&",
//       "*",
//       "(",
//       ")",
//       "_",
//       "-",
//       "+",
//       "=",
//       "{",
//       "[",
//       "}",
//       "]",
//       ",",
//       "|",
//       ":",
//       ";",
//       "<",
//       ">",
//       ".",
//       "?",
//       "/",
//     ],
//   },
// ];
