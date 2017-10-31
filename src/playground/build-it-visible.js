const appRoot = document.getElementById('app');

let showText = true;

const toggleText = () => {
  showText = !showText;
  //console.log(showText);
  render();
}

const render = () => {

  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleText}>Show Details</button>
      <p> {showText ? 'Hey! You can see some details now' : ''} </p>
      {console.log(showText)}
    </div>
  );

  ReactDOM.render(template, appRoot);
}













render();