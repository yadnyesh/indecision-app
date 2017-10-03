console.log('App.js is running')

//JSX - JavaScript XML
//var template = <p>This is JSX from App.js</p>;
var template = React.createElement(
  "h1",
  null,
  "This is JSX from App.js"
);
var appRoot = document.getElementById('app');
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);