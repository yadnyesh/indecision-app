'use strict';

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

var user = {
  name: 'Yadnyesh',
  cities: ['Mumbai', 'Marcela', 'Panaji', 'Vasco', 'Margao', 'Bangalore'],
  printPlacesLived: function printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);
    self = this;

    this.cities.forEach(function (city) {
      console.log(self.name + ' has lived in ' + city);
    });
  }
};

user.printPlacesLived();
