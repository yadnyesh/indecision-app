console.log('App.js is running')

//JSX - JavaScript XML

var app = {
  title : 'Yadnyesh',
  subtitle : 'This is some info about Yadnyesh',
  options: ['One', 'Two']
};

var template = (
<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>{app.subtitle}</p>}
  <p>{app.options.length> 0 ? 'Here are your options ' : 'No Options'}</p>
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
  age: 36,
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
ReactDOM.render(template, appRoot);