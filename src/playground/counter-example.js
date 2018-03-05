class Counter extends React.Component {
  render() {
    return(
      <div>
        <h1>Count: </h1>
        <button>+1</button>
        <button>-1</button>
        <button>Reset</button>
      </div>
    );
  }
}

handleAddOne() {
  console.log('Handle Add One Clicked...');
}

handleMinusOne(){
  console.log('Handle Minus one ...button clicked');
}

handleReset(){
  console.log('Handle Reset ..clicked');
}

ReactDOM.render(<Counter />, document.getElementById('app'));