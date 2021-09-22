const forwardBackwardSteps = {
  step: 0,
  forward() {
    this.step++;
    return this;
  },
  backward() {
    this.step--;
    return this;
  },
  revealStep() {
    console.log(this.step);
    return this;
  }
};