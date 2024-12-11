// alert("welecome to js")
// document.writeln("Welcome")
// console.log("Enter your name ");
// int number1;
// int number2,
var number1 = +prompt("enter first number? ");
var number2 = +prompt("enter second number? ");

sum = number1 + number2;
document.writeln("sum = " + sum + "<br>");

Subtraction = number1 - number2;
document.writeln("Subtraction = " + Subtraction + "<br>");

multiplication = number1 * number2;
document.writeln("multiplication = " + multiplication + "<br>");

divion = number1 / number2;
document.writeln("division = " + divion + "<br>");

modelus = number1 % number2;
document.writeln("modulus = " + modelus + "<br>");

document.writeln("power = " + Math.pow(number1, number2) + "<br>");

document.writeln(number1 + " is not equal " + number2 + ": " + (number1 != number2) + "<br>");
document.writeln(number1 + " is greater than " + number2 + ": " + (number1 > number2) + "<br>");
