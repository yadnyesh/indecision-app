class Counter extends React.Component {

  handleAddOne() {
    console.log('Handle Add One Clicked...');
  }

  handleMinusOne(){
    console.log('Handle Minus one ...button clicked');
  }

  handleReset(){
    console.log('Handle Reset ..clicked');
  }

  render() {
    return(
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));