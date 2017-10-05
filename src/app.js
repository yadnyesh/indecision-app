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

function getLocation(location) {
  if(location)
    return <p>Location: {location}</p>;
}

var user = {
  name: 'Yadnyesh',
  age: 17,
  location: 'Goa'
};
// var userName = "Juvekar";
// var userAge = 36;
// var userLocation = 'Goa';
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous' }</h1>
    {(user.age && user.age >= 18) && <p> Age: {user.age} </p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);