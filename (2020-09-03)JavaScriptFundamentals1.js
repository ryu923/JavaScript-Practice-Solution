// (2020-09-03 THU) JavaScript Fundamental 1
/* 
Q. Replace With Alphabet Position (https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript)
you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

Example 1: "a" = 1, "b" = 2, etc.
Example 2: "The sunset sets at twelve o' clock." = 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
*/

// Solution 1
function alphabetPosition(text) {
    var result = "";

    for (var i = 0; i < text.length; i++) {
        var letterNumber = text.toUpperCase().charCodeAt(i);

        if (letterNumber > 64 && letterNumber < 91) result += (letterNumber - 64) + " ";
    }

    return result.slice(0, result.length-1);
}

// My Solution 1 for Solution 1
function alphabetPosition(text) {
    var result = "";
    var capLetter = text.toUpperCase();
    
    for(var i = 0; i < capLetter.length; i++){
      var letterNum = capLetter.charCodeAt(i);
      
      if(letterNum > 64 && letterNum < 91)
        result += (letterNum - 64) + " ";
      }
    
    return result.slice(0, result.length - 1);
}

// Check 1: JavaScript String charCodeAt() Method - https://www.w3schools.com/jsref/jsref_charcodeat.asp
// Tip 1: "A" = 65, "B" = 66, "C" = 67 ~ "Z" = 90 / "a" = 97, "b" = 98, "c" = 99 ~ "z" = 122

var str = "HELLO WORLD";
var n = str.charCodeAt(0);
// Result: 72

var str = "HELLO WORLD";
var n = str.charCodeAt(str.length-1);
// Result: 68

// Check 2: JavaScript Array slice() Method - https://www.w3schools.com/jsref/jsref_slice_array.asp
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
// Result: "Orange,Lemon"

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1);
// Result: "Lemon,Apple"

var greeting = "HELLO WORLD";
var result = greeting.slice(1, 3);
// Result: EL

// Solution 2
