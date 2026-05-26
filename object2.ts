type User = {
    name: string;
    age: number;
};

const user: User ={
    name: "Alice",
    age: 30
};

console.log(user);
console.log('Hello,${user.nsme}! You are ${user.age} years old.');

function greet(user: User): string {
    return 'Hello, ${user.name}! You are ${user.age} years old.';
}
console.log(greet(user)); // Output: Hello, Alice! You are 30 years old.

console.log(JSON.stringify(user, null, 2)); // Output: {"name": "Alice", "age":30}