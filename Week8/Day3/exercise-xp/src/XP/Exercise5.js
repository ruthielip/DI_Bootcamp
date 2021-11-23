import React from 'react';

class Exercise5 extends React.Component {
  constructor(){
    super()
  }

  shootWithArgument(value){
    alert(value)
  }

  render(){
    return(
      <>
      <button onClick={()=>this.shootWithArgument('Goal')}>Shooting!</button>
      </>
    )
  }
}

export default Exercise5;
