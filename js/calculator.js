let ladder = {
  step: 0,
  up: function () {
      this.step++;
      return this;
  },
  down: function () {
      this.step--;
      return this;
  },
  showStep: function () { // показывает текущую ступеньку
      alert(this.step);
      return this;
  }
};

ladder.up().up().down().showStep();