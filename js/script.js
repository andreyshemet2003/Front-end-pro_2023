console.log('apartment222');


import House from "./house.js";
import Apartment from "./apartment.js";
import Human from "./human.js";


let human = new Human("Andrew", "male");
let human2 = new Human("Hanna", "female");
let human3 = new Human("Olga", "female");

console.log(human);

let apartment114 = new Apartment();
let apartment222 = new Apartment();

apartment222.addResidents(human);
apartment222.addResidents(human2);
apartment114.addResidents(human3);

console.log(apartment222);

let houseFirst = new House(2);

houseFirst.addApartment(apartment222);
houseFirst.addApartment(apartment114);

console.log(houseFirst);