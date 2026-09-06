//JavaScript Tasks — Beginner Level
//Task 1 — Variables


//Create variables using var, let, and const.

/*var name="Pujitha";
let age=20;
var city="Hyderabad";
let college="SRM college";

//Print all values.

 console.log("name:",name);
 console.log("age:",age);
 console.log("city:",city);
 console.log("college:",college);*/


 //Change the var value.

 /*var name="Priya";
 console.log("Updated name:",name);*/

 //Change the let value.

 /*let age=22;
 console.log("Updated age:",age);*/

 //Try changing the const value.

 /*const city="Bangalore";
 console.log("Updated city:",city);*/

//Try redeclaring each variable and observe what happens.

/*var name="Pujitha";
var name="Priya";
console.log("Redeclared name:",name);

let age=22;
let age=23;// it shows error y because  "let"  doesn't allow re-declaration
console.log("Redeclared age:",age);*/

/*const city="Hyderabad";
const city="vizag";// it shows error "const" doesn't allow re-declaration.
console.log("Redeclared city :vizag");*/





//Task 2 — Printing Statements

/*let name="Priya";
console.log(name);
alert("im " + name);
confirm("r u sure?");
prompt("enter your name");
document.writeln("priya");*/




//Task 3 — User Details

/*let Name= prompt("Enter your name");
let Age=prompt("Enter your age");
let City=prompt("Enter your city");
let Qualification=prompt("Enter your Qualification");
console.log("userName:",Name);
console.log("userAge:",Age);
console.log("userCity:",City);
console.log("userQualfication:",Qualification);*/


// Data Type Tasks
//Task 4 — Find Data Types

/*let str1="JavaScript";
let num1=100;
let num2=99.5;
let bool1=true;
let bool2=false;
let und=undefined;
let nll=null;
console.log("type of str1:", typeof str1);
console.log("type of num1:", typeof num1);
console.log("type of num2:", typeof num2);
console.log("type of bool1:", typeof bool1);
console.log("type of bool2:", typeof bool2);
console.log("type of und:", typeof und);
console.log("type of nll:", typeof nll);//null is an object in js,so typeof null will return "object".*/

//Task 5 — Student Array

/*let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:",students[0]);

console.log("Second student:",students[1]);

console.log("Last student:",students[4]);

console.log("Total students:",students.length);*/


//Task 6 — Employee Object

/*let Employee={
            name:"Priya",
            age:"29",
            role:"Python Full Stack Developer" ,
            skills:["HTML","CSS","JavaScript","React JS"],
            isWorking:"true",
            qualification:["B.tech","M.tech"],
        }




console.log("Employee name:",Employee.name);
console.log("Age:",Employee.age);
console.log("Role:",Employee.role);
console.log("First skill:",Employee.skills[0]);
console.log("Last qualification:",Employee.qualification[1]);
console.log("Working status:",Employee.isWorking);*/

 //**Arithmetic Operator Tasks**

//Task 7 — Calculator

/*let a = 20;
let b = 5;


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

    
//Task 8 — Shopping Bill


/*let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let Bag = 799;

let totalPrice= Shirt+Pant+Shoes+Bag;
 console.log("Total Price:",totalPrice);*/



 //Task 9 — Increment & Decrement

 //A

/*let a = 10;

let b = a++;

console.log(a);//11
console.log(b);//10*/

//B

/*let a = 10;

let b = ++a;

console.log(a);//11
console.log(b);//11*/

//C

/*let a = 10;

let b = a--;

console.log(a);//9
console.log(b);//10*/

//D

/*let a = 10;

let b = --a;

console.log(a);//9
console.log(b);//9*/



//Assignment Operator Tasks

//Task 10

/*let num = 10;

num=num + 5;
console.log("num:",num);//10+5=15
num=num-3;
console.log("num:",num);//15-3=12
num=num*2;
console.log("num:",num);//12*2=24
num=num/4;
console.log("num:",num);//24/4=6
num=num%3;
console.log("num:",num);//6%3=0;
num=num**2;
console.log("num:",num);//0**2=0*/



 //**Comparison Operator Tasks**

//Task 11 — Find Output

/*console.log(10 > 5);//true
console.log(10 < 5);//false
console.log(10 >= 10);//true
console.log(10 <= 9);//true

console.log(5 == "5");//false //loose equality operator checks only value not type
console.log(5 === "5");//false //strict equality operator checks both value and type

console.log(10 != "10");//false //loose inequality operator checks only value not type
console.log(10 !== "10");//true //strict inequality operator checks both value and type*/


//** Logical Operator Tasks**


//Task 12 — AND

/*console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false



//Task 13 — OR

console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false



//Task 14 — NOT

console.log(!true);//false
console.log(!false);//true
console.log(!(5 > 10));//true
console.log(!(10 > 5));//false*/


//Task 15 — Combination

/* console.log(5 == "5" && !(5 === 5) || 6 > 7);//true && !(true)|| false//    // true && false||false//    // false || false//    //false

console.log(10 > 5 && 8 < 12 || 4 === "4");// true && true || false //     // true || false//  // true

console.log(7 === 7 && 10 != "10" || 5 >= 5);// true && false || true //   // false || true // // true

console.log(15 < 10 || 20 > 15 && 5 == "5");// false || true && true //   //true && true //  //true */



//Ternary Operator Tasks

//Task 16 — Voting

/*let age = 20;

let result= age>=18?"Eligible to Vote":"Not Eligible";
console.log(result);*/




//Task 17 — Password

/*let password =true;

let result=password=true? "Login successful":"Wrong password";
console.log(result);*/




//**Concatenation & Template String**

//Task 18 — User Introduction

/*let name = "Naveen";
let age = 25;
let city = "Trichy";

// concatenation
//let result="My name is "+ name +". I am "  + age + " years old. I live in " + city + ".";
    console.log(result);

// template literals

let result = `My name is ${name}. I am ${age} years old. I live in ${city}.`;

console.log(result);*/




//**Type Casting Tasks**

//Task 19 — String Conversion

//Use String() to convert:

/*let num=100;
let bool=true;
let und=undefined;
let nll=null;
let array=[1, 2];

let strNum= String(num);
console.log(typeof(strNum));//string

let strBool= String(bool);
console.log(typeof(strBool));//string

let strUnd= String(und);
console.log(typeof(strUnd));//string

let strNll= String(null);
console.log(typeof(strNll));//string

let strArray= String(array);
console.log(typeof(strArray));//string*/



//Task 20 — Number Conversion


/*console.log(Number());//0
console.log(Number(""));//0
console.log(Number("123"));//123
console.log(Number("a1"));//NaN
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(undefined));//NaN
console.log(Number(null));//0*/



//Task 21 — Boolean Conversion

/*console.log(Boolean());//false
console.log(Boolean(""));//false
console.log(Boolean("hello"));//true
console.log(Boolean(123));//true
console.log(Boolean(true));//true
console.log(Boolean(false));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean([]));//true
console.log(Boolean({}));//true*/



 //**Flow Control Tasks**


//Task 22 — Voting Eligibility


/*Get age using prompt().

18 or above → "You can vote"
Below 18   → "You can't vote"

Use:

if
else*/

/*let age;
let userAge= prompt("enter user age");
if(userAge >= 18)
{
   console.log("you can vote");
}
else
{
    console.log("you can't vote");
}
*/





//Task 23 — Positive or Negative

/*Get a number from the user.


check:

Positive
Negative
Zero

Use if / else if / else.*/


/*let userN=3;// can use prompt also without assigning a value  directly to  the variable.

if(userN>0){
    console.log("positive");

}
else if(userN<0){
    console.log("negative");
}
else{
    console.log("zero");
}*/




//Task 24 — Grade System

/*Get marks from the user.

90–100 → A Grade
80–89  → B Grade
70–79  → C Grade
60–69  → D Grade
Below 60 → Fail

Use if / else if / else.



let marks=90;

if( marks>=90){
    console.log("A Grade");
}

else if( marks>= 80){
    console.log("B Grade");
}

else if(marks>=70){
    console.log("C Grade");
}
else if(marks>=60){
    console.log("D grade");
}
else{
    console.log("Fail");
}
*/





//Nested If Task

/*Task 25 — Job Eligibility
Get:

Age
Height
Weight

Rules:

Age >= 18
Height >= 160
Weight >= 60

If all conditions are satisfied:

"Congratulations! You are selected"*/

/*let age=25;
let height=165;
let weight=70;
if(age >=18){


} if (height>=160){

        }if(weight >=70){
             console.log("Congratulations! you are selected");
        }
        else{
            console.log("Sorry , you are not selected");
        }
*/


    



//**Switch Tasks

//Task 26 — Traffic Light

/*Get a traffic light color:

red
yellow
green

Use switch.

red    → Stop
yellow → Ready
green  → Go*/

/*let light ="red";

switch (light){
    case "red":
        console.log("Stop! if it is red");
        break;
    case "yellow":
        console.log("Ready ! if it is yellow");
        break;
    
    case "green":
        console.log("Go! if it is green");
        break;
     default:
    console.log("Invalid light color");
}
*/






/*Task 27 — Day
Create:

let day = 1;

Use switch:

1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
7 → Sunday

Add:

default → Invalid day
*/

/*let day = 2;

switch(day){
    
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday"); 
        break;
    case 7:
        console.log("Sunday"); 
        break;  
    default :
        console.log("Invalid day") ;         

}*/






//FINAL MINI PROJECT
//Task 28 — Student Result System

/*let Name=prompt("Enter user Name");
console.log("Name:",Name);
let Age=prompt("Enter user age");
console.log("Age:",Age);
let City=prompt("Enter user city");
console.log("City:",City);

let Tamil=80;
let English=90;
let Maths=100;

let totalMarks=Tamil+English+Maths;
console.log("total marks:",totalMarks);
let averageMarks= totalMarks/3;
console.log("Average marks:",averageMarks);

let Grade;
if (averageMarks >= 90){
    Grade="Grade A";
    console.log("Grade A");
}
else if(averageMarks >= 80){
    Grade="Grade B";
      console.log("Grade B");
}
else if(averageMarks >= 70){
    Grade="Grade C";
   console.log("Grade C");

}
else if(averageMarks >=60 ){
    Grade="Grade D";
    console.log("Grade D");

}
else{
    Grade="Grade Fail";
    console.log("Grade Fail");
}


let result= Age>=18?"Eligible to Vote":"Not Eligible";
console.log(result);

let display=`My name is ${Name}. I'm ${Age} years old. I live in ${City}, I scored ${totalMarks} marks, and my percentage is ${averageMarks}, and I'm secured with ${Grade} and I'm ${result}`;
console.log(display);
*/








 

    
