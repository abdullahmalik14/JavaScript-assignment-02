//Chapter 6 (Math Expression II)
//Question No : 01


//You can use the increment operator ++ as a shorter form of x = x + 1;
// Here are the two legal expressions using the increment operator:
//  x++;  Post-increment operator
//  ++x;  Pre-increment operator


//Question No : 02

var x = 100;
x = x-1;
console.log(x)

//Question No : 03

var x = 50;
var y = x++;
console.log(y);

//The output of the value y is 50.

//Question No : 04
var y = 50;
var z = --y;
console.log(z);

//The output of the value z is 49.

//Question No : 05

//You can decrement num and assign its original
// value to newNum in a single statement using the post-decrement operator --. Here's how you can do it:
var num = 5;
var newNum = num--;


//Question No : 06

// You can add 1 to a variable and assign
//  its original value to another variable using pre-increment in a single statement like this:

var originalValue = 5; 
var newValue = ++originalValue;
console.log(newValue);

//Question No : 07

var numberValue = 10;
++numberValue;
alert("The new value is"+ " "+numberValue )

//Chapter 7 (Math Expression III)
//Question No : 01

var calculatedNum = 2 + (2 * 6);
console.log(calculatedNum);
//The output of the reult is 14.

//Question No : 02
var calculatedNum = (2 + 2) * 6;
console.log(calculatedNum);
//The output of the reult is 24.

//Question No : 03
var calculatedNum = (2 + 2) * (4 + 2);
console.log(calculatedNum);
//The output of the reult is 24.

//Question No : 04
var calculatedNum = ((2 + 2) * 4) + 2;
console.log(calculatedNum);
//The output of the reult is 18.

//Question No : 05
var costResult = ((2 + 2) * (4 + 10));
console.log(costResult);
//The output of the reult is 56.

//Question No : 06
var unitResult = (2 + 2 * 4 + 10 );
console.log(unitResult);
//The output of the reult is 20.

//Question No : 06
var pressureResult = (4 /( 2 * 4));
console.log(pressureResult);
//In this way the pressure of the reult is 0.5.

var pressureResult = ((4 /2) * 4);
console.log(pressureResult);
//In this way the pressure of the reult is 8.
//So as you say in the question the result of the pressure should be 5 but it is not possible.


//Chapter 8 (Concatenating Text Strings)
//Question No : 01

var num = "2" + "2";
console.log(num);
//The output of the reult is 22.

//Question No : 02
var message = ("Hello," + "Dolly");
alert(message);
//The output of the reult is Hello,Dolly


//Question No : 03
alert("33" + 3);
//The output of the reult is 33.

//Question No : 04
alert(
    "Pakistan" + " " + "Zindabad"
);

//Question No : 05
var Concatenating = "My age is" + " " + 21;
console.log(Concatenating);
//The output of the reult is "My age is 21"

//Question No : 06
var a = "My favourite country is"+" ";
var b = "Saudi Arabia";
var c = a + b;
console.log(c);

//Chapter 9 (Prompts)
//Question No : 01
var name= prompt("Enter first name");

//Question No : 02
var country = prompt("Country?", "China");

//Question No : 03
var yourName = prompt("Enter Your Name");

//Question No : 04
var rollNumber = prompt("Enter your Roll Number","1000234");

//Question No : 05
var message = "Please enter your favorite color:";
var defaultMsg = "Blue";

var userResponse = prompt(message, defaultMsg);

// //Question No : 06

var message = "Please enter your age:";
var defaultAge = "30"; // Default response as a string

var userResponse = prompt(message, defaultAge);

alert("You entered: " + userResponse);


// //Chapter 10 (if statments)
//Question No : 01
var city = "Karachi"
if (city === "Karachi") {
console.log("The City OF Lights")
}


//Question No : 02
var x = parseInt(10);
var y = parseInt(10);
if (x === y) {
    var z = prompt("Enter the value of z?");
  }

//Question No : 03

var zipCode = 10010;
if (zipCode===10010){
  alert("Karachi")
}
else{
  alert("Please write correct city")
}
  
//Question No : 04

var x = 100; 
if (x === 100) {
  x = 1; 
}
console.log(x);
 // This will print 1 if the condition was met, otherwise it will print the original value (100)
//The output of the result is 1

// Chapter 11 (Comparison Operators)
//Question No : 01
// if (variable1 !== variable2) {

// }

// //Question No : 02
// if (variable1 >= variable2) {

// }

//Question No : 03
var x = 5;
if(x !== 10){
  x = 15
  console.log(x);
}


//Question No : 04

var x = 10;
var y = 15;
 if(x !== y){
  alert("Congratulations")
 }


 //Question No : 05
var yourFirstName = prompt("Please enter your first name:");

if (yourFirstName !== "John") {
  alert("No match");
}
