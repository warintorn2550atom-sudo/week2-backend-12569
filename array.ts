const names: string[] = ["Alice", "Bob", "Charlie", "David"];
// const numbers: number[] = [1, 2, 3, 4, 5];
// const mixed: (string | number)[] = ["Alice", 1, "Bob", 2, "Charlie", 3];

for (const name of names) {
  console.log(`Name: ${name}`);
}
for (let i = 0; i < names.length; i++) {
  console.log(`Name at index ${i}: ${names[i]}`);
}
console.log(names); // Output: ["Alice", "Bob", "Charlie", "David"]
console.log(names[0]); // Output: Alice
console.log(names.length); // Output: 4