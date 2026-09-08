 //Variables & Data Types 


 //Q1: What is the difference between var, let, and const?

 /*var:
 -> Re-declaration and Re-assignment both are allowed.
 ->declares variables with function scope or global scope.
 ->Hoisted to the top of its scope, initialized as undefined.

Example:
    var x = 10;
    var x = 20; // Redeclaration allowed
    x = 30;     // Reassignment allowed
    console.log(x); // 30

let:
->cannot be re-declared in the same scope,but can be re-assigned.
->declares variable with block scope.
->Hoisted but not initialised(TDZ applies).

Example:
    let y = 10;
    // let y = 20;//Error: Redeclaration not allowed
    y = 25; //  Reassignment allowed
    console.log(y); // 25

const:
->Must be initialised at declaration.
->cannot be re-declared and re-assigned.
->Declares variables with block scope.

    const pi = 3.14;
    pi = 3.14159; // Error: Assignment to constant variable.*/






//Q2: Can you re-declare a variable with var? What about let and const?  

 //var: 
 /*var a=10;
 var a=20;//allowed
 console.log(a);//20
 we can re-declare a variable in the same scope.*/


 //let :
  /*let a=10;
  let a=20;//error//identifier a has been already declared.
  console.log(a);*/


  //const:
 /* const a=10;
  const a=20;//error//identifier a has been already declared
  console.log(a);
*/




//Q3: What is the output of this code?
//```javascript
/*var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
z = 30;

console.log(x, y, z);
//```

-> x is declared with var and initialised to 5.
-> y is declared with let and initialised to 10.
-> z is declared with const and initialised to 15.

x=20;//allowed// x changes from 5 to 20.
y=25;//allowed // y changes from 10 to 25.
z=30;//error//we cannot reassign a const,once they're fixed. //here it throws a type error.*/






 //Q4: What is the difference between declaring and initializing a variable?


 /*//declaration:

 declaration givng a variable name.

 //initialization:

 giving that variable its first value*/







 //Q5: What will be the output?
//```javascript
/*let a;
console.log(a);//undefined
 //Declaring a variable without assigning a value makes it undefined.

*/







//Q6: What is hoisting? Give an example.


/*Hoisting is a js feature where variable and function declarations are moved to the top of their scope before the code is executed.

console.log(x);
var x = 10;//undefined*/







//Q7: What is the difference between null and undefined?


/*undefined: A variable is declared but no value is assigned to it.
null: null means no value or empty value(intentionally) 

let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
/
*/







 //Q8: What will be the output?
//```javascript
/*console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof []);//object//arrays are objects
console.log(typeof {});//object */






//operators

//Q9: What is the difference between == and ===?

/* loose equality(==): It compares values after type conversion when it necessary.

 ex: 5=="5";// true

 strict equality(===):It compares both values and type without type conversion.

 ex: 5==="5";//false
*/







//Q10: What is the difference between ++i and i++?


/*Pre-incerement(++i):Increments first, then returns the value.

    Ex:
        let i = 5;

        console.log(++i); // 6
        console.log(i);   // 6


Post-increment(i++):returns the value first,then increments.

    Ex:  let i = 5;

         console.log(i++); // 5
         console.log(i);   // 6

         */





// Q11: What will be the output?


//```javascript
/*let x = 10;
let y = "5";
console.log(x + y);//105
console.log(x - y);//5// here string converts into number
console.log(x * y);//50
console.log(x / y);//2*/






//Q12: What are logical operators? Explain with examples.

/*Logical operators are used to combine multiple conditions or operations and return a boolean value (true or false) .

There are 3 logical  operators in Js:

1.&&(logical AND): returns true if both operands are true, otherwise returns false.
Ex: true && true //true
    true && false //false
    false && true //false
    false && false //false

    5 > 2 && 10 > 5//true

2.||(logical OR): returns true if at least one of the operands is true, otherwise returns false.
Ex: true || true //true
    true || false //true
    false || true //true
    false || false //false

    5 > 10 || 10 > 5//true

3.!(logical NOT): returns the opposite boolean value of the operand.
Ex: !true //false
    !false //true

    !(5 > 2)//false*/






//Q13: What will be the output?
//```javascript
/*console.log(5 > 3 && 10 > 5);//true
console.log(5 > 10 || 10 > 5);//true
console.log(!(5 > 3));//false
*/

//```




//Q14: What is the ternary operator? Give an example.
/*
The ternary operator is a conditional operator that is used to make a decision between two values. 
It is a short form of the if-else statement.

Ex: let age=18;
let message= age>18 ?"you are eligible to vote":"you are not eligible to vote";
console.log(message);//you are not eligible to vote.*/




 /***Type Casting 
  
  /*Q15: What is the difference between implicit and explicit type casting?

  Implicit type casting (type coercion):

  It is automatically performed by the compiler when converting one data type into another.

  EX: let x = 5;
       let y = "10";
       let z= x+y; // Implicit type casting from number to string
       console.log(z);//"510"




  Explicit type casting (type conversion):
  
  It is manually performed by the programmer using a cast operator or a function to convert one data type into another.

    EX: let x = 5;
        let y = parseInt("10"); // Explicit type casting from string to number
        let z = x + y; // 15
        console.log(z); // 15*/





    //Q16: What will be the output?
    //``javascript

    /*console.log(Number("123"));//123
    console.log(Number("hello"));//NaN
    console.log(Number(true));//1
    console.log(Number(false));//0
    console.log(Boolean(0));//false
    console.log(Boolean("hello"));//true
    ``*/





   // Q17: What is NaN? Give an example.

    //NaN stands for "Not  a Number".It is a special value used to represent a result that is not a valid numerical value.

    /*Ex: let x="hello";
       let y=Number(x);//NaN
       console.log(y);//NaN*/






       //Conditional Statements 
        
        //Q18: What is the difference between if-else and switch?

        /*if-else:

        ->if-else is used to make decisions based on a condition.
        ->Can use relational and logical operators.
        ->used for complex conditions.

        ex: 
                let age=20;
            if (age >= 18) {
                console.log("Eligible to vote");
            } else {
                console.log("Not eligible to vote");
            }

            switch:

            ->switch is a decision-making statement used to execute different code based on the value of an expression.
            -> it is used to check multiple fixed values and uses case values for comparison.

            Ex:
                    let day = 1;

                    switch (day) {
                        case 1:
                            console.log("Monday");
                            break;
                        case 2:
                            console.log("Tuesday");
                            break;
                        default:
                            console.log("Invalid day");
                    }
*/








//Q19: What will be the output?

    /*```javascript
    let age = 20;
    if(age >= 18) {
        console.log("Adult");//ouput: Adult
    } else {
        console.log("Minor");
    }
    */







//Q20: What is nested if? Give an example.

//->if statement placed inside another if statement. 
//->It allows you to check a second condition only if the first condition is true.

        /*let marks = 85;

        if (marks >= 50) {
            if (marks >= 75) {
                console.log("Passed with distinction.");
            } else {
                console.log("Passed.");
            }
        } else {
            console.log("Failed.");
        }
*/






// Q21: Write a program to check if a number is even or odd using ternary operator.

   /* let num = 7;

    let result = (num % 2 === 0) ? "Even" : "Odd";

    console.log(result);//odd */




 //Loops

// Q22: What is the difference between while and do-while?

   /* while loop: Condition is checked before executing the loop body. So, it may execute zero times.

    ex: let i = 5;

        while (i < 5) {
        console.log(i);
        i++;
        }

    do-while loop: Condition is checked after executing the loop body. So, it executes at least once.

    ex: let i = 5;

        do {
        console.log(i);
        i++;
        } while (i < 5);
*/







//Q23: What will be the output?
/*```javascript
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
output:
1
2
3
4
5
*/






//Q24: What is the difference between for-of and for-in?

//for-of:

//It is used to iterate over the values of an iterable, such as an array or string.

//Ex:
/*let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
*/

//for-in:

//The fo-in loop is used to iterate over the keys (property names) of an object.

/*Ex:
let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key, student[key]);
}
*/







 //Q25: Write a program to find sum of numbers from 1 to 100.

 /*let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum =", sum);//Sum=5050*/






//Arrays


/*Q26: What is the difference between slice and splice?

/*slice:

->Does not modify the original array.
->Returns a new array.
->Used to extract elements.
->Syntax: array.slice(start, end)
*/
//Ex:
/*let arr = [10, 20, 30, 40, 50];

let a = arr.slice(1, 3);
console.log(a);   // [20, 30]
console.log(arr); // [10, 20, 30, 40, 50]//slice() does not change the original array.*/

//splice:
/*->Modifies the original array.
->Returns the removed elements.
->	Used to add, remove, or replace elements.
->	Syntax: array.splice(start, deleteCount, items...)*/

//ex:
/*let arr = [10, 20, 30, 40, 50];

let a = arr.splice(1, 2);
console.log(a);   // [20, 30]
console.log(arr); // [10, 40, 50]//splice() changes the original array.*/




//Q27: What will be the output?
//```javascript

/*let arr = [1, 2, 3];
arr.push(4);//[1, 2, 3, 4]
arr.pop();//[1, 2, 3]
arr.unshift(0);//[0, 1, 2, 3]
arr.shift();//[1, 2, 3]
console.log(arr);
output:Array(3) [ 1, 2, 3 ]*/
//```




//Functions 


//Q28: What is the difference between function declaration and function expression?

   // Function Declaration:

   //-> A function is declared using the function keyword with a name.

   //Ex:

    /*function add(a, b) {
        return a + b;
    }

    console.log(add(2, 3)); // 5*/

    //->Function declarations are hoisted, so we can call them before they are defined.

   //Ex:
    /*console.log(add(2, 3)); // 5

        function add(a, b) {
            return a + b;
        }*/


   // Function Expression:

   //-> A function is assigned to a variable.

   // Ex:
    /*const add = function(a, b) {
        return a + b;
    };

    console.log(add(2, 3)); // 5*/

   // -> Function expressions are not usable before the assignment.

    /*console.log(add(2, 3)); // Error

    const add = function(a, b) {
        return a + b;
    };
*/








//Q29: What is an arrow function? Give an example.


 // ->An arrow function is a shorter way to write a function in JavaScript. It uses the => symbol.

//Example:

    /*const add = (a, b) => {
        return a + b;
    };

    console.log(add(5, 3)); // 8*/

//Short form:
/*const add = (a, b) => a + b;
 console.log(add(5, 3));*///8

//Here, add is an arrow function that takes two parameters and returns their sum.






//Q30: What will be the output?
//```javascript
/*function greet() {
    return "Hello";
}
let message = greet();
console.log(message);//Hello*/
//```



        