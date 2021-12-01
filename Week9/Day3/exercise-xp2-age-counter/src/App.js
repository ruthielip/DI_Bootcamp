import './App.css'
import React from 'react';
import {connect} from 'react-redux';
import {ageUp, ageDown} from './redux/actions'

const App = (props) => {
  const {age, ageUp, ageDown} = props;
  return (
    <div>
     <span>your age:{age}</span><br/>
     <button onClick={ageUp}>Age UP</button>
     <button onClick={ageDown}>Age DOWN</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    ageUp: () => dispatch(ageUp()),
    ageDown: () => dispatch(ageDown())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
