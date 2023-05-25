export default class Student {
  constructor(firstName, lastName, yearOfBirth, scoreList) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.yearOfBirth = yearOfBirth;
      this.scoreList = scoreList;
      this.visitList = new Array(25);
  }

  ageStudent() {
      let today = new Date();
      const age = today.getFullYear() - this.yearOfBirth;
      return age;
  }
  averageScore() {
      const summmm = this.scoreList.reduce((sum, item) => sum + item);
      const average = summmm / this.scoreList.length;
      return average;
  }

  present() {
      const freePlace = this.visitList.findIndex(item => item == undefined);
      if (freePlace != -1) {
          this.visitList.splice(freePlace, 1, true)
      } else {
          console.log("Array is full");
      }
  }

  absent() {
      const freePlace = this.visitList.findIndex(item => item == undefined);
      if (freePlace != -1) {
          this.visitList.splice(freePlace, 1, false)
      } else {
          console.log("Array is full");
      }
  }

  summary() {
      const averageGrade = this.averageScore();
      const quantityVisit = this.visitList.filter((item) => item === true);
      const averageVisit = quantityVisit.length / this.visitList.length;

      if (averageGrade > 90 && averageVisit > 0.9) {
          return "Молодець";
      } else if (averageGrade < 90 && averageVisit < 0.9) {
          return "Редиска!";
      } else {
          return "Добре, але можна краще";
      }
  }
}