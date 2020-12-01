import React, { Component } from "react";
import Restaurant from "./Restaurant";

class Restaurants extends Component {

  renderRestaurants = () => {
    return this.props.restaurants.map((r) => (
      <li>
        <Restaurant
          key={r.id}
          restaurant={r}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </li>
    ));
  };
  render() {
    return (
      <ul>
        Restaurants Component
        {this.renderRestaurants()}
      </ul>
    );
  }
}

export default Restaurants;
