// (2020-09-21 MON) JavaScript Fundamental 4
/*
Q. Sort the odd (https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript)

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example: sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

// Solution 1
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b); // 1, 3, 5
  return array.map((x) => x % 2 ? odd.shift() : x);
}

// My Solution 1
function sortArray(array) {
  var odds = array.filter((x) => x % 2);
  var sortOdds = odds.sort((a, b) => a - b);
  
  var result = array.map((x) => x % 2 ? sortOdds.shift() : x);
  
  return result;
}

// My Solution 2
function sortArray(array) {
  var sortOdds = array.filter((x) => x % 2).sort((a, b) => a - b);
  
  return array.map((x) => x % 2 ? sortOdds.shift() : x);
}

// Check 1: JavaScript Array sort() Method - https://www.w3schools.com/JSREF/jsref_sort.asp
// The sort() method sorts the items of an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.sort();
  document.getElementById("demo").innerHTML = fruits;
}
// Result: Apple,Banana,Mango,Orange

// Sort an array alphabetically, and then reverse the order of the sorted items (descending):
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.sort();
  fruits.reverse();
  document.getElementById("demo").innerHTML = fruits;
}
// Result: Orange,Mango,Banana,Apple

// Sort numbers in an array in ascending order:
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function(a, b){return a-b});
  document.getElementById("demo").innerHTML = points;
}
// Result: 1,5,10,25,40,100

// Get the lowest value in an array:
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function(a, b){return a-b});
  document.getElementById("demo").innerHTML = points[0];
}
// Result: 1

// Sort numbers in an array in descending order:
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function(a, b){return b-a});
  document.getElementById("demo").innerHTML = points;
}
// Result: 100,40,25,10,5,1

// Get the highest value in an array:
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function(a, b){return b-a});
  document.getElementById("demo").innerHTML = points[0];
}
// Result: 100

// Check 2: JavaScript Array shift() Method - https://www.w3schools.com/jsref/jsref_shift.asp
// The shift() method removes the first item of an array in the function
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.shift();
  document.getElementById("demo").innerHTML = fruits;
}
// Result: Orange,Apple,Mango

// The return value of the shift method is the removed item (NOT in the function)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

var pick = fruits.shift();

function myFunction() {
  document.getElementById("demo").innerHTML = pick;
}


// Check 3: JavaScript Const - https://www.w3schools.com/js/js_const.asp
// Primitive Values: If we assign a primitive value to a constant, we cannot change the primitive value
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

// Assigned when Declared: JavaScript const variables must be assigned a value when they are declared
const PI;
PI = 3.14159265359;
// Result: ERROR!

const PI = 3.14159265359;
// Result: CORRECT!

// Constant Objects can Change: You can change the properties of a constant object (But you can NOT reassign a constant object)
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";
// Result: Car owner is Johnson

const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};
// Result: ERROR

// Constant Arrays can Change: You can change the elements of a constant array (But you can NOT reassign a constant array)
// You can create a constant array:
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];
// Change an element:
cars[0] = "Toyota";
// Add an element:
cars.push("Audi");
// Display the Array:
document.getElementById("demo").innerHTML = cars; 
// Result: Toyota,Volvo,BMW,Audi

try {
  const cars = ["Saab", "Volvo", "BMW"];
  cars = ["Toyota", "Volvo", "Audi"];
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}
// Result: ERROR!