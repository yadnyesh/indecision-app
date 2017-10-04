console.log('App.js is running')

//JSX - JavaScript XML
var template = (
<div>
  <h1>Yadnyesh</h1>
  <p>This is some info about Yadnyesh</p>
  <ol>
    <li>Item One</li>
    <li>Item Two</li>
  </ol>
</div>
);

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
    <p> Location: {user.location} </p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);