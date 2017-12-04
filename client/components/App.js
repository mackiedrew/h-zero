import React, { Component } from "react";
import { ScrollView, StyleSheet, View, StatusBar } from "react-native";
import { Toolbar, COLOR, ThemeProvider, ActionButton } from "react-native-material-ui";

// Components
import { NativeRouter, Route, Link } from "react-router-native";
import BottomNavigator from "./BottomNavigator";
import SpeedDial from "./SpeedDial";

// Scenes
import Vitals from "../scenes/Vitals";
import Tools from "../scenes/Tools";

const uiTheme = {
  palette: {
    primaryColor: COLOR.purple500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  topContent: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  toolBar: {
    flexGrow: 0,
    flexShrink: 0,
  },
  mainContent: {
    flexGrow: 1,
    overflow: "scroll",
  },
});

export class App extends Component {
  render() {
    return (
      <NativeRouter>
        <ThemeProvider uiTheme={uiTheme}>
          <View style={styles.container}>
            <View style={styles.topContent}>
              <StatusBar hidden />
              <Toolbar style={StyleSheet.flatten(styles.toolBar)} leftElement="menu" />
              <ScrollView style={styles.mainContent}>
                <Route exact path="/" render={Vitals} />
                <Route exact path="/tools" render={Tools} />
              </ScrollView>
              <SpeedDial />
            </View>
            <BottomNavigator />
          </View>
        </ThemeProvider>
      </NativeRouter>
    );
  }
}

export default App;
