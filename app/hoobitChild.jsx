import React from 'react';
import ReactDOM from 'react-dom';

class HobbitChild extends React.Component{
  render(){
    let count;
    count = React.Children.count(this.props.children)
    // Usando map (retorna un objeto)
    console.log('Con map');
    React.Children.map(this.props.children,function(child){
      console.log(child);
    });
    // Usando ForEach
    console.log('Con ForEach');
    React.Children.forEach(this.props.children,function(child){
      console.log(child);
    });
    //Imprimir en pantalla la cantidad de hijos
    console.log(count);

    return <div>{this.props.name}</div>
  }
}

ReactDOM.render(<HobbitChild name="Frodo">
  <p key="firsty">a child</p>
  <p key="second">another</p>
</HobbitChild>, document.getElementById('hobbitChild'));
