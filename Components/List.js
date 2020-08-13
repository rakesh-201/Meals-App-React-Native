import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DefaultText from "./DefaultText";
import { useSelector } from "react-redux";

function List(props) {
  const MEALS = useSelector((state) => state.meals.meals);
  const fav = useSelector((state) => state.meals.favourites);
  const { items } = props;
  console.log("in1");
  const isfav =
    fav.findIndex((fav) => fav.id === items.item.id) >= 0 ? true : false;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Detail", {
            ItemId: items.item.id,
            meals: MEALS,
            isFav: isfav,
          });
        }}
      >
        <View style={{ ...styles.Row, ...styles.con1 }}>
          <ImageBackground
            source={{ uri: items.item.imageUrl }}
            style={styles.img}
          >
            <View style={styles.txtCon}>
              <Text style={styles.text} numberOfLines={1}>
                {items.item.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.Row, ...styles.con2 }}>
          <DefaultText> {items.item.duration} </DefaultText>
          <DefaultText> {items.item.complexity} </DefaultText>
          <DefaultText> {items.item.affordability} </DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
  },
  txtCon: {
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
  },
  container: {
    height: 180,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    overflow: "visible",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    marginVertical: 4,
    paddingHorizontal: 4,
  },
  Row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  con1: {
    height: "85%",
  },
  con2: {
    height: "15%",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  text: {
    fontFamily: "Regular",
    color: "white",
  },
});

export default List;
