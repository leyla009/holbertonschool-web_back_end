#!/usr/bin/node

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Using this.constructor creates a new instance of the same class 
    // (even if it is a subclass like TestCar)
    return new this.constructor();
  }
}
