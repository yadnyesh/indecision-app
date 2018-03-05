class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);
    this.toggleText = this.toggleText.bind(this);
    this.state = {
      showText : true
    }
  };

  toggleText() {
    this.setState((prevState) =>{
      return {
        showText: !prevState.showText
      };
    });
  }

  render(){
    return(
      <div>
        <h1> Visibility Toggle </h1>
        <button onClick={this.toggleText}>{this.state.showText ? 'Hide Details' : 'Show Details'}</button>
          <p> {this.state.showText ? 'Hey! You can see some details now' : ''} </p>
          {console.log(this.state.showText)}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



//*****************Old Code*******************
// const appRoot = document.getElementById('app');

// let showText = true;

// const toggleText = () => {
//   showText = !showText;
//   //console.log(showText);
//   render();
// }

// const render = () => {

//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleText}>{showText ? 'Hide Details' : 'Show Details'}</button>
//       <p> {showText ? 'Hey! You can see some details now' : ''} </p>
//       {console.log(showText)}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// render();