import React from 'react';

class ExercisePlus4 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      age: null,
      errormessage: '',
      textarea: 'The content of a textarea goes in the value attribute',
      select: 'volvo'
    }
  }

  addUsername = (event) => {
    this.setState({username: event.target.value})
  }

  addAge = (event) => {
    if(isNaN(event.target.value)){
      this.setState({errormessage:'Your age must be a number'})
      event.target.value = '';
    } else {
        this.setState({age: event.target.value})
    }
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert(`You are submitting ${this.state.username}`)
  }

  render(){
    const {username, age, errormessage, textarea, select} = this.state;

    return(
      <div>
         <h1>Hello {username} {age}</h1>
         <form onSubmit={this.mySubmitHandler}>
            <p>Enter your name:</p>
            <input type='text' name='username' onChange={this.addUsername}/>
            <p>Enter your age:</p>
            <input type='text' name='age' onChange={this.addAge}/>
            <p>{errormessage}</p>
            <textarea name='textarea' value={textarea}></textarea>
            <br/>
            <select name='select' value={select}>
               <option value='ford'>Ford</option>
               <option value='volvo'>Volvo</option>
               <option value='flat'>Flat</option>
            </select>
            <br/>
            <button>Submit</button>
         </form>
      </div>
    )
  }
}

export default ExercisePlus4;
