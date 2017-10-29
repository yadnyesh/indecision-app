'use strict';

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

//console.log(add(55,1));

var user = {
  name: 'Yadnyesh',
  cities: ['Mumbai', 'Marcela', 'Panaji', 'Vasco', 'Margao', 'Bangalore'],
  printPlacesLived: function printPlacesLived() {

    var cityMessages = this.cities.map(function (city) {
      return city + '!';
    });
    return cityMessages;
  }
};

console.log(user.printPlacesLived());
