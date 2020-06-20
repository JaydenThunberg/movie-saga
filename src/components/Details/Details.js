//this will be on the individual movie poster with an edit button
// 'Back to List' button push to '/' and Edit button push to '/edit'
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  // Renders the entire Details on the DOM
  componentDidMount() {
    console.log('props for detail are:', this.props.reduxState.movieDetails)
  }//end componentDidMount

  goBackToList = () => {
    this.props.history.push('/')
  }//end goBackToList

  
  render() {
    const poster = this.props.reduxState.movieDetails.poster;
    const title = this.props.reduxState.movieDetails.title;
    const description = this.props.reduxState.movieDetails.description;
    let singlePoster = <img src={poster} alt={title} />
    return (
      <div className="Details">
        {title} <br />
        {singlePoster} <br />
        {description}
        <br />
        <button onClick={this.goBackToList}>Back to List</button>
        <button onClick={this.editMovie}>Edit</button>
      </div>
    );//end return
  }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Details);