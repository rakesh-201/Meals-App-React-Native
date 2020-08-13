import React from "react";
import List from "../Components/List";
import { FlatList, View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomButton from "../Components/CustomButton";
import { useSelector } from "react-redux";
import DefaultText from "../Components/DefaultText";

function FavouritesScreen(props) {
  const Items = useSelector((state) => state.meals.favourites);
  // console.log(Items);
  if (Items.length > 0) {
    return (
      <FlatList
        data={Items}
        style={{ flex: 1 }}
        renderItem={(item, index) => {
          return <List items={item} navigation={props.navigation} />;
        }}
      />
    );
  } else {
    return (
      <View style={styles.text}>
        <DefaultText>
          You haven't selected any favourite, please do one...
        </DefaultText>
      </View>
    );
  }
}

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourites",
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
    },
  };
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouritesScreen;
