class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting(){
    //return 'Hi, I am ' + `${this.name}` + '!';
    return `Hi, I am ${this.name} and my age is ${this.age}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }

}

class Student extends Person {
  constructor (name, age, major) {
    super(name, age);
    this.major = major
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` The major is ${this.major}.`;
    }
    return description;
  }

}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age, homeLocation);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();
    if(this.hasHomeLocation()) {
      greeting += ` I am from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveller('Yadnyesh', 36, 'Goa');
//console.log(me, "\n");
//console.log(me.getDescription());
console.log(me.getGreeting());
