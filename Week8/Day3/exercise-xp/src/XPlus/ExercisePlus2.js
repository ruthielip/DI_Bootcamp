import React from 'react';

class ExercisePlus2 extends React.Component {
  constructor(){
    super()
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      alert(`The Enter key was pressed, your imput is ${event.target.value}`)
    }
  }

  render(){
    return(
      <div>
       <input type='text' placeholder='Press the ENTER key!' onKeyPress={this.handleKeyPress}/>
      </div>
    )
  }
}

export default ExercisePlus2;
