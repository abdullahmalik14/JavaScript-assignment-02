//Question no:01
var cityName = prompt("Enter your city name")
if(cityName.toLowerCase() === "karachi"){
    alert("Welcome to city of lights" )
}


//Question no:02
var gender = prompt("Enter yor Gender")
gender = gender.toLowerCase();
if(gender === "male"){
    alert("Good morning sir.")
}

else if(gender === "female"){
    alert("Good morning madam.")
}

// Question no:03

var color = prompt("Enter Traffic signal color")
var color = color.toLowerCase();
if(color = "red" ){
    alert("Must stop")
}
else if(color = "yellow"){
    alert("Ready to move")
}
else if(color = "green"){
    alert("Move now")
}

// Question no:04

var fuel = +prompt("Enter Remaining fuel");
if(fuel < 0.25){
    alert("Please refill the fuel in your car")
}

// Question no:05
//a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//Output of the result is true.
//b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
//Output of the result is true.
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//Output of the result is true.


//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//Output of the result is the cost equals.


//e. 
if (true){
alert("True");
}
if (false){
alert("false")
}

//f
if("car" < "cat"){
    alert("car is smaller than cat");
    }
    //Output of the result is car is smaller than cat.

//Question no:06
var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));

var totalMarks = parseFloat(prompt("Enter the total marks for each subject:"));
var totalObtainedMarks = subject1 + subject2 + subject3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else if (percentage >= 60) {
    grade = "C";
    remarks = "Satisfactory";
} else if (percentage <= 60) {
    grade = "Fail";
    remarks = "Sorry";
} 

document.write("Total Marks: " + (3 * totalMarks) + "<br>");
document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);



// //Question no:07
var secretNumber = Math.floor(7);
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1) {
    alert("Close enough to the correct answer.");
} 

//Question no:08
// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}

//Question no:09
var numberCheck =parseInt(prompt("Write any number i will tell you is this number is even or odd!" )) 

if (numberCheck % 2 === 0) {
    alert(numberCheck + " is an even number.");
}
// we use the modulo operator % to check if the number is even. 
// If the remainder when dividing the number by 2 is 0, it means the number is even. Otherwise, it's odd.

else {
    alert(numberCheck + " is an odd number.");
}

//Question no:10
var temperature = parseFloat(prompt("Enter the temperature in degrees Celsius:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is very cold outside.");
}

//Question no:11

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} 
else if (operation === "-") {
    result = firstNumber - secondNumber;
} 
else if (operation === "*") {
    result = firstNumber * secondNumber;
}
 else if (operation === "/") {
     result = firstNumber / secondNumber;
 }

else if (operation === "%") {
  result = firstNumber % secondNumber;
 }
 
alert("Result: " + result);
