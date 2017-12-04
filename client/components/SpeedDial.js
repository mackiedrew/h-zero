import React from "react";

// Components
import { ActionButton } from "react-native-material-ui";

export const SpeedDial = () => (
  <ActionButton
    icon="add"
    actions={[
      { icon: "favorite", name: "vitals", label: "Log Vitals" },
      { icon: "restaurant-menu", name: "food", label: "Log Food" },
      { icon: "directions-run", name: "exercise", label: "Log Exercise" },
    ]}
    transition="speedDial"
  />
);

export default SpeedDial;
