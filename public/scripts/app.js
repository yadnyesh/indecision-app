'use strict';

var appRoot = document.getElementById('app');

var showText = true;

var toggleText = function toggleText() {
  showText = !showText;
  //console.log(showText);
  render();
};

var render = function render() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleText },
      showText ? 'Hide Details' : 'Show Details'
    ),
    React.createElement(
      'p',
      null,
      ' ',
      showText ? 'Hey! You can see some details now' : '',
      ' '
    ),
    console.log(showText)
  );

  ReactDOM.render(template, appRoot);
};

render();
