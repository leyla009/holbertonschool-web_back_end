#!/usr/bin/node

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // Check if the instance is of the base class or a subclass
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method enforcement
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
