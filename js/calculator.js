const year = prompt("Введите год рождения", 1999);
const city = prompt("Введите ваш город", "Харьков");
const sport = prompt("Введите любимый вид спорта", "Сон");


const current = 2022;
let IsAnyCity = true;
switch (city) {
  case "Киев":
    alert(`Ты живешь в Украине`)
    break;
  case "Лондон":
    alert(`Ты живешь в Великобритании`)
    break;
  case "Вашингтон":
    alert(`Ты живешь в США`)
    break;
  case null:
  case "":
    alert(`Шкода, що ви не захотіли ввести своє місто`)
    IsAnyCity = false;
  default:
    alert(`Ви живете в місті ${city}`)
}

const Currentyear = current - year;
if (year > 0) {
  alert(`Тебе ${year} года`)
}
else {
  alert(`Шкода, що ви не захотіли ввести свій рік народження`)
}


let IsAnySport = true;
switch (sport) {
  case "Бокс":
    alert(` Круто! Хочешь стать Александром Усиком?`)
    break;
  case "Волейбол":
    alert(` Круто! Хочешь стать Иваном Зайцевым?`)
    break;
  case "Футбол":
    alert(` Круто! Хочешь стать Криштиану Роналду?`)
    break;
  case null:
  case "":
  IsAnySport = true;
    alert(`Шкода, що ви не захотіли ввести свій вид спорту`)
}


if (IsAnySport === false && IsAnyCity === false){
  alert (` ви не ввели ані спорт ані місто`)
}
else if (IsAnySport === true && IsAnyCity === false) {
  alert (`Ви не ввели місто`)
}