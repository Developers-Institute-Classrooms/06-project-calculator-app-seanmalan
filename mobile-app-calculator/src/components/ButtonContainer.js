import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { FlatList } from "react-native";

const ButtonContainer = () => {
  const createOperands = () => {
    const operands = [];
    for (let i = 1; i < 10; i++) {
      operands.push(
        <TouchableOpacity key={i} style={styles.button}>
          <Text>
            {i}
          </Text>
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
        <View >
          <TouchableOpacity style={styles.button}>
          <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          title="-" 
          style={styles.button}
          ><Text>-</Text></TouchableOpacity>
          <TouchableOpacity title="*" style={styles.button}><Text>x</Text></TouchableOpacity>
          <TouchableOpacity title="/" style={styles.button}><Text>/</Text></TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity title="0" style={styles.button}><Text>0</Text></TouchableOpacity>
          <TouchableOpacity title="." style={styles.button}><Text>.</Text></TouchableOpacity>
          <TouchableOpacity title="DEL"  style={styles.button}><Text>DEL</Text></TouchableOpacity>
          <TouchableOpacity title="AC" style={styles.button}><Text>AC</Text></TouchableOpacity>
        </View>

        <View >{createOperands()}</View>
        {/* </FlatList> */}
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
