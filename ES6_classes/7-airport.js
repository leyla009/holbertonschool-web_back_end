#!/usr/bin/node

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override toString to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
