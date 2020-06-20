//This will be a grid list of all movies with a push request to '/details'
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
    // Renders the entire MovieItem on the DOM
    handleDetail = (id) => {
        console.log('handling detail for:', this.props.item.title);
        this.props.dispatch({type: 'GET_DETAIL', payload: this.props.item});
        this.props.history.push('/details')
    }
    render() {
        const poster = this.props.item.poster;
        const title = this.props.item.title;
        const description = this.props.item.description;
        let singlePoster = <img src={poster} alt={title} onClick={() => this.handleDetail(this.props.item)}/>
        return (
            <div className="MovieItem">
                {/* {console.log(this.props.item)} */}
                <div>
                    {title} <br/>
                    {singlePoster} <br/>
                    {description}
                    <br/>
                </div>
            </div>
        );//end return
    }//end render
}// end class

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(MovieItem);