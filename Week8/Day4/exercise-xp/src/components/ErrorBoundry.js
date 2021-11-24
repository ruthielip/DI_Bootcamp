import React, { Component } from 'react';

class ErrorBoundry extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasError: null
    }
  }

  componentDidCatch(){
    this.setState({hasError: true})
  }

  render(){
    const {hasError} = this.state;
    if(hasError){
      return(
        <>
         <h2>Something Went Wrong</h2>
         <details style={{ whiteSpace: 'pre-wrap' }}>

         </details>
        </>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundry;
