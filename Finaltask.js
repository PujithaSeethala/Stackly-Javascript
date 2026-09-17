let employees = [];
let filteredEmployees = [];

// 1. API Requirement
// =======================
function fetchEmployees() {
    document.getElementById("employees").innerHTML = "Loading employees...";
    
    fetch("https://dummyjson.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data loaded successfully:", data);
            
            // Store users inside an array
            employees = data.users.map((user) => ({
                id: user.id,
                name: user.firstName + " " + user.lastName,
                age: user.age,
                email: user.email,
                department: empDepartment(user.company.department),
                phone: user.phone,
                image: user.image,
                salary: Math.floor(Math.random() * 50000) + 30000,
            }));

            //  Initialize filtered list so features work on page load
            filteredEmployees = [...employees];

            // Display all employees initially
            displayEmployees(employees);
            salaryDashboard(employees);
            updateEmployeeCount(employees);
        })
        .catch(error => {
            console.error(error);
            document.getElementById("employees").innerHTML = "Unable to load employee data.<br>Please Try again";
        })
        .finally(() => {
            console.log("API call finished");
        });
}

// Employee Department
function empDepartment(department) {
    if (!department) return "All";
    const value = department.toLowerCase();

    if (value.includes("engineering") || value.includes("technology") || value.includes("development")) {
        return "IT";
    }
    if (value.includes("human resources") || value.includes("hr")) {
        return "HR";
    }
    if (value.includes("finance") || value.includes("account")) {
        return "Finance";
    }
    if (value.includes("marketing")) {
        return "Marketing";
    }
    return "All";
}

// 2. Display employees dynamically
function displayEmployees(employeesToRender) {
    const container = document.getElementById("employees");
    container.innerHTML = ""; // clear old content

    if (employeesToRender.length === 0) {
        container.innerHTML = `<h3 style="color: white; width: 100%; text-align: center;">No employees found</h3>`;
        return;
    }

    employeesToRender.forEach(emp => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
         <img src="${emp.image}" alt="Employee">
         <h4>${emp.name}</h4>  
         <p>Age: ${emp.age}</p>
         <p>Email: ${emp.email}</p>
         <p>Department: ${emp.department}</p>
         <p>Phone: ${emp.phone}</p>
         <p>Salary: ₹${emp.salary}</p>
         <button class="delete-btn">Delete</button>
        `;
        
        // FIX: Synchronized delete buttons with your data engine array
        card.querySelector(".delete-btn").addEventListener("click", () => {
            deleteEmployee(emp.id);
        });

        container.appendChild(card);
    });
}

// 3. Search employees
// ========================
function searchEmployees() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    filteredEmployees = employees.filter((employee) => {
        return employee.name.toLowerCase().includes(query);
    });

    displayEmployees(filteredEmployees);
    salaryDashboard(filteredEmployees);
    updateEmployeeCount(filteredEmployees);
}

// 4. Department Filter
// =========================
function filteredDepartment(dept) {
    if (dept === "All") {
        filteredEmployees = [...employees];
    } else {
      
        filteredEmployees = employees.filter((employee) => {
            return employee.department === dept;
        });
    }
    displayEmployees(filteredEmployees);
    salaryDashboard(filteredEmployees);
    updateEmployeeCount(filteredEmployees);
}

// 5. Employee Count 
// ===================
function updateEmployeeCount(emp) {
    document.getElementById("employeeCount").innerText = `Employee Count: ${emp.length}`;
}

// 6. Add Employee
// =======================
function addEmployees() {
    const name = document.getElementById("empName").value.trim();
    const age = parseInt(document.getElementById("empAge").value);
    const email = document.getElementById("empEmail").value.trim();
    const dept = document.getElementById("empDept").value;
    const salary = parseInt(document.getElementById("empSalary").value);
    

    const errorEl = document.getElementById("errorMsg");
    if (errorEl) errorEl.innerText = "";

    // employee Validation checks
    if (name === "") {
        if (errorEl) errorEl.innerText = "Please enter employee name";
        return;
    }
    if (isNaN(age) || age <= 18) {
        if (errorEl) errorEl.innerText = "Age must be greater than 18";
        return;
    }
    if (email === "") {
        if (errorEl) errorEl.innerText = "Please enter employee email";
        return;
    }
    if (!dept || dept === "") {
        if (errorEl) errorEl.innerText = "Please select or enter an employee department";
        return;
    }

    const newEmp = {
        id: Date.now(), // Unique numeric key values
        name,
        age,
        email,
        department: dept,
        phone: "N/A",
        image: "https://via.placeholder.com/80",
        salary: isNaN(salary) ? 40000 : salary
    };

    // Add to Array state arrays
    employees.push(newEmp);
    filteredEmployees = [...employees];
    
    // Clear inputs and re-render dashboard viewports
    clearForm();
    updateEmployeeCount(filteredEmployees); 
    displayEmployees(filteredEmployees);
    salaryDashboard(filteredEmployees);
}

// 7. DeleteEmployee
// ========================
function deleteEmployee(id) {
    // Removed cleanly from arrays
    employees = employees.filter(emp => emp.id !== id);
    filteredEmployees = filteredEmployees.filter(emp => emp.id !== id);
    
    // display updated UI layout states
    displayEmployees(filteredEmployees);
    updateEmployeeCount(filteredEmployees);
    salaryDashboard(filteredEmployees);
}

// 8. Salary Dashboard
// ==========================
function salaryDashboard(emp) {
    const dashboardEl = document.getElementById("salaryDashboard");
    if (!dashboardEl) return;

    if (emp.length === 0) {
        dashboardEl.innerHTML = `
            Total Employees: 0<br><br>
            Total Salary: ₹0<br><br>
            Average Salary: ₹0<br><br>
            Highest Paid Employee: None
        `;
        return;
    }

    const total = emp.reduce((sum, currentEmp) => {
        return sum + Number(currentEmp.salary);
    }, 0);

    const avg = (total / emp.length).toFixed(2);

    
    const highest = emp.reduce((a, b) => {
        return (Number(b.salary) > Number(a.salary)) ? b : a;
    });

    dashboardEl.innerHTML = `
        Total Employees: ${emp.length}<br><br>
        Total Salary: ₹${total.toLocaleString('en-IN')}<br><br>
        Average Salary: ₹${Number(avg).toLocaleString('en-IN')}<br><br>
        Highest Paid Employee: ${highest.name} (₹${Number(highest.salary).toLocaleString('en-IN')})
    `;
}

// 9. Clear Form Text Fields
function clearForm() {
    document.getElementById("empName").value = "";
    document.getElementById("empAge").value = "";
    document.getElementById("empEmail").value = "";
    document.getElementById("empDept").value = "";
    document.getElementById("empSalary").value = "";
}

// 10. Sort employees
function sortEmployees(type) {
    if (filteredEmployees.length === 0) return;

    if (type === "name") {
        filteredEmployees.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "age") {
        filteredEmployees.sort((a, b) => a.age - b.age);
    } else if (type === "salary") {
        filteredEmployees.sort((a, b) => a.salary - b.salary);
    }
    displayEmployees(filteredEmployees);
}

// 11. Date and Time
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-IN', options);
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    document.getElementById("dateTime").innerText = `Today: ${dateStr} | Time: ${timeStr}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const searchField = document.getElementById("searchInput");
    if (searchField) {
        searchField.addEventListener("input", searchEmployees);
    }
});

// initalisation
updateDateTime();
setInterval(updateDateTime, 1000); 
fetchEmployees(); // 