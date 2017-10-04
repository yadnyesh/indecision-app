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

var templateTwo = (
  <div>
    <h1>Yadnyesh</h1>
    <p> Age: 36 </p>
    <p> Location: Bangalore </p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);