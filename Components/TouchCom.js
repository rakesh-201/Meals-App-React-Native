import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import CategoryScreen from "../Screens/CategoryScreen";

function TouchCom(props) {
  let Touch = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= "21") {
    Touch = TouchableNativeFeedback;
  }
  return (
    <Touch onPress={props.onClick}>
      <View style={{ ...styles.container, ...props.color }}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </Touch>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 10,
    overflow: "hidden",
    margin: 15,
    flex: 1,
  },
  text: {
    fontSize: 18,
    padding: 10,
    fontFamily: "Regular",
  },
});

export default TouchCom;
