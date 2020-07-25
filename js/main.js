console.log("Welcom");
//=======================================================================
// WarmUp
//=======================================================================

//Vowel Count
//=======================================================================

function getCount(str) {
  var vowelsCount = 0;

  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      vowelsCount++;
    } else if (arr[i] === "e") {
      vowelsCount++;
    } else if (arr[i] === "i") {
      vowelsCount++;
    } else if (arr[i] === "u") {
      vowelsCount++;
    } else if (arr[i] === "o") {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(getCount("abracadabra"));

//Get the Middle Character
//=======================================================================

function getMiddle(s) {
  if (s.length == 1) {
    return s;
  } else if (s.length % 2 == 0) {
    return s.slice(s.length / 2 - 1, -(s.length / 2 - 1));
  } else {
    return s.slice(s.length / 2, -(s.length / 2));
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(getMiddle("abracadabra"));

//Opposite number
//=======================================================================
function opposite(number) {
  return number * -1;
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(opposite(18));

//Even or Odd
//=======================================================================
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
  //   Code refactoring by Akram
  //   condition ? a : b;
  //   return number%2==0 ? "even": "odd"
}
//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(even_or_odd(17));

//You're a square!
//=======================================================================
var isSquare = function (n) {
  if (n < -1) {
    return false;
  } else if (n == 0) {
    return true;
  } else if (Number.isInteger(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }
};

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(isSquare(25));

//=======================================================================
// Algorithms
//=======================================================================

//Is this a triangle?
//=======================================================================
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}
//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(isTriangle(4, 4, 8));

//Find the next perfect square!
//=======================================================================
function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  } else {
    return -1;
  }
}
//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(findNextSquare(144));

//Credit Card Mask
//=======================================================================
function maskify(cc) {
  let unmasked = cc.slice(-4);
  let numberOfHashtags = "";
  if (cc.length < 4) {
    return cc;
  } else {
    for (let i = 0; i < cc.length - 4; i++) {
      numberOfHashtags += "#";
    }
    return numberOfHashtags + unmasked;
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(maskify("5896635778852336658855"));

//=======================================================================
// Data Type
//=======================================================================

// Return Negative
//=======================================================================

function makeNegative(num) {
  if (num == 0) {
    return 0;
  } else if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(makeNegative(18));

// Remove First and Last Character
//=======================================================================

function removeChar(str) {
  return str.slice(1, -1);
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(removeChar("GoMyCode"));

//Remove String Spaces
//=======================================================================
function noSpace(x) {
  // return x.replace(" ", "") does not work
  let arrayOfSrting = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      arrayOfSrting.push(x[i]);
    } else {
      continue;
    }
  }
  return arrayOfSrting.join("");
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(
  noSpace(" LK?D K?DALZD     AZDL?  ZAKD? AZLK?DAZ   AZDK?AZD ?POIAZD    ")
);

//=======================================================================
// Numbers
//=======================================================================

//Basic Mathematical Operations
//=======================================================================

function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else if (operation == "/") {
    return value1 / value2;
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(basicOp("*", 6, 3));

//Sum of the first nth term of Series
//=======================================================================
function SeriesSum(n) {
  let sum1 = 1;
  if (n == 0) {
    return n.toFixed(2).toString();
  } else if (n == 1) {
    return sum1.toFixed(2).toString();
  } else {
    // let y = 4;
    for (let i = 2, y = 4; i <= n; i++, y += 3) {
      sum1 += 1 / y;
      //y += 3;
    }
  }
  return sum1.toFixed(2).toString();
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(SeriesSum(10));

//Keep Hydrated!
//=======================================================================

function litres(time) {
  return Math.floor(time * 0.5);
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(litres(5));

//Beginner - Lost Without a Map
//=======================================================================

function maps(x) {
  let y = [];
  for (let i = 0; i < x.length; i++) {
    y.push(x[i] * 2);
  }
  return y;
}
//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(maps([5, 3, 11, 9, 18]));

//=======================================================================
// Strings
//=======================================================================

//Reversed Strings
//=======================================================================
function solution1(str) {
  let arrayOfSrting = [];
  for (let i = 0; i < str.length; i++) {
    arrayOfSrting.push(str[i]);
  }
  let reverseString = arrayOfSrting.reverse();
  return reverseString.join("");
}

console.log(solution1("abcdefghijklmnopqrstuvwxyz"));

// String ends with?
//=======================================================================

function solution(str, ending) {
  if (ending == "") {
    return true;
  } else if (ending == str.slice(-ending.length)) {
    return true;
  } else {
    return false;
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(solution("abcd", "d"));

// Do I get a bonus?
//=======================================================================

function bonusTime(salary, bonus) {
  if (bonus == true) {
    salary *= 10;
  }
  return "£" + salary.toString();
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(bonusTime(20000, true));

//=======================================================================
//Arrays
//=======================================================================

// Counting sheep...
//=======================================================================

function countSheeps(arrayOfSheep) {
  let sumOfSheeps = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      sumOfSheeps += 1;
    }
  }
  return sumOfSheeps;
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// A Needle in the Haystack
//=======================================================================

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == "needle") {
      return "found the needle at position " + i;
    }
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);

// Convert number to reversed array of digits
//=======================================================================

function digitize(n) {
  let digits = n.toString().split("");
  let realDigits = digits.map(Number);
  return realDigits.reverse();
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(digitize(9846351545));

//=======================================================================
//Objects
//=======================================================================

// Make a function that does arithmetic!
//=======================================================================
function arithmetic(a, b, operator) {
  if (operator == "add") {
    return a + b;
  } else if (operator == "subtract") {
    return a - b;
  } else if (operator == "multiply") {
    return a * b;
  } else if (operator == "divide") {
    return a / b;
  }
}
//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(arithmetic(8, 2, "subtract"));

// Make them bark!
//=======================================================================

// Dog.prototype.bark = function () {
//   return "Woof!";
// };

// FIXME: Get Full Name
//=======================================================================.
class Dinglemouse {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`.trim();
  }
}

//=======================================================================
// Basic Language Features
//=======================================================================

// Grasshopper - Summation
//=======================================================================

var summation = function (num) {
  let res = 0;
  for (let i = 0; i < num; i++) {
    res += i;
    res++;
  }
  return res;
};

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(summation(9));

// Jenny's secret message
//=======================================================================

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(greet("Johnny"));

// Function 1 - hello world
//=======================================================================
function greet() {
  return "hello world!";
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(greet());

//=======================================================================
// Conditional Statements (Control Flow)
//=======================================================================

// Find the capitals
//=======================================================================

var capitals = function (word) {
  let wordArray = word.split("");
  let res = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === "A") {
      res.push(i);
    } else if (wordArray[i] === "A") {
      res.push(i);
    } else if (wordArray[i] === "B") {
      res.push(i);
    } else if (wordArray[i] === "C") {
      res.push(i);
    } else if (wordArray[i] === "D") {
      res.push(i);
    } else if (wordArray[i] === "E") {
      res.push(i);
    } else if (wordArray[i] === "F") {
      res.push(i);
    } else if (wordArray[i] === "G") {
      res.push(i);
    } else if (wordArray[i] === "H") {
      res.push(i);
    } else if (wordArray[i] === "I") {
      res.push(i);
    } else if (wordArray[i] === "J") {
      res.push(i);
    } else if (wordArray[i] === "K") {
      res.push(i);
    } else if (wordArray[i] === "L") {
      res.push(i);
    } else if (wordArray[i] === "M") {
      res.push(i);
    } else if (wordArray[i] === "N") {
      res.push(i);
    } else if (wordArray[i] === "O") {
      res.push(i);
    } else if (wordArray[i] === "P") {
      res.push(i);
    } else if (wordArray[i] === "Q") {
      res.push(i);
    } else if (wordArray[i] === "R") {
      res.push(i);
    } else if (wordArray[i] === "S") {
      res.push(i);
    } else if (wordArray[i] === "T") {
      res.push(i);
    } else if (wordArray[i] === "U") {
      res.push(i);
    } else if (wordArray[i] === "V") {
      res.push(i);
    } else if (wordArray[i] === "W") {
      res.push(i);
    } else if (wordArray[i] === "X") {
      res.push(i);
    } else if (wordArray[i] === "Y") {
      res.push(i);
    } else if (wordArray[i] === "Z") {
      res.push(i);
    }
  }
  return res;
};

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(capitals("GoMyCode Alger"));

// Plural
//=======================================================================
function plural(n) {
  return n == 1 ? false : true;
}
//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(plural(5));

// Drink about
//=======================================================================

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old >= 14 && old < 18) {
    return "drink coke";
  } else if (old >= 18 && old < 21) {
    return "drink beer";
  } else if (old >= 21) {
    return "drink whisky";
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(peopleWithAgeDrink(18));

//Loops
//=======================================================================

function smash(words) {
  "use strict";
  return words.join(" ");
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(smash(["hello", "world", "this", "is", "great"]));

//If you can't sleep, just count sheep!!
//=======================================================================

var countSheep = function (num) {
  let resultArray = [];
  for (let i = 1; i <= num; i++) {
    resultArray.push(i + " sheep...");
  }
  return resultArray.join("");
};

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(countSheep(5));

// Unfinished Loop - Bug Fixing #1
//=======================================================================
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(createArray(5));

//=======================================================================
// #Changing Gears
//=======================================================================

// Stop gninnipS My sdroW!
//=======================================================================
function spinWords(x) {
  let arrayOfwords = x.split(" ");
  let res = [];
  for (let i = 0; i < arrayOfwords.length; i++) {
    if (arrayOfwords[i].length >= 5) {
      let rev = arrayOfwords[i].split("");
      res.push(rev.reverse().join(""));
    } else {
      res.push(arrayOfwords[i]);
    }
  }
  return res.join(" ");
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(spinWords("This is my tesssste goood"));

// Who likes it?
//=======================================================================

function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return names[0] + " likes this";
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else if (names.length > 3) {
    let num = names.length - 2;
    return (
      names[0] +
      ", " +
      names[1] +
      " and " +
      num.toString() +
      " others like this"
    );
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// Multiples of 3 or 5
//=======================================================================

function solution(number) {
  let res = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      res += i;
    } else if (i % 3 == 0) {
      res += i;
    } else if (i % 5 == 0) {
      res += i;
    }
  }
  return res;
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(solution(99));

//   Find The Parity Outlier
//=======================================================================.

function findOutlier(integers) {
  let countOfEvens = 0;
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 == 0) {
      countOfEvens += 1;
    }
  }
  if (countOfEvens <= 1) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 == 0) {
        return integers[i];
      }
    }
  } else if (countOfEvens > 1) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) {
        return integers[i];
      }
    }
  }
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(findOutlier([3, 8, 7, 17, 19]));

// Sum of Digits / Digital Root
//=======================================================================.
function digital_root(n) {
  let sum = n;
  let arr = [];
  let reducer = (a, b) => parseInt(a) + parseInt(b);
  while (sum > 9) {
    arr = sum.toString().split("");
    sum = arr.reduce(reducer);
  }
  return sum;
}

//EXEMPLE OF EXCUTION OF THE FUNCTION
console.log(digital_root(1616546843129));
