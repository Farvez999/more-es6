const numbers = [12, 4, 6, 8]
const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDoubleDirectSimple = numbers.map(x => x * 2);
console.log(makeDouble);
console.log(makeDoubleDirect);
console.log(makeDoubleDirectSimple);