import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";

const ButtonContainer = ({
  onPress,
  onClear,
  onClearHistory,
  onCalculate,
}) => {
  const DATA = [
    { id: "7", title: "7" },
    { id: "8", title: "8" },
    { id: "9", title: "9" },
    { id: "/", title: "/", background: {backgroundColor: "#CA907E"}},
    { id: "4", title: "4" },
    { id: "5", title: "5" },
    { id: "6", title: "6" },
    { id: "*", title: "*", background: {backgroundColor: "#CA907E"} },
    { id: "1", title: "1" },
    { id: "2", title: "2" },
    { id: "3", title: "3" },
    { id: "-", title: "-", background: {backgroundColor: "#CA907E"} },
    { id: "0", title: "0" },
    { id: ".", title: "." },
    { id: "DEL", title: "DEL", background: {backgroundColor: "#B6636E"} },
    { id: "+", title: "+", background: {backgroundColor: "#CA907E"} },
  ];



  const Item = ({ title,background }) => (
     <TouchableOpacity
      style={[styles.TouchableOpacity, background]}
      onPress={() => onPress(title.toString())}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>

);


  return (
    <>
    <View>
      <View style={styles.clearButtons}>

        <TouchableOpacity
          title="Clear History"
          style={styles.clearHistory}
          onPress={() => onClearHistory()}
        >
          <Text>Clear History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="A/C"
          style={styles.Ac}
          onPress={() => onClear()}
        >
          <Text>AC</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.buttons}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} background={item.background} />}
          keyExtractor={(item) => item.id}
          numColumns={4}
          style={styles.button}
        />
      </View>




</View>


      <View>
        <TouchableOpacity
          title="="
          style={styles.equalButton}
          onPress={() => onCalculate()}
        >
          <Text>=</Text>
        </TouchableOpacity>
      </View>
      </>
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
    width: "75%",
    backgroundColor: "#DBD8AE",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    padding: 15,
  },

  operators: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    backgroundColor: "#CA907E",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    margin: 2,
    padding: 15,
  },

  buttonClass: {
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 2,
    marginVertical: 2,
    padding: 2,
    width: "90%",
  },

  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    marginHorizontal: 2,
    marginVertical: 2,
    padding: 2,
    width: "75%",
  },

  bottomButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
    marginHorizontal: 3,
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
    width: "74%",
    backgroundColor: "#9E2A2B",
    borderWidth: 1,
    borderColor: "black",
    
    padding: 15,
  },

  Ac: {
    borderRadius: 10,
    alignItems: "center",
    alignContent: "flex-end",
    width: "24%",
    backgroundColor: "#CA907E",
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
  },

  clearButtons: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    width: "90%",
    marginHorizontal: 2,
  },

  equalButton: {
    height: 55,
    width: "90%",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "#BA9D9F",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
});
