console.log('App.js is running')

//JSX - JavaScript XML

const app = {
  title : 'Yadnyesh',
  subtitle : 'This is awesome info about Yadnyesh',
  options: ['One', 'Two']
};

const template = (
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

const user = {
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

let count = 0;
const someId = 'myidhere'
const templateTwo = (
  <div>
    <h1>Count: {count} </h1>
    <button id = {someId} className="button"> +1</button>
  </div>
);

const appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);

console.log (templateTwo);