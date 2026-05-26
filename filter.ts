const ages: number[] = [5,10,12,18, 25, 30, 35, 40];

const adults = ages.filter((age:number) => {
    return age >= 18;
});

console.log(adults);