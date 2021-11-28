import React from 'react';
import {connect} from 'react-redux';
import {movieClicked} from '../actions/index';
import './Movies.css';

class MovieList extends React.Component {
  render(){
    const {getMovie, movies} = this.props
    return(
      <div>
       <h2>Movie List</h2>
       {
         movies.map((e, i) => {
           return(
             <div key={i} className='container-movies'>
             <p>{e.title}</p>
             <button id={i} onClick={getMovie}>Details</button>
             </div>
           )
         })
       }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movieReducer.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (event) => dispatch(movieClicked(event.target.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
