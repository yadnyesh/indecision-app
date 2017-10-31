class Person {
  constructor (name = 'Anonymous') {
    this.name = name;
    console.log('Test')
  }

  getGreeting(){
    return 'Hi, I am ' + this.name + '!';
  }

}

const me = new Person('Yadnyesh');
console.log(me.getGreeting());