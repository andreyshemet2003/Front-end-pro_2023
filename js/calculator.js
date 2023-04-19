const year = prompt("Введите год рождения", 1999);
const city = prompt("Введите ваш город", "Харьков");
const sport = prompt("Введите любимый вид спорта", "Сон");

const current = 2022;
let IsAnyCity = true;
let output = '';

switch (city) {
  case "Киев":
    output += 'Ты живешь в Украине\n';
    break;
  case "Лондон":
    output += 'Ты живешь в Великобритании\n';
    break;
  case "Вашингтон":
    output += 'Ты живешь в США\n';
    break;
  case null:
  case "":
    output += 'Шкода, що ви не захотіли ввести своє місто\n';
    IsAnyCity = false;
    break;
  default:
    output += `Ви живете в місті ${city}\n`;
}

const Currentyear = current - year;
if (year > 0) {
  output += `Тебе ${Currentyear} года\n`;
}
else {
  output += 'Шкода, що ви не захотіли ввести свій рік народження\n';
}

let IsAnySport = true;
switch (sport) {
  case "Бокс":
    output += 'Круто! Хочешь стать Александром Усиком?\n';
    break;
  case "Волейбол":
    output += 'Круто! Хочешь стать Иваном Зайцевым?\n';
    break;
  case "Футбол":
    output += 'Круто! Хочешь стать Криштиану Роналду?\n';
    break;
  case null:
  case "":
    output += 'Шкода, що ви не захотіли ввести свій вид спорту\n';
    IsAnySport = false;
    break;
}

if (IsAnySport === false && IsAnyCity === false){
  output += 'ви не ввели ані спорт ані місто\n';
}
else if (IsAnySport === true && IsAnyCity === false) {
  output += 'Ви не ввели місто\n';
}

alert(output);
