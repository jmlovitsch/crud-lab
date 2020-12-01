import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
    state={
        text: ""
    }

    handleChange=event=> {
        this.setState({
            text: event.target.value
        })
    }

  render() {
    return (
      <div>
      <form onSubmit={(e) => {e.preventDefault(), this.props.addReview(this.state.text, this.props.restaurantID), this.setState({text: ""})} } >
      <input type="text" value={this.state.text} onChange={this.handleChange} />
      <input type="submit" />
      </form>
      </div>
    );
  }
};

export default ReviewInput;
