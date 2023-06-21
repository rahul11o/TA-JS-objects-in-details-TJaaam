//- Pseudoclassical Pattern

//Animal

// function Animal(location, numberOfLegs) {
//   this.location = location;
//   this.numberOfLegs = numberOfLegs;
// }

// Animal.prototype = {
//   eat: function () {
//     console.log(`I live in ${this.location} and I can eat`);
//   },
//   changeLocation: function (newLocation) {
//     this.location = newLocation;
//     return newLocation;
//   },
//   summary: function () {
//     return `I live in ${location} and I have ${numberOfLegs}`;
//   },
// };

//Dog

// function Dog(location, numberOfLegs, name, color) {
//   Animal.apply(this, [location, numberOfLegs]);
//   this.name = name;
//   this.color = color;
// }
// Dog.prototype = {
//   bark: function () {
//     alert(`I am ${this.name} and I can bark 🐶`);
//   },
//   changeName: function (newName) {
//     this.name = newName;
//     return newName;
//   },
//   changeColor: function (newColor) {
//     this.color = newColor;
//     return newColor;
//   },
//   summary: function () {
//     returns`I am ${this.name} and I am of ${this.color} . I can also bark`;
//   },
// };

// Object.setPrototypeOf(Dog.prototype, Animal.prototype);

//Class pattern

class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    this.location = newLocation;
    return newLocation;
  }
  summary() {
    return `I live in ${location} and I have ${numberOfLegs}`;
  }
}

class Dog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName() {
    this.name = newName;
    return newName;
  }
  changeColor(newColor) {
    this.color = newColor;
    return newColor;
  }
  summary() {
    returns`I am ${this.name} and I am of ${this.color} . I can also bark`;
  }
}
