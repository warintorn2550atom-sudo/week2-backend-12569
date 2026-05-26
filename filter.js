"use strict";
const ages = [5, 10, 12, 18, 25, 30, 35, 40];
const adults = ages.filter((age) => {
    return age >= 18;
});
console.log(adults);
