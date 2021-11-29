import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './Hello.js';
import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox'
import {setSearchField} from './redux/actions'
import {connect} from 'react-redux';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      arr:[]
    }
  }
  render() {
    const{arr} = this.state;
    const {searchField, onSearchChange} = this.props;
    const filterArr = arr.filter(item => {
      return item.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div>
        <h1>Robots</h1>
        <SearchBox onSearch={onSearchChange}/>
        <CardList arr_robots={filterArr} />
      </div>
    );
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');

  }
  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>{
      console.log(users);
      this.setState({arr:users})
    })
    .catch(e => {
      console.log(e);
    })
  }
}

const mapStateToProps = (state) => {
  return{
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
