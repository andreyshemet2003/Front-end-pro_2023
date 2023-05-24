
import Car from "./car.js";
import Human from "./human.js";

const human = new Human("Sasha", 41);
const human2 = new Human("HAnna", 37);

const bmw = new Car("BMW", "X5", 2020, "black");
const shevrolet = new Car("Shevrolet", "Camaro", 1980, "yellow");

bmw.assignOwner();
shevrolet.assignOwner(human);

bmw.showInfoCar()