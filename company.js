"use strict";
const employees = [{ id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
    { id: 3, name: "Charlie", role: "Manager" }];
const employeeIntroduction = employees.map(emp => `Hello, I am ${emp.name}, and I am a ${emp.role}`);
console.log(employeeIntroduction);
