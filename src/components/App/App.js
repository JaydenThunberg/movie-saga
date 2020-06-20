import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieItem from '../MovieItem/MovieItem';
import Edit from '../Edit/Edit';
import Details from '../Details/Details';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    console.log('componentDidMount:')
    this.props.dispatch({ type: 'GET_MOVIES' });
  }
  render() {
    return (
      <div className="App">
        <h1>Lordess of the Reels <span role="img" aria-label="video camera recorder">🎥</span></h1>
        <Router>
          <Route exact path="/" component={MovieList} />
          <Route path="/details" component={Details} />
          <Route path="/edit" component={Edit} />
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(App);
