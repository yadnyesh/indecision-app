class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting(){
    //return 'Hi, I am ' + `${this.name}` + '!';
    return `Hi, I am ${this.name} and my age is ${this.age}!`;
  }

}

const me = new Person('Yadnyesh', 36);
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());