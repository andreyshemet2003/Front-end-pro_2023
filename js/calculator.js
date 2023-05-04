//part 1
/*Дано масив з елементами різних типів.
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/
const randomArray = [4, -6, "hello", 10, -265, "Alex", undefined, "30"];
function avg(arr) {
    let sum = 0, counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        sum += arr[i];
        count++;
      }
    }
    return counter === 0 ? 0 : sum / counter;
  }

  //part 2
/* Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
вказаної в змінній znak.Обидва числа і знак виходять від користувача.*/
let x = (prompt('Enter first number: '));
let znak = prompt('Enter operator: ');
let y = (prompt('Enter second number: '));

  function doMath(x, znak, y) {
    switch(znak) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        return x / y;
      case '%':
        return x % y;
      case '^':
        return x ** y;
      default:
        return 'Invalid operator';
    }
  }
  console.log(doMath(x, znak, y));
 
  // Task 3
/* Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач.
Значення всіх елементів всіх масивів задає користувач.*/
  function Matrix2(firstArr, secondArr) {
    let mainArray = [];
  
    for (let i = 0; i < firstArr; i++) {
      let subArray = [];
      for (let j = 0; j < secondArr; j++) {
        subArray.push(prompt(`Enter matrix size[${i}][${j}]`));
      }
      mainArray.push(subArray);
    }
  
    return mainArray;
  }
  let mainArray = Matrix2(3, 5);
  console.log(mainArray);

  // Task 4
/* Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач. */
  function func(str, chars) {
    return str.split('').filter(char => !chars.includes(char)).join('');
  }
  console.log(func(" hello world", ['l', 'd']));

  // Мне казалось я сойду с ума от количества логических операций в этом задании, спасите. Я вроде-бы понимаю , но всё равно не понимаю как правильно в голове запомнить действие "char => !chars.includes(char))"