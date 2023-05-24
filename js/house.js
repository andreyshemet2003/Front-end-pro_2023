export default class House {

  constructor(limitApartments) {
      this.limitApartments = limitApartments;
      this.apartmentsAll = [];
  }

  addApartment(apartment) {
      if (this.apartmentsAll.length <= this.limitApartments-1 ) {
          this.apartmentsAll.push(apartment);
      } else {
          console.log("The number of apartments is exceeded");
          return;
      }

  }
}