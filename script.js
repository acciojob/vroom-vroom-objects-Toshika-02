// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Adding a method to the Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
  super(make, model);
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;