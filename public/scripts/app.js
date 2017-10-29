'use strict';

console.log('App.js is running');

//JSX - JavaScript XML

var app = {
  title: 'Yadnyesh',
  subtitle: 'This is awesome info about Yadnyesh',
  options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log('Form Submitted');
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  console.log(app.options);
  render();
};

var clearOptions = function clearOptions() {
  app.options = [];
  render();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var render = function render() {
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
      'p',
      null,
      app.options.length
    ),
    numbers.map(function (number) {
      return React.createElement(
        'p',
        { key: number },
        'Number: ',
        number
      );
    }),
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
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      ),
      React.createElement(
        'button',
        { onClick: clearOptions },
        'Remove All'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
