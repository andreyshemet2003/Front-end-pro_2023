//Завдання 1
const arr = [];
for (let i = 10; i <= 20; i++) {
  arr.push(i);
}
console.log(`1) ${arr.join(",")} \n `);

//Завдання 2
const arrSquare = [];
for (let i = 10; i <= 20; i++) {
  arrSquare.push(i ** 2);
}
console.log(`2) ${arrSquare.join(",")} \n `);
//Завдання 3
const arrSeven = [];
for (let i = 1; i <= 10; i++) {
  arrSqaure.push(i ** 2);
}
console.log(`3) ${arrSeven.join(",")} \n `);
//Завдання 4
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(`4) ${sum} \n `);
//Завдання 5
let productOfNumbers = 1;
for (let i = 15; i <= 35; i++) {
  productOfNumbers *= i;
}
console.log(`5) ${BigInt(productOfNumbers)} \n `);
//Завдання 6
let sumAverage = 0;
const n = 500;
for (let i = 1; i <= n; i++) {
  sumAverage += i;
}
const averageNumber = sumAverage / n;
console.log(`6) ${averageNumber} \n `);
//Завдання 7
let sumOfPairedNumbers = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumOfPairedNumbers += i;
  }
}
console.log(`7) ${sumOfPairedNumbers} \n `);
//Завдання 8
const arrMultipleOfThree = [];
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    arrMultipleOfThree.push(i);
  }
}
console.log(`8) ${arrMultipleOfThree.join(",")} \n `);