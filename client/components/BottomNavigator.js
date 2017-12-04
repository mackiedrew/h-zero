import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-material-ui";
import { withRouter } from "react-router-native";

const styles = StyleSheet.create({
  bottomNavigation: {
    flexGrow: 0,
    flexShrink: 0,
  },
});

export class BottomNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "today",
    };
  }
  navigate = (route, tab) => () => {
    this.props.history.push(route);
    this.setState(() => ({ active: tab }));
  };
  render() {
    return (
      <BottomNavigation
        style={StyleSheet.flatten(styles.bottomNavigation)}
        active={this.state.active}
        hidden={false}
      >
        <BottomNavigation.Action
          key="vitals"
          icon="favorite"
          label="Vitals"
          onPress={this.navigate("/", "vitals")}
        />
        <BottomNavigation.Action
          key="tools"
          icon="build"
          label="Tools"
          onPress={this.navigate("/tools", "tools")}
        />
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNavigator);
