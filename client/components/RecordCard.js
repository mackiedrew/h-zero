import React from "react";
import { View } from "react-native";
import { Card } from "react-native-material-ui";

export const RecordCard = ({ children }) => (
  <View>
    <Card>{children}</Card>
  </View>
);

export default RecordCard;
