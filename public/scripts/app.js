'use strict';

console.log('App.js is running');

//JSX - JavaScript XML

var htmlElements = {
  title: 'Yadnyesh',
  subtitle: 'This is some info about Yadnyesh'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    htmlElements.title
  ),
  React.createElement(
    'p',
    null,
    htmlElements.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

function getLocation(location) {
  if (location) return React.createElement(
    'p',
    null,
    'Location: ',
    location
  );
}

var user = {
  name: 'Yadnyesh',
  age: 17,
  location: 'Goa'
};
// var userName = "Juvekar";
// var userAge = 36;
// var userLocation = 'Goa';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    ' Age: ',
    user.age,
    ' '
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
