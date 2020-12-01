import uuid from "uuid";

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: [],
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: uuid(),
        text: action.text,
      };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant],
      };
    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter((rest) => rest.id !== action.id),
      };

    case "ADD_REVIEW":
      const review = {
        id: uuid(),
        restaurantId: action.restaurantID,
        text: action.text,
      };
      return {
        ...state,
        reviews: [...state.reviews, review],
      };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((rev) => rev.id !== action.id),
      };
    default:
      return state;
  }
}
