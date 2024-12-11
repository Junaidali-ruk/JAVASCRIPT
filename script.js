// let largeNumber1 = 1234567890123456789012345678901234567890n;
// console.log(largeNumber1);

// let largeNumber2 = BigInt("1234567890123456789012345678901234567890");
// console.log(largeNumber2);

// let color = "Blue";
// let color2 = color;
// let color3 = color2;
// color = "Green";
// console.log(color3);

// let person = {
//   name: "Alice",
//   age: 25,
//   hobbies: {
//     indoor: "Reading",
//     outdoor: "Cycling",
//   },
// };

// let person2 = person;

// person2.hobbies.indoor = "Painting";
// console.log(person.hobbies.indoor);
// console.log(person2.name = "junaid");

// const arr=[2,1,2,3,4,5,6,7]
// const random= Math.floor(Math.random()*arr.length)
// console.log(arr[0])

// const obj={
//   arr:[2,1,2,3,4,5,6,7]
// }
// console.log(obj.arr[2])

// const score =6.6

// const balance =Number(score)
// console.log(balance);

// const array1 = [1, "junaid", false];
// const random2 = Math.floor(Math.random() * array1.length);
// console.log(array1[random2]);
// console.log([1, 2] + [3, 4])

// const date=new Date()
// console.log(date.toLocaleDateString())
// console.log("iam a student",date.toLocaleDateString())

// const array = [typeof NaN,"junaid", "ali", "ruk"];
// array.shift(0);
// array.unshift(typeof NaN);
// console.log(array);

const animals = ["dog", "cat", "rat", "pig", "cow"];
animals.push("lion");
animals.forEach((animal, i) => {
  const arr = [i];
  arr.push(animal);
  console.log(arr);
});