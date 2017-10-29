const add = function(a,b) {
  console.log(arguments);
  return a + b;
};

//console.log(add(55,1));

const user = {
  name : 'Yadnyesh',
  cities : ['Mumbai', 'Marcela', 'Panaji', 'Vasco', 'Margao', 'Bangalore'],
  printPlacesLived() {

      const cityMessages = this.cities.map((city) => {
        return city + '!';
      });
      return cityMessages;
  }
};

console.log(user.printPlacesLived());