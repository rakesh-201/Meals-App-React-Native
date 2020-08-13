import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoryScreen from "../Screens/CategoryScreen";
import Category1Screen from "../Screens/Category1Screen";
import DetailScreen from "../Screens/DetailScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import FilterScreen from "../Screens/FilterScreen";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const StackNavigator = createStackNavigator({
    Category: CategoryScreen,
    Meals: Category1Screen,
    Detail: DetailScreen,
}, {
    defaultNavigationOptions: {
        headerTitle: "Meals App",
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "black",
        },
        headerTitleStyle: {
            fontFamily: "Bold",
            // fontSize: 25,
        },
    },
});

const StackNavigatorFav = createStackNavigator({
    Favourite: FavouritesScreen,
    Detail: DetailScreen,
}, {
    defaultNavigationOptions: {
        headerTitle: "Meals App",
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "black",
        },
        headerTitleStyle: {
            fontFamily: "Bold",
            // fontSize: 25,
        },
    },
});

const screens = {
    Meals: {
        screen: StackNavigator,
        navigationOptions: {
            tabBarColor: "black",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = "ios-restaurant"
                color = "white"
                size = { 25 }
                />;
            },
        },
    },
    Favourites: {
        screen: StackNavigatorFav,
        navigationOptions: {
            tabBarColor: "rgb(250, 75, 104)",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = "ios-star"
                color = "white"
                size = { 25 }
                />;
            },
        },
    },
};

const tabNavigator =
    Platform.OS === "android" ?
    createMaterialBottomTabNavigator(screens, {
        activeColor: "white",
        shifting: true,
    }) :
    createBottomTabNavigator(screens, {
        tabBarOptions: {
            activeTintColor: "black",
        },
    });

const filtersNavigator = createStackNavigator({
    filter: FilterScreen,
}, {
    defaultNavigationOptions: {
        headerTitle: 'Filters',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'black',
        },
    }
})

const DrawerNavigator = createDrawerNavigator({
    Meals: tabNavigator,
    Filters: filtersNavigator,
})

export default createAppContainer(DrawerNavigator);