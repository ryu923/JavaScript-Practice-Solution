// (2020-09-20 SUN) JavaScript Fundamental 3
/*
Q. Ones and Zeros (https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript)
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Example 1: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

// My Solution 1
const binaryArrayToNumber = arr => {
  var arrayToString = arr.join('');
  var result = parseInt(arrayToString, 2); 
  
  return result;
};

// My Solution 2
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// Check 1: JavaScript Number() Function - https://www.w3schools.com/JSREF/jsref_number.asp
// The Number() function converts the object argument to a number that represents the object's value.
var x1 = true;
var x2 = false;
var x3 = new Date();
var x4 = "999";
var x5 = "999 888";

var n =
Number(x1) + ", " +
Number(x2) + ", " +
Number(x3) + ", " +
Number(x4) + ", " +
Number(x5);
// Result: 1, 0, 1600656404406, 999, NaN

// Check 2: JavaScript parseInt() Function - The parseInt() function parses a string and returns an integer.
function myFunction() {

  var decimal = parseInt("10")+ ", ";
  var binary = parseInt("10", 2)+ ", ";
  var octal = parseInt("10", 8);

  var n = "Decial: " + decimal + 
  		  "Binary: " + binary + 
          "Octal: " + octal
          
  document.getElementById("demo").innerHTML = n;
}
// Result: Decial: 10, Binary: 2, Octal: 8