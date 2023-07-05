class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {}
  sleep() {}
  walk() {}
}

class player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
}
class Cricketer extends player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
  playCricket() {}
}
class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {}
}
class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {}
}
