//this will be a map of the reduxState
import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {
  // Renders the entire MovieList on the DOM
  render() {
    return (
      <div className="MovieList">
        {/* {console.log(this.props.reduxState.movies)} */}
        {this.props.reduxState.movies.map((item) => {
            return (
              <MovieItem key={item.title} item={item}/>
            )
          })}
      </div>
    );//end return
  }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(MovieList);