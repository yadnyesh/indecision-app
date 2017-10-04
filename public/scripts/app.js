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

var userName = "Juvekar";
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    userName
  ),
  React.createElement(
    'p',
    null,
    ' Age: 36 '
  ),
  React.createElement(
    'p',
    null,
    ' Location: Bangalore '
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
