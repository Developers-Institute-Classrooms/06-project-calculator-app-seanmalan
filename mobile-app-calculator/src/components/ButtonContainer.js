import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

const ButtonContainer = () => {
  const createOperands = () => {
    const operands = [];
    for (let i = 1; i < 10; i++) {
      operands.push(
        <TouchableOpacity style={styles.TouchableOpacity} key={i}>
          <Text>
            {i}
          </Text>
        </TouchableOpacity>
      );
    }
    return operands;
  };

  return (
    <View style={styles.TouchableOpacity}>
    <View >
        <View>
          <TouchableOpacity title="+">
          <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity title="-" style={styles.button}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity title="*"><Text>x</Text></TouchableOpacity>
          <TouchableOpacity title="/"><Text>/</Text></TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity title="0"><Text>0</Text></TouchableOpacity>
          <TouchableOpacity title="."><Text>.</Text></TouchableOpacity>
          <TouchableOpacity title="DEL"  style={styles.button}><Text>DEL</Text></TouchableOpacity>
          <TouchableOpacity title="AC"><Text>AC</Text></TouchableOpacity>
        </View>

        <View>{createOperands()}</View>
      </View>
    </View>
  );
};
export default ButtonContainer;

const styles = StyleSheet.create({
  TouchableOpacity: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    width: 100,
    height: "100%",
    backgroundColor: "#eee",
  },
  button: {
    // width: "25%",
    // height: "25%",
    backgroundColor: "yellow",
  },
  buttons: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
  },
  calculatorControls: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
});
