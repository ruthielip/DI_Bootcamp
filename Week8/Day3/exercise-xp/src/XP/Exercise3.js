import React from 'react';

class Exercise3 extends React.Component {
  constructor(){
    super()
    this.shootRegular = this.shootRegular.bind(this);
  }

  shootRegular(){
    alert(this)
  }

  render(){
    return(
      <>
      <button onClick={this.shootRegular}>Keep Shooting!</button>
      </>
    )
  }
}

export default Exercise3;
