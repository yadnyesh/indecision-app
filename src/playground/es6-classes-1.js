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

const me = new Student('Yadnyesh', 36, 'Computer Science');
console.log(me, "\n");
console.log(me.getDescription());
