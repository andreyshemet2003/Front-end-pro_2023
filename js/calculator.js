const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
console.log(`Array: ${arr}`);
const arrPositive = arr.filter((item) => item > 0);
const result = arrPositive.reduce((sum, current) => sum + current,0);
console.log(
  `\nArray positive elements: ${arrPositive} \nLength array positive elements: ${arrPositive.length} \nSum of positive elements: ${result}`
);
// Part 2
let minElement = arr[0];
let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minElement) {
    minElement = arr[i];
    minIndex = i;
  }
}
console.log("Мінімальний елемент:", minElement);
console.log("Порядковий номер мінімального елемента:", minIndex);
//part 3
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxElement) {
    maxElement = arr[i];
    maxndex = i;
  }
}
let maxElement = arr[0];
let maxIndex = 0;
console.log("Максимальний елемент:", minElement);
console.log("Порядковий номер максимального елемента:", minIndex);
//part 4
let countNegative = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    countNegative++;
  }
}
console.log("Кількість негативних елементів:", countNegative);
//part 5
let product = 1;
let i = 0;

while (i < arr.length) {
  if (arr[i] > 0) {
    product *= arr[i];
  } 
  i++;
}
console.log("Добуток позитивних елементів:", product);