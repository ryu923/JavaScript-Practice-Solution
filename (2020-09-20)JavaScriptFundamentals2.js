// (2020-09-04 FRI) JavaScript Fundamental 2
/*
Q. Highest and Lowest (https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript)
You are given a string of space separated numbers, and have to return the highest and lowest number.

Example 1: highAndLow("1 2 3 4 5");  // return "5 1"
Example 2: highAndLow("1 2 -3 4 5"); // return "5 -3"
Example 3: highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

// Solution 1
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// My Solution 1 for Solution 1
function highAndLow(numbers){
  var splitNum = numbers.split(' ');
  var highestNum = Math.max.apply(0, numArray);
  var lowestNum = Math.min.apply(0, numArray);
  
  return highestNum + ' ' + lowestNum;
}

// My Solution 2 for Solution 1
function highAndLow(numbers){
  var numArray = numbers.split(' ');
  var highestNum = Math.max.apply(null, numArray);
  var lowestNum = Math.min.apply(null, numArray);
  
  return highestNum + ' ' + lowestNum;
}

// Check 1: JavaScript max() Method - https://www.w3schools.com/jsref/jsref_max.asp
// The max() method returns the number with the highest value.
function myFunction() {
    var a = Math.max(5, 10);
    var b = Math.max(0, 150, 30, 20, 38);
    var c = Math.max(-5, 10);
    var d = Math.max(-5, -10);
    var e = Math.max(1.5, 2.5);
  
    var x = a + ", " + b + ", " + c + ", " + d + ", " + e;
    document.getElementById("demo").innerHTML = x;
}
// Result: 10, 150, 10, -5, 2.5

// Check 2: JavaScript min() Method - https://www.w3schools.com/jsref/jsref_min.asp
function myFunction() {
    var a = Math.min(5, 10);
    var b = Math.min(0, 150, 30, 20, 38);
    var c = Math.min(-5, 10);
    var d = Math.min(-5, -10);
    var e = Math.min(1.5, 2.5);
  
    var x = a + ", " + b + ", " + c + ", " + d + ", " + e;
    document.getElementById("demo").innerHTML = x;
}
// Result: 5, 0, -5, -10, 1.5

// Check 3: JavaScript Function Apply - https://www.w3schools.com/js/js_function_apply.asp
// With the apply() method, you can write a method that can be used on different objects.
// The apply() method is similar to the call() method
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);
// Result: John Doe,Oslo,Norway

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");
// Result: John Doe,Oslo,Norway

Math.max(1,2,3);  // In the ARGUMENT: Will return 3
Math.max.apply(null, [1,2,3]); // in the ARRAY: Will also return 3

// Check 4: JavaScript .map(Number) method
var numbers = [4, 9, 16, 25];

function myFunction() {
  x = document.getElementById("demo")
  x.innerHTML = numbers.map(Number);
}

// Result: 4,9,16,25