import React from 'react';
import {connect} from 'react-redux';
import {increaseCount, decreaseCount} from '../actions/index';

class Counter extends React.Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div style={{textAlign: 'center', margin: '50px'}}>
        <button style={{margin: '10px'}} onClick={this.props.plusOne}>+</button>
        {this.props.counter}
        <button style={{margin: '10px'}} onClick={this.props.minusOne}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    plusOne: () => dispatch(increaseCount()),
    minusOne: () => dispatch(decreaseCount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
