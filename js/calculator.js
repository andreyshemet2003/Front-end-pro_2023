let OriginArray = prompt(`Уведіть кількість елементiв масиву:`);
      let array = [];
      for (i = 0, numIndex = 1; i < OriginArray; ++i, ++numIndex) {
        array[i] = prompt(`Елемент № ${numIndex}:`);
        console.log(`Елемент № ${numIndex}: ${array[i]}`);
      }
      console.log(`Отриманий масив: ${array}`)

      function sor(a, b) {
        return a - b; 
      }
      array.sort(sor);
      console.log(`Сортування масиву за зростанням: ${array}`);

      array.splice(1, 3);
      console.log(`Відсортований масив з видаленими елементами з 2 по 4: ${array}`);
