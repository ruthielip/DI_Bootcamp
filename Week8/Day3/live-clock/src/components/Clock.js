import React from 'react';

class Clock extends React.Component {
  constructor(){
    super()
    this.state = {
      time: new Date()
    }
  }

  componentDidMount(){
    setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({time: new Date()})
  }

  componentWillUnmount() {
        clearInterval(this.interval)
    }

  render(){
    const {time} = this.state;
    return(
      <div>
         <h1>Hello, world!</h1>
         <h2>It is {time.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;
