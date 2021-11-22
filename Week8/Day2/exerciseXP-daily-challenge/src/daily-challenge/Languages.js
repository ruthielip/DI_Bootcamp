import React from 'react';
import './Languages.css'

class Languages extends React.Component {
  constructor(props){
    super(props)

    this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
  }
  addOne = (index)=>{
    this.state.languages[index].votes++
    this.setState({languages: this.state.languages})
  }
  render(){
    return (
      <div className='body'>
       <h1>Vote for your Language!</h1>
       <div className='container'>
        {
          this.state.languages.map((item, index)=>
            <div key={index} className='box'>
               <div className='count'>{item.votes}</div>
               <div className='title'>{item.name}</div>
               <button className='button' onClick={()=>this.addOne(index)}>Click Here</button>
            </div>
          )
        }
       </div>
      </div>
    )
  }

}

export default Languages;
