import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import React from "react";
import { FlatList } from "react-native";

const ButtonContainer = ({ onPress, onClear, onClearHistory, onCalculate, onDelete }) => {


  const createOperands = () => {
    const operands = [];
    for (let i = 1; i < 10; i++) {
      operands.push(
        <TouchableOpacity
          key={i}
          style={styles.button}
          title={i}
          onPress={() => onPress(i.toString())}
        >
          <Text>{i}</Text>
        </TouchableOpacity>
      );
    }
    return operands;
  };

  return (
    <View
    // style={styles.TouchableOpacity}
    >
      <View>
        {/* <FlatList > */}
        <View>
          <TouchableOpacity style={styles.button} onPress={() => onPress("+")}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity title="-" style={styles.button} onPress={() => onPress("-")}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity title="*" style={styles.button} onPress={() => onPress("*")}>
            <Text>x</Text>
          </TouchableOpacity>
          <TouchableOpacity title="/" style={styles.button} onPress={() => onPress("/")}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity title="0" style={styles.button} onPress={() => onPress("0")}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity title="." style={styles.button} onPress={() => onPress(".")}>
            <Text>.</Text>
          </TouchableOpacity>
          <TouchableOpacity title="DEL" style={styles.button} onPress={() => onDelete()}>
            <Text>DEL</Text>
          </TouchableOpacity>
        </View>

        <View>{createOperands()}</View>
        {/* </FlatList> */}

        <Button title="=" style={styles.button} onPress={() => onCalculate()}>
          <Text>=</Text>
        </Button>

          <TouchableOpacity title="AC" style={styles.button} onPress={() => onClear()}>
            <Text>AC</Text>
          </TouchableOpacity>

        <Button title="Clear History" style={styles.button} onPress={() => onClearHistory()}>
          <Text>Clear History</Text>
        </Button>
      </View>
    </View>
  );
};
export default ButtonContainer;

const styles = StyleSheet.create({
  TouchableOpacity: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    width: "50%",
    height: "100%",
    backgroundColor: "#eee",
  },
  button: {
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
  },
  buttons: {
    flex: 1,
    backgroundColor: "green",
  },
});
