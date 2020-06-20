//this will be on the individual movie poster with an edit button
// 'Back to List' button push to '/' and Edit button push to '/edit'
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  // Renders the entire Details on the DOM
  componentDidMount() {
    console.log('props for detail are:', this.props.reduxState.movieDetails)
  }//end componentDidMount

  editMovie = (id) => {
    console.log('handling detail for:', id);
    this.props.dispatch({type: 'GET_DETAILS', payload: id});
    this.props.history.push(`/edit/${id.title}`)
}
  goBackToList = () => {
    this.props.history.push('/')
  }//end goBackToList


  render() {
    const poster = this.props.reduxState.movieDetails.poster;
    const title = this.props.reduxState.movieDetails.title;
    const description = this.props.reduxState.movieDetails.description;
    const genreName = this.props.reduxState.movieDetails.name;
    let singlePoster = <img src={poster} alt={title} />
    return (
      <div className="Details">
        <span><b>{title}</b></span> 
        <br/>
        <br/>
        <span>{singlePoster}</span> 
        <br/>
        <br/>
        <span><b>Movie Description: </b>{description}</span> 
        <br/>
        <br/>
        <span><b>Genre: </b> {genreName}</span>
        <br/>
        <br/>
        <button onClick={this.goBackToList}>Back to List</button>
        <button onClick={() => this.editMovie(this.props.reduxState.movieDetails)}>Edit</button>
      </div>
    );//end return
  }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Details);