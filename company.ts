interface Employee {
    id: number;
    name: string;
    role: string;
}

const employees: Employee[] = [
    {id:1,name:"Alice",role:"Developer"},
    {id:2,name:"Bob",role:"Designer"},
    {id:3,name:"Charlie",role:"Manager"}
];

const employeeIntroduction: String[] =employees.map(emp => {
    return `ID : ${emp.id} - Name : ${emp.name} - Role : ${emp.role}`;
});

console.log(employeeIntroduction);