import React from 'react';

class Exercise4 extends React.Component {
  constructor(){
    super()
    this.shootRegularWithParameter = this.shootRegularWithParameter.bind(this, 'Goal')
  }

  shootRegularWithParameter(value){
    alert(value)
  }

  render(){
    return(
      <>
      <button onClick={this.shootRegularWithParameter}>Shooting!</button>
      </>
    )
  }
}

export default Exercise4;
