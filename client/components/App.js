import React, { Component } from "react"
import { ScrollView, StyleSheet, Text, View, StatusBar } from "react-native"
import { COLOR, ThemeProvider } from "react-native-material-ui"
import { Toolbar, BottomNavigation } from "react-native-material-ui"

import { NativeRouter, Route, Link } from "react-router-native"

const uiTheme = {
  palette: {
    primaryColor: COLOR.purple500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  toolBar: {
    flexGrow: 0,
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    overflow: "scroll",
  },
  bottomNavigation: {
    flexGrow: 0,
    flexShrink: 0,
  },
})

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: "today",
    }
  }
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={COLOR.purple500}
            barStyle="dark-content"
            translucent={false}
          />
          <Toolbar style={StyleSheet.flatten(styles.toolBar)} leftElement="menu" />
          <ScrollView style={styles.content}>
            <NativeRouter>
              <View>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <View>
                      <Text>Welcome to React Router Native!</Text>
                      <Link to="/one">
                        <Text>Go to /one</Text>
                      </Link>
                    </View>
                  )}
                />

                <Route
                  exact
                  path="/one"
                  render={() => (
                    <View>
                      <Text>ONE!</Text>
                      <Link to="/" replace>
                        <Text>Go Back</Text>
                      </Link>
                    </View>
                  )}
                />
              </View>
            </NativeRouter>
          </ScrollView>
          <BottomNavigation
            style={StyleSheet.flatten(styles.bottomNavigation)}
            active={this.state.active}
            hidden={false}
          >
            <BottomNavigation.Action
              key="health"
              icon="favorite"
              label="Health"
              onPress={() => this.setState(() => ({ active: "health" }))}
            />
            <BottomNavigation.Action
              key="input"
              icon="trending-up"
              label="Input"
              onPress={() => this.setState(() => ({ active: "input" }))}
            />
            <BottomNavigation.Action
              key="output"
              icon="trending-down"
              label="Output"
              onPress={() => this.setState(() => ({ active: "output" }))}
            />
            <BottomNavigation.Action
              key="settings"
              icon="settings"
              label="Settings"
              onPress={() => this.setState(() => ({ active: "settings" }))}
            />
          </BottomNavigation>
        </View>
      </ThemeProvider>
    )
  }
}

export default App
