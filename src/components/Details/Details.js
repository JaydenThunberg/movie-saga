//this will be on the individual movie poster with an edit button
import React, { Component } from 'react';
import {connect } from 'react-redux';
 
class Details extends Component {
  // Renders the entire Details on the DOM
  render() {
    return (
      <div className="Details">
        <p>Details</p>
      </div>
    );//end return
  }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect()(Details);