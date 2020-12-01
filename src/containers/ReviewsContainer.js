import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantID={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantID={this.props.restaurant.id} />
      </div>
    )
  }
}

const mapStateToProps = state => {
   return { reviews: state.reviews}
}

const mapDispatchToProps = dispatch => {
    return {
        addReview: (text, restaurantID) => dispatch({type: 'ADD_REVIEW', text: text, restaurantID: restaurantID }),
        deleteReview: id => dispatch({type: 'DELETE_REVIEW', id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
