import React from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox'
import {setSearchField, requestRobots} from './redux/actions'
import {connect} from 'react-redux';

class App extends React.Component  {

  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filterArr = robots.filter(item => {
      return item.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ?
      <h1>Loading...</h1> :
    (
      <div>
        <h1>Robots</h1>
        <SearchBox onSearch={onSearchChange}/>
        <CardList arr_robots={filterArr} />
      </div>
    );
  }

  componentDidMount(){
    this.props.onRequestRobots();
 }
}

const mapStateToProps = (state) => {
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
