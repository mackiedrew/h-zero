import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { COLOR, ThemeProvider } from "react-native-material-ui"
import { Toolbar } from "react-native-material-ui"

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
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
    alignItems: "center",
    justifyContent: "flex-start",
  },
})

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={styles.container}>
          <StatusBar backgroundColor={COLOR.green500} barStyle="dark-content" translucent={false} />
          <Toolbar leftElement="menu" />
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically relad.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </ThemeProvider>
    )
  }
}
