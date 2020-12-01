import React, { Component } from 'react';
import { connect } from 'react-redux';


class RestaurantInput extends Component {
    state = {
        text: ""
    }
    handleChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addRestaurant(this.state.text)
        this.setState({
            text: ""
        })
    }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleSubmit} >
        <input type="text" onChange={this.handleChange} value={this.state.text} />
        <input type="submit" />
        </form>
        <p>{this.state.text}</p>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
   return { addRestaurant: formData => dispatch({ type: 'ADD_RESTAURANT', text: formData })
}}

export default connect(null, mapDispatchToProps)(RestaurantInput);
