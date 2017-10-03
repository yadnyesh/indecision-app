console.log('App.js is running')

//JSX - JavaScript XML
var template = <p>This is JSX from App.js</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);