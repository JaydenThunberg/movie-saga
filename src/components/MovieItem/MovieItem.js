//This will be a grid list of all movies with a push request to '/details'
import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieItem extends Component {
  // Renders the entire MovieItem on the DOM
  render() {
    const poster = this.props.item.poster;
    const title = this.props.item.title;
    const description = this.props.item.description;
    let singlePoster = <img src={poster} alt={title} />
    return (
      <div className="MovieItem">
        {console.log(this.props.item)}
        {title}
        {singlePoster}
        {description}

      </div>
    );//end return
  }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(MovieItem);