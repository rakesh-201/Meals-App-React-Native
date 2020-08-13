import React from "react";
import { StyleSheet } from "react-native";
import StackNavigator from "./Navigation/StackNavigator";
import { useFonts } from "@expo-google-fonts/inter";
import { AppLoading } from "expo";
import { combineReducers, createStore } from "redux";
import mealsReducer from "./store/reducer/meals";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const rootReducer = combineReducers({
    meals: mealsReducer,
  });
  const store = createStore(rootReducer);

  const [Fonts, error] = useFonts({
    Regular: require("./assets/Fonts/PlayfairDisplay-Regular.ttf"),
    Bold: require("./assets/Fonts/PlayfairDisplay-Bold.ttf"),
  });

  if (!Fonts) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StackNavigator />
        <StatusBar style="light" />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
