import React from 'react';

class BuggyCounter extends React.Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }

  handleClick = () => {
    this.setState({counter: this.state.counter+1})
  }

  render(){
    const {counter} = this.state;

    if(counter === 5){
      throw new Error('Crashed')
    }

    return(
       <h1 onClick={this.handleClick}>{counter}</h1>
    )
  }
}

export default BuggyCounter;
