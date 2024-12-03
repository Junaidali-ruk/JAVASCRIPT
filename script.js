let bigNumber = 99347647438578549854589n;
console.log(bigNumber);
// BigInt is a new primitive data type that allows you to represent whole numbers larger than 2^53 - 1.

let bigNumber2 = BigInt(99347647438578549854589);
console.log(bigNumber2);
// You can also create a BigInt from a string.

let name = "John";
let name2 = name;
let name3 = name2;
name="junaid"
console.log(name3);

let obj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

let obj2 = obj;

console.log(obj2.name="junaid");