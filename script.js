const bigNumber = 99347647438578549854589n
console.log(bigNumber);
// BigInt is a new primitive data type that allows you to represent whole numbers larger than 2^53 - 1.

const bigNumber2 = BigInt(99347647438578549854589)
console.log(bigNumber2);
// You can also create a BigInt from a string.

const name = "John"
const name2 = name
const name3 = name2

console.log(name3);