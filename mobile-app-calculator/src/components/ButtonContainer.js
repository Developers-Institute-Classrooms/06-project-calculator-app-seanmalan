import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";

const ButtonContainer = ({
  onPress,
  onClear,
  onClearHistory,
  onCalculate,
  onDelete,
}) => {
  const DATA = [
    { id: "7", title: "7", onPress: () => onPress("7") },
    { id: "8", title: "8" },
    { id: "9", title: "9" },
    { id: "/", title: "/" },
    { id: "4", title: "4" },
    { id: "5", title: "5" },
    { id: "6", title: "6" },
    { id: "*", title: "*" },
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
    { id: "-", title: "-" },
    { id: "0", title: "0" },
    { id: ".", title: "." },
    { id: "DEL", title: "DEL" },
    { id: "+", title: "+" },
  ];

  const Item = ({ title }) => (
    <TouchableOpacity
      style={styles.TouchableOpacity}
      onPress={() => onPress(title.toString())}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.clearButtons}>

        <Pressable
          title="Clear History"
          style={styles.clearHistory}
          onPress={() => onClearHistory()}
        >
          <Text>Clear History</Text>
        </Pressable>
        <TouchableOpacity
          title="A/C"
          style={styles.TouchableOpacity}
          onPress={() => onClear()}
        >
          <Text>AC</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
          numColumns={4}
          style={styles.button}
        />
      </View>

      <View style={styles.equalButton}>
        <Pressable
          title="="
          // style={styles.equalButton}
          onPress={() => onCalculate()}
        >
          <Text>=</Text>
        </Pressable>
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
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    padding: 15,
  },

  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    marginHorizontal: 2,
    marginVertical: 2,
    padding: 2,
    width: "90%",
  },

  button: {
    borderRadius: 10,
    alignSelf: "center",
    alignContent: "center",
    
  },

  clearHistory: {
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    width: "75%",
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "black",
    arginHorizontal: 2,
    // marginVertical: 2,
    padding: 15,
  },

  clearButtons: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    marginHorizontal: 2,
  },

  equalButton: {
    height: "15%",
    width: "90%",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
});
