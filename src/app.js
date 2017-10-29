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

const appRoot = document.getElementById('app');

let count = 0;
const someId = 'myidhere';

const addOne = () => {
  count++;
  console.log('addOne', count);
  renderCounterApp();
};

const minusOne = () => {
  count--;
  console.log('minusOne');
  renderCounterApp();
};

const resetCount = () => {
  count = 0;
  console.log('Count Reset');
  renderCounterApp();
};







//console.log (templateTwo);

const renderCounterApp = () => {

  const templateTwo = (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={addOne}> +1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );

  //ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();