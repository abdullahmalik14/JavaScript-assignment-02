//Question No :01
document.write("<h3>Question no:01</h3>")

var x  = 10;
document.write("Result:" + "<br>" + "The value of x is:" + " " + x+ "<br>");

document.write("................................... "+ "<br>"+ "<br>");

 ++x;
 document.write("The value of ++x is:"+ "  "+ x  + "<br>");
 document.write("Now the value of x is:"+ "  "+ x  + "<br>"+ "<br>");


 document.write("The value of x++ is:"+ "  "+ x  + "<br>");
 x++;
 document.write("Now the value of x is:"+ "  "+ x  + "<br>"+ "<br>");

 --x;
 document.write("The value of --x is:"+ "  "+ x  + "<br>");
 document.write("Now the value of x is:"+ "  "+ x  + "<br>"+ "<br>");

 document.write("The value of x-- is:"+ "  "+ x  + "<br>");
 x--;
 document.write("Now the value of x is:"+ "  "+ x  + "<br>"+ "<br>");

 //Question No :02
document.write("<h3>Question no:02</h3>")
var a = 2, b = 1;

--a;
document.write("Step 1 (--a):" + "<br>" + " a is " + a + "<br> " + "b is" + b +"<br>"+ "Result is" + a+"<br>"+"<br>");

 --a - --b;
 document.write("Step 2 ( --a - --b):" + "<br>" + " a is " + a + "<br> " + "b is" + b +"<br>"+ "Result is" + a+"<br>"+"<br>");


--a - --b + ++b;
document.write("Step 3 ( --a - --b + ++b):" + "<br>" + " a is " + a + "<br> " + "b is" + b +"<br>"+ "Result is" + a+"<br>"+"<br>");

 --a - --b + ++b + b--;
 document.write("Step 4 ( --a - --b + ++b + b--):" + "<br>" + " a is " + a + "<br> " + "b is" + b +"<br>"+ "Result is" + a+"<br>"+"<br>");

 //Question No :03

var userName = prompt("Please enter your name:");

if (userName !== null) {

  alert("Hello, " + userName + "! Welcome!");
} 

 //Question No :04

// Prompt the user to enter a number
var userInput = prompt("Enter a number:");

// Convert the user input to a number
var number = parseFloat(userInput);

// Check if the user entered a valid number
if (!isNaN(number)) {
    var table = "";
    
    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        table += number + " x " + i + " = " + result + "<br>";
    }
    
    document.write("<h2>Multiplication Table for " + number + "</h2>");
    document.write(table);
} else if (userInput === null) {
    var defaultTable = "";
    
    for (var i = 1; i <= 10; i++) {
        var result = 5 * i;
        defaultTable += "5 x " + i + " = " + result + "<br>";
    }
    
    document.write("<h2>Multiplication Table for 5 (Default)</h2>");
    document.write(defaultTable);
}
 else {
    document.write("<p>Invalid input. Please enter a valid number.</p>");
}



 //Question No :05
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarksPerSubject = 100;

var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));


var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalMarks = totalMarksPerSubject * 3; 
var percentage = (totalObtainedMarks / totalMarks) * 100;

// Step 6: Display the result in a table in the browser
document.write("<h1>Result</h1>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th>Total<th>" + totalMarks + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");










