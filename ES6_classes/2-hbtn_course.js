export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateArray(students, 'Students');
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(value) {
    this._name = this._validateString(value, 'Name');
  }

  set length(value) {
    this._length = this._validateNumber(value, 'Length');
  }

  set students(value) {
    this._students = this._validateArray(value, 'Students');
  }

  // Validation Helpers
  _validateString(value, fieldName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${fieldName} must be a string`);
    }
    return value;
  }

  _validateNumber(value, fieldName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${fieldName} must be a number`);
    }
    return value;
  }

  _validateArray(value, fieldName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${fieldName} must be an array`);
    }
    return value;
  }
}
