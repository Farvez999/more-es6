const numbers = [20, 11, 34, 45, 16, 10, 45];
const bigNumber = numbers.filter(number => number > 20)
const samallNumber = numbers.filter(n => n < 20)
const even = numbers.filter(n => n % 2 == 0)
console.log(bigNumber);
console.log(samallNumber);
console.log(even);