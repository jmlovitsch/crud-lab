import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

    renderReviews = () => {

    return this.props.reviews.map(r =>  (r.restaurantId === this.props.restaurantID) ?  <li> <Review key={r.id} restaurantID={this.props.restaurantID} review={r} deleteReview={this.props.deleteReview}/> </li> : null)
    }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
