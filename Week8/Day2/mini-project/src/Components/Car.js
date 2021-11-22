import React from 'react';
import Garage from './Garage';

class Car extends React.Component {

  constructor(props){
    super(props);
    this.state= {color: 'red'}
  }
  render(){
    const {info: {name, model}} = this.props;
    return(
      <div>
        <h2>Hi, I'm a {this.state.color} Car!</h2>
        <Garage size='small'/>
        <h2>I'm a {name} {model}</h2>
      </div>
    )
  }
}

export default Car;
