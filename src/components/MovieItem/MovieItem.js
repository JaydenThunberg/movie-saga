//This will be a grid list of all movies with a push request to '/details'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Detail from '../Details/Details';
import './MovieItem.css';

class MovieItem extends Component {
    // Renders the entire MovieItem on the DOM
    getMovieDetails = (id) => {
        console.log('handling detail for:', id);
        this.props.dispatch({ type: 'GET_DETAILS', payload: id });
        this.props.history.push(`/details/${id.title}`)
    }

    render() {
        const poster = this.props.item.poster;
        const title = this.props.item.title;
        const description = this.props.item.description;
        let singlePoster = <img src={poster} alt={title} onClick={() => this.getMovieDetails(this.props.item)} />
        return (
            <div className="movieItems">
                {/* {console.log(this.props.item)} */}
                <div className="movies">
                    {title} <br />
                    <div className="posterRadius">
                    {singlePoster} <br />
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    <br />
                </div>
            </div>
        );//end return
    }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(MovieItem);