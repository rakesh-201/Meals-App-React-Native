import MEALS from "C:/Users/USER/Desktop/React Native/meals-app/assets/dummy-data2";
import { SET_FAVOURITE, SET_FILTER } from "../action/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favourites: [],
};

const mealsReducer = (state = initialState, action) => {
  console.log("1");
  switch (action.type) {
    case SET_FAVOURITE:
      const meals__ = state.meals;
      const index = state.favourites.findIndex(
        (fav) => fav.id === action.DataId
      );
      console.log("2 " + index);
      if (index >= 0) {
        const favourites_ = state.favourites;
        favourites_.splice(index, 1);
        return { ...state, favourites: favourites_ };
      }
      const element = meals__.find((meal) => meal.id === action.DataId);
      var updatedFav = state.favourites.concat(element);
      return { ...state, favourites: updatedFav };

    case SET_FILTER:
      const config = action.DataId;
      const meals_ = state.meals;
      var filtered = [];
      for (let index = 0; index < meals_.length; index++) {
        const meal = meals_[index];
        if (
          meal.isLactoseFree !== config.isLactoseFree &&
          !config.isLactoseFree
        ) {
        } else if (
          meal.isGlutenFree !== config.isGlutenFree &&
          !config.isGlutenFree
        ) {
        } else if (meal.isVegan !== config.isVegan && !config.isVegan) {
        } else if (
          meal.isVegetarian !== config.isVegetarian &&
          !config.isVegetarian
        ) {
        } else {
          filtered.push(meal);
        }
      }
      if (
        !config.isGlutenFree &&
        !config.isLactoseFree &&
        !config.isVegan &&
        !config.isVegetarian
      ) {
        filtered = [];
        filtered.push(...state.meals);
      }
      return { ...state, filteredMeals: filtered };

    default:
      return state;
  }
};

export default mealsReducer;
