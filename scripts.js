//1
// const number = +prompt("Enter value");
// const tenPercentOfNumber = number * 0.1;
// console.log("10% от введенного числа: ", tenPercentOfNumber);

//2
// const num1 = +prompt("Enter num1");
// const num2 = +prompt("Enter num2");
// let minValue;
// if (num1 > num2) {
//   minValue = num2;
// } else if (num2 > num1) {
//   minValue = num1;
// } else {
//   console.log("Entered Values are equal");
// }
// const minNumber = Math.min(num1, num2);
// console.log(minNumber);

//3
// let enteredValue = +prompt("Enter value");

// if (enteredValue > 100) {
//   console.log("Entered value is more than 100");
// } else if (enteredValue < 100) {
//   console.log("Entered value is less than 100");
// } else {
//   console.log("Entered value is equal to 100");
// }

//4
const userName = prompt(`Введите Ваше имя`);
const userAge = +prompt(`Введите Ваш возраст`);
if (userAge <= 18) {
  console.log(`Hi, ${userName} `);
} else {
  console.log(`Hello, ${userName} `);
}

