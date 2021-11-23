import React from 'react';

class Exercise1 extends React.Component {
  constructor(){
    super()
    this.state = {
      favoriteColor:'red'
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({favoriteColor:'yellow'})
    }, 5000)
   }

   changeColor = () =>{
     this.setState({favoriteColor:'blue'})
   }

  render(){
    return(
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}

export default Exercise1;
