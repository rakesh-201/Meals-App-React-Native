import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomButton from "../Components/CustomButton";
import DefaultText from "../Components/DefaultText";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/action/meals";

function FilterScreen(props) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setFilter({
        isGlutenFree: isGlutenFree,
        isVegan: vegan,
        isVegetarian: vegetarian,
        isLactoseFree: isLactoseFree,
      })
    );
  }, [isGlutenFree, vegan, vegetarian, isLactoseFree]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <View style={styles.container}>
        <DefaultText> Gluten Free </DefaultText>
        <Switch
          value={isGlutenFree}
          onValueChange={(state) => setIsGlutenFree(state)}
          trackColor={{ true: "rgba(250, 75, 104, 0.8)" }}
          thumbColor="rgb(250, 75, 104)"
        />
      </View>
      <View style={styles.container}>
        <DefaultText> Vegan </DefaultText>
        <Switch
          value={vegan}
          onValueChange={(state) => setVegan(state)}
          trackColor={{ true: "rgba(250, 75, 104, 0.8)" }}
          thumbColor="rgb(250, 75, 104)"
        />
      </View>
      <View style={styles.container}>
        <DefaultText> Vegetarian </DefaultText>
        <Switch
          value={vegetarian}
          onValueChange={(state) => setVegetarian(state)}
          trackColor={{ true: "rgba(250, 75, 104, 0.8)" }}
          thumbColor="rgb(250, 75, 104)"
        />
      </View>
      <View style={styles.container}>
        <DefaultText> Lactose Free </DefaultText>
        <Switch
          value={isLactoseFree}
          onValueChange={(state) => setIsLactoseFree(state)}
          trackColor={{ true: "rgba(250, 75, 104, 0.8)" }}
          thumbColor="rgb(250, 75, 104)"
        />
      </View>
    </View>
  );
}

FilterScreen.navigationOptions = (navData) => {
  return {
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
  title: {
    fontFamily: "Bold",
    fontSize: 22,
    marginVertical: 10,
  },
  screen: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FilterScreen;
