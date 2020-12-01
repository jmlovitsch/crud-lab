import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';


class RestaurantsContainer extends Component {

    deleteRestaurant = (id) => {
        this.props.deleteRestaurant(id)
    }

  render() {
    return (
      <div>
        <RestaurantInput />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
  }

  const mapPropsToDispatch = dispatch => {
      return {
        deleteRestaurant: id  => dispatch({type: 'DELETE_RESTAURANT', id: id })
    }
  }
export default connect(mapStateToProps, mapPropsToDispatch )(RestaurantsContainer);
