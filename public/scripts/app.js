'use strict';

console.log('App.js is running');

//JSX - JavaScript XML

var app = {
  title: 'Yadnyesh',
  subtitle: 'This is awesome info about Yadnyesh',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options ' : 'No Options'
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
  age: 36,
  location: 'Goa'
};
// var userName = "Juvekar";
// var userAge = 36;
// var userLocation = 'Goa';
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous' }</h1>
//     {(user.age && user.age >= 18) && <p> Age: {user.age} </p>}
//     {getLocation(user.location)}
//   </div>
// );

var count = 0;
var someId = 'myidhere';

var addOne = function addOne() {
  count++;
  console.log('addOne', count);
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  console.log('minusOne');
  renderCounterApp();
};

var resetCount = function resetCount() {
  count = 0;
  console.log('Count Reset');
  renderCounterApp();
};

var appRoot = document.getElementById('app');

//console.log (templateTwo);

var renderCounterApp = function renderCounterApp() {

  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count,
      ' '
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      ' +1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetCount },
      'Reset Count'
    )
  );

  //ReactDOM.render(template, appRoot);
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
