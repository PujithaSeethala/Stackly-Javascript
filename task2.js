// Task 1 — var, let, const

/*Create three variables:

    var → student name
    let → student age
    const → college name*/

   //var studentName="Pujitha";
    //let studentAge=22;
    //const collegeName="SITE";

   //1.Print all three values.
   /*console.log(studentName);
    console.log(studentAge);
    console.log(collegeName);*/

   // 2.Change the var value.
   
   /*var studentName="Pujitha";
    studentName="Alekya";// changed the var value
    console.log(studentName);*/

   //3.Change the let value.

  /* let studentAge=22;
   studentAge=23;// Changed the let value //re-assignment is allowed.
    console.log(studentAge);*/

   //4.Try changing the const value and observe the error.

   /* const collegeName="SITE";
     collegeName="SRM";//changed the const value // re-declaration and re-assignment is not allowed
    console.log(collegeName);*/

    //5.Try redeclaring the var variable.

    /* var studentName="Pujitha";
     var studentName="Pavani";//re-decalred the "var" //Re-declaration is allowed for var
     console.log(studentName);*/

     //6.Try redeclaring the let variable and observe the error.

     /*let studentAge=24;
    let studentAge=25;//re-declared the "let" //Re-declaration is not allowed for let
    console.log(studentAge);*/


     /*Task 2 — User Information
    

    /*let userName=prompt("Enter your name:");
    let userAge=prompt("Enter your age:");
    let userCity=prompt("Enter your city:");

    console.log( "Name:", userName);
    console.log("Age:", userAge);
    console.log("City:", userCity);*/




     /*Task 3 — Welcome Message

     let userName=prompt("Enter your name:");
     alert("Welcome, " + userName + "!");*/



    // Task 4 — Age Calculator

    /*let birthYear =prompt("Enter your birth year:");
    let currentYear=prompt("Enter the current year:");
    let age = currentYear-birthYear ;  
    console.log("your age is:",age); */


   // ** Data Type Tasks**
  //Task 5 — Identify Data Types

  //Create variables containing:

  /*"Hello"
    100
    25.5
    true
    false
    undefined
    null

Use typeof and print each data type.

let str="Hello";
let num1=100;
let num2=25.5;
let bool1=true;
let bool2=false;
let und=undefined;
 let nll=null;

console.log("type of str:", typeof str);
console.log("type of num1:", typeof num1);
console.log("type of num2:", typeof num2);
console.log("type of bool1:", typeof bool1);
console.log("type of bool2:", typeof bool2);
console.log("type of und:", typeof und);
console.log("type of nll:", typeof nll);//null is an object in js,so typeof null will return "object".*/

//Task 6 — Student Data

//Create an object:

 /*const student={
   name:"Pujitha",
   age:22,
   city:"Hyderabad",
   qualification:"B.Tech",
   isStudent:true,
  }
   console.log( student);
   console.log(student.name);
   console.log(student.age);
   console.log(student.city);
   console.log(student.qualification);
   console.log(student.isStudent);*/

   //Task 7 — Fruit Array
    
  /* let arr=["Apple","Mango", "Banana", "Orange","Grapes","Papaya",];

   console.log(arr);
   console.log(arr[0]); 
   console.log(arr[1]);
   console.log(arr[5]);
   console.log(arr.length);
   console.log(arr.length-1);*/

   //*** Arithmetic Operator Tasks**

    //Task 8 — Basic Calculator

    /*let a=20;
    let b=5;

    let sum=a+b;
    let diff= a-b;
    let product=a*b;
    let quotient=a/b;
    let remainder=a%b;
    let exponential=a**b;

    console.log("sum of:",sum);
    console.log("difference of:",diff);
    console.log("product of:",product);
    console.log("quotient of:",quotient);
    console.log("remainder of:",remainder);
    console.log("exponential of:",exponential);*/

    /*Task 9 — Shopping Bill

    let shirtPrice=999;
    let pantPrice=1499;
    let shoesPrice=1999;
    let totalPrice=shirtPrice+pantPrice+shoesPrice;
    console.log("Total Price:",totalPrice);*/


    
//Task 10 — Simple Marks Calculation

/*let Tamil = 80;
let English = 75;
let Maths = 90;
let totalMarks= Tamil+English+Maths;
let averageMarks=totalMarks/3;
console.log("Total Marks:",totalMarks);
console.log("Average Marks:",averageMarks);*/

 //**Increment & Decrement Tasks**

//Task 11 — Post Increment

/*let a = 10;

let b = a++;

console.log(a);/11
console.log(b);/10*/
//a++ is post-increment, so b gets the original value 10, then a becomes 11.//

//Task 12 — Pre Increment


/*let a = 10;

let b = ++a;

console.log(a);//11
console.log(b);*///11
//++a is pre-increment, so a is increased from 10 to 11 before its value is assigned to b,so b also becomes 11.//



//Task 13 — Post Decrement


/*let a = 20;

let b = a--;

console.log(a);//19
console.log(b);//20*/ 

//Task 14 — Pre Decrement//


/*let a = 20;//19

let b = --a;//19

console.log(a);
console.log(b);*/


 //***Challenge Tasks***
//Task 15 — Find the Final Values

/*let a = 5;//7

let b = a++;//4

let c = ++a;//7
let d = b--;//5

console.log(a);
console.log(b);
console.log(c);
console.log(d);*/


//Task 16 — Assignment Operators


/*let num = 10;


num += 10;
console.log(num);
num -= 10;
console.log(num);
num *= 10;
console.log(num);
num /= 10;
console.log(num);
num %= 10;
console.log(num);
num **= 10;
console.log(num);*/


 //Task 17 — Mini Student Profile

 /*let studentName = "Pujitha";
 let age = 22;
 let city = "Hyderabad";
 let college = "XYZ College";

 array=["English","Maths","Science","Social","Hindi"];

 let studentProfile={
           name:studentName,
           age:age,
           city:city,
           college:college,

 } 

console.log("Student name:",studentProfile.name);
console.log("Student age:",studentProfile.age);
console.log(array[0]);
console.log(array[4]);
console.log("Total subjects:",array.length);
console.log("studentProfile:",studentProfile);*/

 //**Final Challenge — User + Calculator**

 /*let num1=prompt("Enter the first number:");
 let num2=prompt("Enter the second number:");
let sum =Number(num1) + Number(num2);
console.log("Sum of two numbers:",sum);
let diff=num1-num2;
console.log("Difference of two numbers:",diff);
let product=num1*num2;
console.log("Product of two numbers:",product);
let quotient=num1/num2;
console.log("Quotient of two numbers:",quotient);
let remainder=num1%num2;
console.log("Remainder of two numbers:",remainder);
let exponential=num1**num2;
console.log("Exponential of two numbers:",exponential);*/


   

  