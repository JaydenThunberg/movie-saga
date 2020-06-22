//This will be a PUT request to update name, genre, etc
// 'Cancel' button to push back to '/details' and 'Save' but which should update DB
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
  // Renders the entire Edit on the DOM
  state={
    title: this.props.reduxState.movieDetails.title,
    description: this.props.reduxState.movieDetails.description,
    id:this.props.reduxState.movieDetails.id
  }//end state

  componentDidMount() {
  }//end componentDidMount

  goToDetails = () => {
    this.props.history.push('/details')
  }//end goToDetails

  editMovie = ( event, type ) => {
    console.log('editMovie:', event.target.value);
    this.setState({
      ...this.state,
      [type]: event.target.value
    })

  }//end editMovie

  sendDetails = () =>{
    console.log('state:', this.state)
     this.props.dispatch({ type:'NEW_DETAILS', payload: this.state})
  }//end send details

  render() {
    return (
      <div className="movieItems">
        {console.log(this.props)}
        <div>
          <span>Title: </span><input placeholder={this.props.reduxState.movieDetails.title} onChange={(event) => this.editMovie(event,'title')}></input> <br/>
          <img src={this.props.reduxState.movieDetails.poster} alt={this.props.reduxState.movieDetails.title}/> <br/>
          <span>Description: </span><input placeholder={this.props.reduxState.movieDetails.description} onChange={(event) => this.editMovie (event,'description')}></input>
        </div>
        <button onClick={this.sendDetails}>Submit</button>
        <button onClick={this.goToDetails}>Cancel</button>
      </div>
    );//end return
  }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(Edit);