import React from 'react';

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      firstname: '',
      lastname: '',
      age: null,
      gender: '',
      destination: '',
      nutsfree: false,
      lactosefree: false,
      vegan: false
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value })
  }

  handleCheckbox = (event) => {
    const { name, checked } = event.target

        this.setState({ [name]: checked ? 'on' : '' })
  }

  render(){
    const {firstname, lastname, age, gender, destination, nutsfree, lactosefree, vegan} = this.state;
    return(
      <div>
         <h1>Form</h1>
         <form onChange={this.handleChange} onClick={this.handleChange}>
            <input type='text' name='firstname' placeholder='First Name'/><br/>
            <input type='text' name='lastname' placeholder='Last Name'/><br/>
            <input type='text' name='age' placeholder='Age'/><br/>
            <input type='radio' name='gender' value='Male'/>Male<br/>
            <input type='radio' name='gender' value='Female'/>Female<br/>
            <h4>Select your destination</h4>
            <select value={destination} name='destination'>
               <option>Please Choose a Destination</option>
               <option value='Thailand'>Thailand</option>
               <option value='Japan'>Japan</option>
               <option value='Brazil'>Brazil</option>
            </select><br/>
            <h4>Dietary restrictions:</h4>
            <input type='checkbox' name='nutsfree'/>Nuts free<br/>
            <input type='checkbox' name='lactosefree'/>Lactose free<br/>
            <input type='checkbox' name='vegan'/>Vegan<br/>
            <button>Submit</button>
         </form>
         <div className='output'>
            <h2>Entered Information</h2>
            <p>Your Name: {firstname} {lastname}</p>
            <p>Your Age: {age}</p>
            <p>Your Gender: {gender}</p>
            <p>Your Destination: {destination}</p>
            <p>Your Dietary Restrictions:</p>
            <ul>
               <li>Nuts Free: {nutsfree ? 'Yes' : 'No'}</li>
               <li>Lactos Free: {lactosefree ? 'Yes' : 'No'}</li>
               <li>Vegan Meal: {vegan ? 'Yes' : 'No'}</li>
            </ul>
         </div>
      </div>
    )
  }
}

export default Form;
