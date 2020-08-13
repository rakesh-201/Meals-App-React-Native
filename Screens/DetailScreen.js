import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, Image, StyleSheet, View } from "react-native";
import DefaultText from "../Components/DefaultText";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomButton from "../Components/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { setFavourite } from "../store/action/meals";

function DetailScreen(props) {
  const ItemId = props.navigation.getParam("ItemId");
  const MEALS = useSelector((state) => state.meals.meals);
  const fav = useSelector((state) => state.meals.favourites);
  const Items = MEALS.find((item) => item.id === ItemId);
  console.log("in");
  const dispatch = useDispatch();
  var dispatchHandler = useCallback(() => {
    dispatch(setFavourite(ItemId));
  }, [dispatch, fav, ItemId]);

  useEffect(() => {
    props.navigation.setParams({
      dispatch: dispatchHandler,
    });
  }, [dispatchHandler, fav]);

  return (
    <ScrollView>
      <Image source={{ uri: Items.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <DefaultText style={styles.txt}>{Items.duration}</DefaultText>
        <DefaultText style={styles.txt}>{Items.complexity}</DefaultText>
        <DefaultText style={styles.txt}>{Items.affordability}</DefaultText>
      </View>
      <View style={styles.t}>
        <Text style={styles.text}>Ingredients</Text>
      </View>
      <View style={styles.center}>
        {Items.ingredients.map((point) => (
          <DefaultText key={point}>{point}</DefaultText>
        ))}
      </View>
      <View style={styles.t}>
        <Text style={styles.text}>Steps</Text>
      </View>
      <View style={styles.center}>
        {Items.steps.map((point) => (
          <DefaultText key={point}>{point}</DefaultText>
        ))}
      </View>
    </ScrollView>
  );
}

DetailScreen.navigationOptions = (navData) => {
  const ItemId = navData.navigation.getParam("ItemId");
  const MEALS = navData.navigation.getParam("meals");
  const Items = MEALS.find((item) => item.id === ItemId);
  const isFav = navData.navigation.getParam("isFav");
  const dispatchHandler = navData.navigation.getParam("dispatch");
  return {
    headerTitle: Items.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomButton}>
          <Item
            title="Favourite"
            iconName={isFav ? "ios-star" : "ios-star-outline"}
            onPress={dispatchHandler}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginVertical: 15,
  },
  txt: {
    fontFamily: "Bold",
  },
  t: {
    alignItems: "center",
  },
  center: {
    alignItems: "baseline",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 5,
    marginBottom: 5,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontFamily: "Bold",
    fontSize: 22,
    marginTop: 10,
  },
});

export default DetailScreen;
