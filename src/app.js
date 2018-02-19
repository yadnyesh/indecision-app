class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['String One', 'String Two', 'String Three', 'String Four', 'String Five'];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick(){
    alert('HandlePick');
  }
  render() {
    return(
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    console.log(this.props.options.length);
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        Option: {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render () {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

const jsx = (
  <div>
    <IndecisionApp />
  </div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));