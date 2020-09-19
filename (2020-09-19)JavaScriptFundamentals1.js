// (2020-09-03 THU) JavaScript Fundamental 1
/* 
Q. Replace With Alphabet Position (https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript)
You are required to, given a string, replace every letter with its position in the alphabet.
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

// Solution 2
function alphabetPosition(text) {
  return text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
}

// My Solution 2 for Solution 2
function alphabetPosition(text) {
  return text
  .toUpperCase()
  .split('')
  .map(a => a.charCodeAt() - 64)
  .filter(a => a > 0 && a < 27)
  .join(' ');
}

//-------------------------------------------------------------------------------------------------------

// Check 1: JavaScript String charCodeAt() Method - https://www.w3schools.com/jsref/jsref_charcodeat.asp
// Tip 1: "A" = 65, "B" = 66, "C" = 67 ~ "Z" = 90
// Tip 2: "a" = 97, "b" = 98, "c" = 99 ~ "z" = 122
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

// Check 3: JavaScript String match() Method - https://www.w3schools.com/jsref/jsref_match.asp
var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/g);
// Result: ain,ain,ain

// Check 4: JavaScript String search() Method - https://www.w3schools.com/jsref/jsref_search.asp
var str = "Visit W3Schools!";
var n = str.search("W3Schools");
// Result: 6 (Position number of the first charactor)

// Check 5: JavaScript Regular Expressions - https://www.w3schools.com/js/js_regexp.asp
// Check 5-1: JavaScript Regular Expressions MODIFIER i, g, m
// Check 5-1-1: JavaScript Regular Expressions MODIFIER i - Perform CASE-INSENSITIVE matching (Find the first match)
var str = "Visit W3Schools";
var patt1 = /w3schools/i;
var result = str.match(patt1);
// Result: W3Schools (* Find all similar ones: IGNORE UPPERCASE and LOWCASE)

// Check 5-1-2: JavaScript Regular Expressions MODIFIER g - Perform a GLOBAL match (Find all matches rather than stopping after the first match)
var str = "Is this all there is?";
var patt1 = /is/g;
var result = str.match(patt1);
// Result: is,is (* Find ALL EXACTLY SAME ONES)

// Check 5-1-3: JavaScript Regular Expressions MODIFIER m - Perform MULTIPLE-LINE matching (Att the beginning of each line in a string)
var str = "\nIs th\nis it?";
var patt1 = /is/m;
var result = str.match(patt1);
// Result: is (* Find ALL EXACTLY SAME ONES)

// Check 5-2: JavaScript Regular Expressions PATTERN - BRACKETS [abcde], [^abcde], [a-e], [^a-e], [0-5], [^0-5], [135], [^135], (x/y)
// Check 5-2-1: [abcde] / [a-e] / [0-5] / [135] patterns - Do a search for CHARACTOR(S) that are inside the brackets []
// * [abcde..] Expression - Any character(s) between the brackets
// * [A-Z] Expression - Any character from uppercase A to uppercase Z
// * [a-z] Expression - Any character from lowercase a to lowercase z
// * [A-z] Expression - Any character from lowercase A to lowercase z
var str = "My telephone number is 123-456-7890.";
var patt1 = /[abcde]/g;
var patt1 = /[a-e]/g;
// Result: e,e,e,b,e
var patt1 = /[0,1,2,3,4,5]/g;
var patt1 = /[0-5]/g;
// Result: 1,2,3,4,5,0

// Check 5-2-2: [^abcde] / [^a-e] / [^0-5] / [^135] patterns - Do a search for CHARACTOR(S) that are NOT inside the brackets []
var str = "My telephone number is 123-456-7890.";
var patt1 = /[abcde]/g;
var patt1 = /[a-e]/g;
// Result: M,y, ,t,l,p,h,o,n, ,n,u,m,r, ,i,s, ,1,2,3,-,4,5,6,-,7,8,9,0,.


var patt1 = /[0,1,2,3,4,5]/g;
var patt1 = /[0-5]/g;
// Result: M,y, ,t,e,l,e,p,h,o,n,e, ,n,u,m,b,e,r, ,i,s, ,-,6,-,7,8,9,.

// Check 5-2-3: (x/y) pattern - Find any of the alternatives separated with |
var str = "re, green, red, green, gren, gr, blue, yellow";
var patt1 = /(red|green)/g;
var patt1 = /red|green/g;
var result = str.match(patt1);
// Result: green,red,green

// Check 5-3: JavaScript Regular Expressions PATTERN - METACHARACTORS \d, \s, \b, \uxxxx
// Check 5-3-1: \d pattern - Find a digit
var str = "Give 100%!"; 
var patt1 = /\d/g;
var result = str.match(patt1);
// Result: 1,0,0

// Check 5-3-2: \s pattern - Find a whitespace character
var str = "Is this all there is?";
var patt1 = /\s/g;
var result = str.match(patt1);
// Result: , , ,

// Check 5-3-3: \b pattern - Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
var str = "HELLO, LOOK AT YOU!"; 
var patt1 = /\bLO/;
var result = str.search(patt1);
// Result: 7
var patt1 = /LO\b/;
var result = str.search(patt1);
// Result: 3

// Check 5-3-4: \uxxxx pattern - Find the Unicode character specified by the hexadecimal number xxxx
var str = "Visit W3Schools. Hello World!";
var patt1 = /\u0054/g;
var result = str.match(patt1);
// Result: W

// Check 5-4: JavaScript Regular Expressions PATTERN - QUANTIFIERS n+, n*, n?
// Check 5-4-1: n+ pattern - Matches any string or charactors that contains at least one n
var str = "Hellooo World! Hello W3Schools!"; 
var patt1 = /o+/g;
var result = str.match(patt1);
// Result: ooo,o,o,oo
var str = "Hellooo World! Hello W3Schools!"; 
var patt1 = /[o+]/g;
var result = str.match(patt1);
// Result: o,o,o,o,o,o,o

// Check 5-4-2: n* pattern - Matches any string that contains zero or MORE occurrences of n
var str = "Hellooo World! Hello W3Schools!"; 
var patt1 = /lo*/g;
var result = str.match(patt1);
// Result: l,looo,l,l,lo,l
var str = "Hellooo World! Hello W3Schools!"; 
var patt1 = /[lo*]/g; // Same as /[lo]/g
var result = str.match(patt1);
// Result: l,l,o,o,o,o,l,l,l,o,o,o,l

// Check 5-4-3: n? pattern - Matches any string that contains zero or ONE occurrences of n
var str = "1, 100 or 1000?";
var patt1 = /10?/g;
var result = str.match(patt1);
// Result: 1,10,10
var str = "1, 100 or 1000?";
var patt1 = /[10?]/g; // Same as [10]/g
var result = str.match(patt1);
// Result: 1,1,0,0,1,0,0,0

// Check 6: JavaScript String split() Method - https://www.w3schools.com/jsref/jsref_split.asp
var str = "How are you doing today?";
var res = str.split();
// Result: How are you doing today?

// Tip 1: " " = ' '
var str = "How are you doing today?";
var res = str.split(''); // Including white-space
var res = str.split(""); // Including white-space
// Result: H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?

var str = "How are you doing today?";
var res = str.split('', 3);
var res = str.split("", 3);
// Result: H,o,w

var str = "How are you doing today?";
var res = str.split(' ');
var res = str.split(" ");
// Result: How,are,you,doing,today?

var str = "How are you doing today?";
var res = str.split(' ', 5);
var res = str.split(" ", 5);
// Result: H,o,w, ,a

// Check 7: JavaScript Array map() Method - https://www.w3schools.com/jsref/jsref_map.asp
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
document.getElementById("demo").innerHTML = x;
// Result: 2,3,4,5

var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];

function getFullName(item) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
}

function myFunction() {
    document.getElementById("demo").innerHTML = persons.map(getFullName);
}
// Result: Malcom Reynolds,Kaylee Frye,Jayne Cobb

// Check 8: JavaScript Array join() Method - https://www.w3schools.com/JSREF/jsref_join.asp
// Returns the array as a STRING
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = document.getElementById("demo");
x.innerHTML = fruits.join();
// Result: Banana,Orange,Apple,Mango

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = document.getElementById("demo");
x.innerHTML = fruits.join(" and ");
// Result: Banana and Orange and Apple and Mango

// Check 9: JavaScript Array filter() Method - https://www.w3schools.com/jsref/jsref_filter.asp
// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
// Result: 32,33,40