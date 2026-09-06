 //Task 1 — For Loop

/*Print numbers from 1 to 10 using a for loop.

Expected:
1
2
3
...
10*/

/*for (let i=1 ; i<=10 ; i++){

    console.log (i);

}*/




//***Task 2 — Reverse Number

//Print numbers from 10 to 1 using a for loop.


/*for (let i=10 ; i>=1 ;i--){
    console.log(i);
}*/




//***Task 3 — Even Numbers

/*Print all even numbers from 1 to 20.

2
4
6
8
...
20*/

/*for(let i=1; i<=10; i++){
    console.log(2*i);
}*/





//***Task 4 — Odd Numbers
//Print all odd numbers from 1 to 20.

/*for(let i=1; i<=20;i+=2){
    console.log(i);

   
}*/





/*Task 5 — Multiplication Table


Get a number from the user.
Print its multiplication table from 1 to 10.
Example:

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50*/



/*let number=prompt("Enter your number:");
number=Number(number);
for(i=1;i<=10;i++){
    console.log( number  + "x" + i  +"=" + (number *i));
}*/


//While Loop

/*Task 6 — Countdown
Using while, print:

10
9
8
7
6
5
4
3
2
1*/

/*let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}*/



//Task 7 — Sum of Numbers
/*Using while, calculate:

1 + 2 + 3 + ... + 10

Expected:

55*/
/*let i=1;
let sum=0;
while(i<=10){
    sum=sum+i;
    i++;
}


console.log("Sum of numbers from 1 to 10:", sum);*/


//Do While

/*Task 8 — Print Numbers
Use do...while to print:

1
2
3
4
5*/
/*let i = 1;  

do {
    console.log(i);  
    i++;             
} while (i <= 5); */
 




//Task 9 — Do While Understanding
//What is the output?

/*let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);*/

//Important: Explain why the output occurs even though the condition is false.

//do while loop always execute the code block atleast once before checking the condition.So, even though the condition is false, the do block executes once before the condition is tested.


 //**For...of

/*Task 10 — String Characters

let name = "javascript";

Print every character using for...of.*/

/*let name="javascript";

for(let character of name){
    console.log(character);
}*/




/*Task 11 — Array Values

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

Use for...of to print every fruit.*/

/*let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for(let x of fruits){
    console.log(x);
}*/



//Task 12 — Student Names
/*Create an array of 5 student names.
Use for...of to print:

Student: Arun
Student: Priya
...*/


 /*let students=["Arun","Priya","Ram","Akash","Pavani"];
 for(let x of students){
    console.log(x);
 }*/




    //For...in
//Your notes use for...in for objects.
/*Task 13 — Employee Object
Create:

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

Use for...in to print:

name Arun
age 25
role Developer
city Chennai*/

/*let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee){
    console.log(key ,employee[key]);
}*/
 




/*Task 14 — Product Object
Create:

productName
price
brand
category
stock

Use for...in to print every key and value.
*/


/*let product={
    name: "Shoes",
    price:1000,
    brand:"Nike",
    category:"Foot Wear",
    stock:50,

};
 for(let key in product){
    console.log(key +": " + product[key]);
 }
*/




/* Functions
Task 15 — Simple Function
Create a function called welcome().
It should print:

Welcome to JavaScript

Call the function 3 times.*/


/*function welcome() {
  console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();*/



//Task 16 — Function With Parameter
/*Create:

function greet(name) {
    // code
}

Call:

greet("Naveen");
greet("Arun");
greet("Priya");

Expected:

Hello Naveen
Hello Arun
Hello Priya*/



/*function greet(name) {
    console.log("Hello Naveen");
    console.log("Hello Arun");
    console.log("Hello Priya");
}

greet();*/





//Task 17 — Multiple Parameters
/*Create a function:

student(name, age, department)

Print all three values.
Call it with 3 different students.
Your syllabus specifically covers parameters and arguments.*/

/*function student(name, age, department) {
    console.log(name, age, department);
}

student("priya", 24, "CSE");
student("ram", 25, "ECE");
student("pavani", 24, "EEE");*/




// Return
/*Task 18 — Addition Function
Create:

function add(a, b) {
    // return result
}

Call:

let result = add(10, 20);
console.log(result);

Expected:30*/

/*function add( a, b){
return a+b;

}
let result=add(10,20);
console.log(result);*/





/*Task 19 — Salary
Create:

function salary(amount) {
    return amount;
}

Store the returned value in a variable and print it*/


/*function salary(amount){
    return amount;
}
let result=salary(50000);
console.log(result);*/



/*Task 20 — Bonus Calculator
Create:

function bonus(salary, bonusAmount)

Return:

salary + bonusAmount

Example:

Salary = 50000
Bonus = 5000

Total = 55000*/



/*function bonus(salary, bonusAmount){
    return salary+bonusAmount;
}
let result=bonus(50000 ,5000);
console.log(result);//55000*/





/***Default Parameter
 
/*Task 21
Create:

function employee(name, role = "Developer") {
    // print name and role
}

Call:

employee("Arun");
employee("Priya", "Designer");

Find the output.
This follows the default-parameter concept in your notes.*/



/*function employee(name, role = "Developer"){
        console.log(name,role);
        
}
employee("Arun");
employee("Priya","Designer");*/



 //**Function Types
/*Task 22 — Named Function
Create a named function:

function square(number) {
    return number * number;
}

Call it with 5 different numbers.*/
/*
function square(number) {
    return number * number;
}

let result1 = square(2);
console.log(result1);

let result2 = square(3);
console.log(result2);

let result3 = square(4);
console.log(result3);

let result4 = square(5);
console.log(result4);

let result5 = square(6);
console.log(result5);*/



/*Task 23 — Anonymous Function
Create an anonymous function and store it in a variable.

let calculate = function(a, b) {
    return a + b;
};

Call it and print the result*/


/*let calculate = function(a, b) {
    return a + b;
};
let result=calculate(2,5);
console.log(result);*/




/*Task 24 — Arrow Function
Create an arrow function that accepts two numbers and returns their multiplication.

let multiply = (a, b) => {
    return a * b;
};*/


/*let multiply =(a,b)=> {
    return a * b;

}
let result=multiply(2,5);
console.log(result);*/



//***Scope
//Task 25 — Predict the Output

/*function test() {

    if (true) {

        var a = 10;//a is accessible, because var is function-scoped.
        let b = 20;//b is not accessible, because let is block scoped.
        const c = 30;// c is not accessible ,because const is block scoped

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(b);
    console.log(c);
}

test();*/



//**Hoisting
/*Task 26 — Predict

console.log(a);

var a = 10;

What happens?


var a;        // declaration moves up ,here 'var a'  is hoisted
console.log(a); // undefined
a = 10;       // assignment stays here
*/




/*Task 27
Predict:

console.log(b);

let b = 20;*/

/*// a exists, but you cannot access it yet
console.log(a); //  Referenceerror
let a = 10;
//let is hoisted but it is not initialized.Before the declaration line, a is in the temporarily dead zone*/




/*Task 28
Predict:

console.log(c);

const c = 30;// Reference Error

Then explain the difference between the three.

//The reason is that const is hoisted but remains in the Temporal Dead Zone (TDZ) until the declaration is reached.
// var is undefined
//in let  b is hoisted, but you cannot access it before the let declaration. it is reference error TDZ
//const same as like let reference error TDZ
*/




/*IIFE
Task 29 — Self Invoking Function
Create an IIFE that immediately prints:

Welcome to JavaScript

Then create another IIFE that accepts:

product
discount

and prints the discount message.
Your notes demonstrate an IIFE using product and discount parameters.*/

/*(function () {
    console.log("Welcome to JavaScript");
})();

(function (product,discount){
    console.log(`${product} has a ${discount}% discount`);
})("Laptop",20);*/





//Callback / Higher-Order Function
/*//Task 30
//Create:

function welcome() {
    console.log("Welcome");//this is the call back function why because it is passesd as an argument to the higher order function.
}

function execute(callback) {
    callback();//this is the higher order function because it takes a function as an argument.
}

execute(welcome);// this is the HOF becuase it takes a function as an argument and calls it inside the function body.

//Understand which function is the callback and which function is the higher-order function*/



 /*Generator Function
Task 31 — Cashback
Create a generator:

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

Create the generator object and print all values using for...of.
This matches the generator approach in your syllabus.*/

/*
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next ";
}

let result= cashback();
for(let value of result){
    console.log(value);
}
*/







/** *FINAL MINI PROJECT
Task 32 — Employee Management Console
Create a simple Employee Management System using only the concepts you've learned.***/

/*let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];

// 1. for...of
console.log("All Employees:");

for (let employee of employees) {
    console.log(employee);
}


// 2. for...in
console.log("\nKeys and Values:");

for (let employee of employees) {
    for (let key in employee) {
        console.log(key + ":", employee[key]);
    }
}


// 3 & 4. Function + Parameters
function displayEmployee(employee) {
    console.log("\nEmployee:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);
}

displayEmployee(employees[0]);


// 5. Return
function getSalary(employee) {
    return employee.salary;
}

let salary = getSalary(employees[0]);

console.log("\nSalary:", salary);


// 6. Condition
if (salary >= 40000) {
    console.log("Salary is 40000 or more");
} else {
    console.log("Salary is less than 40000");
}


// 7. Arrow Function
const annualSalary = (salary) => salary * 12;

console.log("Annual Salary:", annualSalary(salary));


// 8. Generator
function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("\nEmployee Benefits:");

for (let benefit of employeeBenefits()) {
    console.log(benefit);
}*/