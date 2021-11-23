import React from 'react';

class ExercisePlus3 extends React.Component {
  constructor(){
    super()
    this.state = {
      isToggleOn: true
    }
  }

  toggle = () => {
    this.setState({isToggleOn: !this.state.isToggleOn})
  }


  render(){
    const {isToggleOn} = this.state;

    return(
      <div>
       <button onClick={this.toggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    )
  }
}

export default ExercisePlus3;
