//task1

function getTimeout(time) {
  const timeDelay = parseInt(time);

  if (time.includes("second") || time.includes("seconds")) {
    return timeDelay * 1000;
  } else if (time.includes("minute") || time.includes("minutes")) {
    return timeDelay * 60 * 1000;
  } else if (time.includes("hour") || time.includes("hours")) {
    return timeDelay * 60 * 60 * 1000;
  }
}

function sayHi(name) {
  console.log(`Hi, my dear ${name}!`);
}

function welcomeUser(name, time) {
  setTimeout(sayHi, getTimeout(time), name);
}

welcomeUser("Jane", "5 seconds");

//Task2
function changeJsonObj(obj) {
    try {
      return JSON.parse(obj);
    } catch {
      return JSON.stringify(obj);
    }
  }
  
  const firstObj = `{"name": "Jane", "age": 25 }`;
  const secondObj = { name: "Kate", age: 25 };
  
  console.log(changeJsonObj(firstObj));
  console.log(changeJsonObj(secondObj));

  //  Task 3

function findJsonString(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (err) {
    return false;
  }
}

const falseString = "Hi, my dear Jane";
const trueString = `{"name": "Jane","age" : 25}`;

console.log(findJsonString(falseString));
console.log(findJsonString(trueString));