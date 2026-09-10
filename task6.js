
/*//Task 1 — Student Result Analyzer//
//===============================================================================

//accept input from user//
let name= prompt("Enter Student Name:");
let department=prompt("Enter Department:");


let marks1=Number(prompt("Enter subject1 marks:"));
let marks2=Number(prompt("Enter subject2 marks:"));
let marks3=Number(prompt("Enter subject3 marks:"));
let marks4=Number(prompt("Enter subject4 marks:"));
let marks5=Number(prompt("Enter subject5 marks:"));

//Calculate total marks 
function calculateTotal(marks1,marks2,marks3,marks4,marks5 ){
    return marks1+marks2+marks3+marks4+marks5;
}

//Calculate average 
function calculateAverage(total){
    return total/5;
}

//Find pass/fail 
function checkResult(average){
        if(average>=50){
            return "PASS";
        }
        else{
             return "FAIL";
        }
}

//Assign grade:
function calculateGrade(average){
        if(average >= 90){
            return "A";
        }
        else if(average >= 70){
            return "B";
        }
        else if(average >= 60){
            return "C";
        }
        else if(average >= 50){
            return "D";
        }
        else {
            return "FAIL";
    }


}

//call functions
let total= calculateTotal(marks1,marks2,marks3,marks4,marks5);
let average=calculateAverage(total);
let result=checkResult(average);
let grade=calculateGrade(average);


// displaying the result
console.log("----- STUDENT RESULT -----");
console.log("Name:", name);
console.log("Department:",department);
console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Result:", result);
console.log("Grade:", grade);


*/

//===========================================================================


//Task 2 — Employee Salary Calculator
//=========================================

//create an employee object

/*let employee= {
        name: "Arun",
        role: "Developer",
        salary: 45000,
        experience: 2
}


function calculateSalary(employee){
    const salary = employee.salary;
    let bonusAmount=0;

    if(employee.experience>=2){
        bonusAmount= salary *0.10;
    }
    else if (employee.experience >=5){
        bonusAmount =salary *0.15 ;
    }
    
    const finalSalary = salary + bonusAmount;
    return finalSalary;

    
}
console.log(calculateSalary(employee));*/

//================================================================================

//Task 3 — Product Filter System
//====================================

/*let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];


//Get products above ₹2,000 

let newFilter=products.filter((product)=>{
    return product.price>2000
});
console.log(newFilter);//Gives ALL matching items



//Get only electronics 

let electronics=products.filter((product)=>{
    return product.category==="electronics"
});
console.log(electronics);//Gives ALL matching items



//Find the first product below ₹1,000 

let newFind=products.find((product)=>{
    return product.price<1000

});
console.log(newFind);//Gives the FIRST matching item


//Calculate total price of all products 

let total=products.reduce((sum,product)=>{
    return sum+product.price
},0);
console.log(total);//Combine ALL into ONE  result


//Check whether any product costs more than ₹50,000 

let result = products.some((product) => {
    return product.price > 50000;
});

console.log(result);//Does ATLEAST ONE match?


//Check whether every product has a price above ₹500 


 let newResult = products.every((product) => {
    return product.price > 500;
});

console.log(newResult);//Do All match?


*/


//=============================================================================

//Task 4 — Employee Management
//======================================

/*let employees=[
    {id: 101,name: "Kavin",role: "Frontend Developer",salary: 40000,},
    {id: 102,name: "Manik",role: "FullStack Developer",salary: 50000,},
    {id: 103,name: "Priya",role: "FullStack Developer",salary: 45000,},
    {id: 104,name: "Madhan",role:"Frontend Developer",salary: 50000,},
    {id: 105,name: "Madhavi",role:"Python Developer",salary: 40000,},
    {id: 106,name: "Kavya",role: "Frontend Developer",salary: 60000,},
]
//Display all employee names 

let names= employees.map((employees)=>{
    return employees.name;
});
console.log(names);// Map()is used to create a new array by transforming every element of an existing array.

//Display employees earning above ₹40,000 

let salary = employees.filter((employees)=>{
    return employees.salary >40000;
});
console.log(salary);


//Find employee with ID 103

let employeeId =employees.find((employees)=>{
    return employees.id===103;//to check each employee id we have to use "==="(strict equality).
});
console.log(employeeId);



//Calculate total salary 

let total=employees.reduce((sum,employees)=>{
    return sum + employees.salary;
},0);
console.log("TotalSalary:",total);


//Find highest-paid employee

let highestPaid=employees.reduce((highest,employees)=>{
    return employees.salary >highest.salary ? employees : highest;//ternary operator
});
console.log("Highest-PaidEmployee;",highestPaid);




//Sort employees from highest salary to lowest

let sortedEmployees= employees.sort((a,b)=>{
    return b.salary-a.salary;
});
console.log(sortedEmployees);

//Create a new array containing only employee names 

let newMap= employees.map((employees)=>{
    return employees.name;
});
console.log(newMap);*/


//==================================================================

//Task 5 — Shopping Cart
//================================

/*let cart = [
    {name: "Laptop", price: 50000, quantity: 1 },
    {name: "Mouse", price: 1000, quantity: 2 },
    {name: "Keyboard", price: 2000, quantity: 1 }
];


function calculateCart(cart){

   //Total cart value 

    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    // 10% discount if total > ₹50,000 
     let discount = 0;
        if(total>50000){ 
         discount=total * 0.10;
        }

       // Final payable amount 
       let finalAmount= total-discount;

    console.log("Total cart value: ₹" + total);
    console.log("Discount: ₹" + discount);
    console.log("Final payable amount: ₹" + finalAmount);
}

calculateCart(cart);*/


//=========================================================================================

//Task 6 — Student Search System
//============================================

/*let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

//Display all student names 

let names= students.map((students)=>{
    return students.name;
});
console.log(names);


//Display students who scored above 80

let student=students.filter((students)=>{
    return students.mark > 80;
});
console.log(student);

//Find student named "Priya"

let studentName =students.find((students)=>{
    return students.name==="Priya";
});
console.log(studentName);

//Calculate average mark 

let average = students.reduce((sum, student) => {
    return sum + student.mark;
}, 0) / students.length;

console.log(average);

//Check whether anyone failed 
 let failed =students.some((students)=>{
    return students.mark< 40;
 });
 console.log(failed);// some() checks whether at least one element in an array satisfies a condition.

//Check whether everyone scored above 40

let everyoneScore =students.every((students)=>{
    return students.mark> 40;
 });
 console.log(everyoneScore);// every()checks whether all elements in an array satisfy a condition.

//Sort students by marks 

let sortedstudents=students.sort((a,b)=>{
    return a.mark-b.mark;
});
console.log(sortedstudents);*/

//==========================================================================================================



//Task 7 — Array Transformation Challenge
//=============================================================

/*let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
 
//Create a new array containing numbers × 2 

let double= numbers.map((num)=>{
    return num*2;
});
console.log(double);

//Get only even numbers

let even=numbers.filter((numbers)=>{
    return numbers%2===0;
});
console.log("Even numbers:",even);

//Get numbers greater than 15 

let num=numbers.filter((numbers)=>{
    return numbers >15;
});
console.log(num);

//Find the first number greater than 20 

let num1=numbers.find((num1)=>{
    return num1 >20;
});
console.log(num1);

//Find total of all numbers

let total = numbers.reduce((sum, num) =>{
    return sum+ num;

},0);
    console.log(total);
    
//Check whether any number is greater than 40

let num2= numbers.some((num)=>{
    return num >40;

});
console.log(num2);

//Check whether every number is positive

let everyPositive = numbers.every((num)=>{
    return num > 0;
});
console.log(everyPositive);

//Sort from highest to lowest 

let descending = [...numbers].sort((a, b)=>{
    return b-a;
});

console.log( descending);*/


//====================================================================================================
//Task 8 — String Analyzer
//====================================================================================================

/*let sentence=prompt("enter a sentence");


console.log("Total characters:", sentence.length);
console.log("Uppercase sentence:", sentence.toUpperCase());
console.log("Lowercase sentence:", sentence.toLowerCase());
console.log('Contains "JavaScript":', sentence.includes("JavaScript"));
console.log("First character:", sentence.slice(0, 1));
console.log("Last character:", sentence.slice(-1));
console.log("Number of words:", sentence.split(" ").length);
console.log("Replace JavaScript with Python:", sentence.replace("JavaScript", "Python"));
console.log("Sentence as an array:", sentence.split(" "));*/


//=====================================================================================================
//Final Mini Project — Employee Dashboard
//=====================================================================================================
 /*let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


function employeeDashboard(){
   
//1.Employee List 
//=====================
//Display all employees. 

employees.forEach((emp) => {
    console.log("All Employees:",emp);
});

//2. Search
//==========================
//Search employee by name. 

let searchName = "Arun";
let emp=employees.filter((employee)=>{
    return employee.name === searchName;
});
console.log("Employee Name:",emp);

//3.Department Filter
//=============================
//Filter employees by department. 

 let department = "IT";
let emp1=employees.filter((employee)=>{
    return employee.department === department;
});
console.log("Employee department:",emp1);

//4. Salary Filter
//==============================
//Show employees earning more than ₹50,000.

let salary=employees.filter((employee)=>{
    return employee.salary >50000;
});
console.log("Employee salary:",salary);

// 5.Salary Calculation
//================================
//Calculate total company salary. 

let total= employees.reduce((total,employee)=>{
    return total +employee.salary;
},0);
console.log(total);

//6. Highest Salary
//==================================
let highestSalary = employees[0];

    employees.forEach(function(employee) {

        if (employee.salary > highestSalary.salary) {
            highestSalary = employee;
        }

    });
    console.log("Highestsalary:",highestSalary);

//7.Experience
//==================================================
//Find employees with more than 3 years' experience. 

let experienceResult = employees.filter(function(employee) {
        return employee.experience > 3;
    });

    console.log("Experience > 3 Years:", experienceResult);

//8. Sorting
//===================================================
//Sort employees by salary:

    //Low → High
    //===============================

    let lowToHigh = [...employees];

    lowToHigh.sort(function(a, b) {
        return a.salary - b.salary;
    });

    console.log("Salary Low → High:", lowToHigh);

    //High → Low 
    //===============================
    let highToLow = [...employees];

    highToLow.sort(function(a, b) {
        return a.salary - b.salary;
    });

    console.log("Salary High → Low:", highToLow);


//9.Statistics
//===============================================================
//Display:
//===========
let totalEmployees = employees.length;

    let averageSalary = total / totalEmployees;

    console.log("----- Statistics -----");
    console.log("Total Employees:", totalEmployees);
    console.log("Total Salary:", total);
    console.log("Highest Salary:", highestSalary.salary);
    console.log("Average Salary:", Math.round(averageSalary));

}
//Call the function
employeeDashboard();


*/



   