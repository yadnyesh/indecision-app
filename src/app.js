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

const onMakeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  console.log(random);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length> 0 ? 'Here are your options ' : 'No Options'}</p>
      <button onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={clearOptions}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
};

render();