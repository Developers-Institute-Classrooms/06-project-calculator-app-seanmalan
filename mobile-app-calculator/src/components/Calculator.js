import { Button, Text, View } from "react-native";
import React from "react";
import ButtonContainer from "./ButtonContainer";

const Calculator = () => {
  return (
    <View>
      <Text>0</Text>
      <View className="Display">
        <Text>Here is the display!</Text>
      </View>
      <View className="Buttons">
        <ButtonContainer />
      </View>

      {/* This button is to check that react-native buttons work but the mui buttons cause problems. */}
      <Button title="Touch Me" />
    </View>
  );
};
export default Calculator;
