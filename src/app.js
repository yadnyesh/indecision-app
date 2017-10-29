console.log('App.js is running')

//JSX - JavaScript XML

const app = {
  title : 'Yadnyesh',
  subtitle : 'This is awesome info about Yadnyesh',
  options: ['One', 'Two']
};


const onFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form Submitted');
  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  console.log(app.options);
  render();
};

const clearOptions = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length> 0 ? 'Here are your options ' : 'No Options'}</p>
      <p>{app.options.length}</p>
      {
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>;
        })
      }
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        <button onClick={clearOptions}>Remove All</button>
      </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
};

render();