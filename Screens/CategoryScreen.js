import React from "react";
import {
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Button,
  View,
} from "react-native";
import CATEGORIES from "../assets/dummy-data";
import TouchCom from "../Components/TouchCom";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomButton from "../Components/CustomButton";

function CategoryScreen(props) {
  const renderCategories = (item) => {
    return (
      <TouchCom
        color={{ backgroundColor: item.item.color }}
        onClick={() => {
          props.navigation.navigate("Meals", { CategoryId: item.item.id });
        }}
      >
        {item.item.name}
      </TouchCom>
    );
  };

  return (
    <>
      <FlatList
        data={CATEGORIES}
        renderItem={(item) => renderCategories(item)}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
      />
    </>
  );
}

CategoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Categories",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            color="white"
            onPress={() => navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
      z;
    },
  };
};

export default CategoryScreen;
