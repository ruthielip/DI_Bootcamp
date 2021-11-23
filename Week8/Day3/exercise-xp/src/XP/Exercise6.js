import React from 'react';

class Exercise6 extends React.Component {
  constructor(){
    super()
  }

  shootTwo = () => {
    alert(this)
  }

  render(){
    return(
      <>
      <button onClick={this.shootTwo}>Keep Shooting!</button>
      </>
    )
  }
}

export default Exercise6;
