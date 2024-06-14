var a; //Declare variable named a. 
a = 10; //Assign the integer value of 10 to variable a. 
b = 11; //Create variable b and assign a value to it. No previous declaration statement. 
var c = 12; //Declare variable c and assign it the value of 12 in one statement.
var d = null; // d is a null variable
firstName = "Moses";
lastName = "Onerhime";

fullName = firstName + " " + lastName; //Concatenate firstName, whitespace and lastName 
console.log(fullName);


console.log(d);

console.log(a); //Print the content of variable a 
console.log(b); //Print the content of variable b 
console.log(c); //Print the content of variable c
console.log("Hello World!"); 

var age = 17; var adult = (age > 20)? "Yes" : "No"; 
console.log(adult); //This should display the string "No"

var n = 0; 
while(n != 5){     
    n = Math.floor((Math.random() * 10));     
    console.log(n) 
}

var myExpressions = ["car", , 10, true];

console.log(myExpressions[1]);

var phones = { 
    make: 'Samsung', model: 'S7', cost: 500 
}
console.log('make' in phones); //Prints out true 
delete phones.make; //Delete property phones.make 
console.log('make' in phones); //Prints out false

var readlineSync = require('readline-sync'); //make the module just installed available for use in our program 
var answer; //declare variable named answer; 
do{ 
    //use question() function to read input and assign the value to answer 
    answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: '); 
    console.log('You asked me to '+ answer)
    if (answer == "exit") {
        console.log('Exiting...');
    } 
}while(answer != 'exit')


