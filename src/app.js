class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['String One', 'String Two', 'String Three'];
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
  render() {
    return(
      <div>
        <button>What should I do?</button>
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
          this.props.options.map
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        Option Component here
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