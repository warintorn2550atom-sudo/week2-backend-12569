"use strict";
const mixed = ["Alice", 1, "Bob", 2, "Charlie", 3];
console.log(mixed.length); // Output: 6
for (let i = 0; i < 6; i++) {
    console.log(`Item at index ${i}: ${mixed[i]}`);
}
for (const item of mixed) {
    console.log(`Item: ${item}`);
}
