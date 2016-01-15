import React from 'react';
import ReactDOM from 'react-dom';

class Hobbit extends React.Component{
  render(){
    return <div>{this.props.name}</div>
  }
}

ReactDOM.render(<Hobbit name="Frodo"/>, document.getElementById('hobbit'));
