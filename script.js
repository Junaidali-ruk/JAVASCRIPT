// Working with BigInt
let largeNumber1 = 1234567890123456789012345678901234567890n;
console.log(largeNumber1);

let largeNumber2 = BigInt("1234567890123456789012345678901234567890");
console.log(largeNumber2);

// Playing with variable references
let color = "Blue";
let color2 = color;
let color3 = color2;
color = "Green";
console.log(color3); // Outputs "Blue"

// Working with object references
let person = {
  name: "Alice",
  age: 25,
  hobbies: {
    indoor: "Reading",
    outdoor: "Cycling",
  },
};

let person2 = person;

// Modifying person2 also affects person
person2.hobbies.indoor = "Painting";
console.log(person.hobbies.indoor); // Outputs "Painting"
console.log(person2.name = "Bob");  // Modifies and prints "Bob"
