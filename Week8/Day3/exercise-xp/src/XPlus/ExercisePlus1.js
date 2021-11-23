import React from 'react';

class ExercisePlus1 extends React.Component {
  constructor(){
    super()
  }

  clickHandler = () => {
    alert('I was clicked')
  }

  render(){
    return(
      <>
      <button onClick={this.clickHandler}>Click Me!</button>
      </>
    )
  }
}

export default ExercisePlus1;
