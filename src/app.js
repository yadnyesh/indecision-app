console.log('App.js is running')

//JSX - JavaScript XML

var htmlElements = {
  title : 'Yadnyesh',
  subtitle : 'This is some info about Yadnyesh'
};

var template = (
<div>
  <h1>{htmlElements.title}</h1>
  <p>{htmlElements.subtitle}</p>
  <ol>
    <li>Item One</li>
    <li>Item Two</li>
  </ol>
</div>
);

function getLocation() {
  return 'Unknown';
}

var user = {
  name: 'Yadnyesh',
  age: 36,
  location: 'Goa'
};
var userName = "Juvekar";
var userAge = 36;
var userLocation = 'Goa';
var templateTwo = (
  <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p> Age: {user.age} </p>
    <p> Location: {getLocation()} </p>
  </div>
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);