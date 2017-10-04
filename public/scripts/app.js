'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Yadnyesh'
  ),
  React.createElement(
    'p',
    null,
    'This is some info about Yadnyesh'
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

var user = {
  name: 'Yadnyesh',
  age: 36,
  location: 'Goa'
};
var userName = "Juvekar";
var userAge = 36;
var userLocation = 'Goa';
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase() + '!'
  ),
  React.createElement(
    'p',
    null,
    ' Age: ',
    user.age,
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' Location: ',
    user.location,
    ' '
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
