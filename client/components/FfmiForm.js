import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

// Helpers
import {
  ffmi as getFfmi,
  normalizedFfmi as getFfmiNormalized,
  bmi as getBmi,
  newBmi as getNewBmi,
} from "../../helpers/mass";

import { maxDeficit as getMaxDeficit } from "../../helpers/deficit";

export class FfmiForm extends Component {
  static textInputStyle = { height: 40, borderColor: "gray", borderWidth: 1 };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      mass: "",
      height: "",
      bodyFatPercentage: "",
      bmi: null,
      ffmi: null,
      ffmiNormalized: null,
      maxDeficit: null,
      getNewBmi: null,
    };
  }

  handleMassChange = mass => this.setState(() => ({ mass }));
  handleHeightChange = height => this.setState(() => ({ height }));
  handleBodyFatPercentageChange = bodyFatPercentage => this.setState(() => ({ bodyFatPercentage }));
  calculate = () => {
    const { mass, height, bodyFatPercentage } = this.state;
    if (!mass && !height && !bodyFatPercentage) {
      this.setState(() => ({ error: "Please enter all required values." }));
      return;
    }
    const massAsNumber = parseFloat(mass);
    const heightAsNumber = parseFloat(height);
    const bodyFatPercentageAsNumber = parseFloat(bodyFatPercentage) / 100;
    const bmi = getBmi(massAsNumber, heightAsNumber);
    const newBmi = getNewBmi(massAsNumber, heightAsNumber);
    const ffmi = getFfmi(massAsNumber, heightAsNumber, bodyFatPercentageAsNumber);
    const ffmiNormalized = getFfmiNormalized(
      massAsNumber,
      heightAsNumber,
      bodyFatPercentageAsNumber,
    );
    const maxDeficit = getMaxDeficit(massAsNumber, bodyFatPercentageAsNumber);
    this.setState(() => ({ ffmi, ffmiNormalized, bmi, maxDeficit, newBmi }));
  };

  render() {
    const {
      mass,
      height,
      bodyFatPercentage,
      ffmi,
      ffmiNormalized,
      error,
      bmi,
      maxDeficit,
    } = this.state;
    return (
      <View>
        {error ? <Text>{error}</Text> : null}
        <Text>Mass (kg)</Text>
        <TextInput
          style={this.textInputStyle}
          onChangeText={this.handleMassChange}
          keyboardType="numeric"
          value={mass}
        />
        <Text>Height (m)</Text>
        <TextInput
          style={this.textInputStyle}
          onChangeText={this.handleHeightChange}
          keyboardType="numeric"
          value={height}
        />
        <Text>Body Fat (%)</Text>
        <TextInput
          style={this.textInputStyle}
          onChangeText={this.handleBodyFatPercentageChange}
          keyboardType="numeric"
          value={bodyFatPercentage}
        />
        <Button onPress={this.calculate} title="Calculate" color="#841584" />
        {bmi ? <Text>BMI: {bmi}</Text> : null}
        {ffmi ? <Text>FFMI: {ffmi}</Text> : null}
        {ffmiNormalized ? <Text>FFMI (normalized): {ffmiNormalized}</Text> : null}
        {maxDeficit ? <Text>Maximum Deficit: {maxDeficit} kcals</Text> : null}
        {getNewBmi ? <Text>New BMI {newBmi} kcals</Text> : null}
      </View>
    );
  }
}

export default FfmiForm;
