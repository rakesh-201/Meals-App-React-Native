import React from "react";
import { FlatList } from "react-native";
import List from "../Components/List";
import CATEGORIES from "../assets/dummy-data";
import { useSelector } from "react-redux";

function Category1Screen(props) {
  const renderListItem = (items) => {
    return <List items={items} navigation={props.navigation} />;
  };

  const catId = props.navigation.getParam("CategoryId");

  const MEAL = useSelector((state) => state.meals.filteredMeals);
  const Item = MEAL.filter((item) => item.categoryIds.indexOf(catId) >= 0);
  return (
    <FlatList
      data={Item}
      renderItem={(item, index) => renderListItem(item)}
      style={{ flex: 1 }}
    />
  );
}

Category1Screen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam("CategoryId");

  const Item = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: Item.name,
  };
};

export default Category1Screen;
