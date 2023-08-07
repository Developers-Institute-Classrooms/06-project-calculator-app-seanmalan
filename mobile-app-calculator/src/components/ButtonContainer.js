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
  const buttonData = [
    { title: "7" },
    { title: "8" },
    { title: "9" },
    { title: "/", background: {backgroundColor: "#CA907E"}},
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "*", background: {backgroundColor: "#CA907E"} },
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "-", background: {backgroundColor: "#CA907E"} },
    { title: "0" },
    { title: "."},
    { title: "DEL", background: {backgroundColor: "#B6636E"} },
    { title: "+", background: {backgroundColor: "#CA907E"} },
  ];


  const OperationButton = ({ title,background }) => (
     <TouchableOpacity
      style={[styles.TouchableOpacity, background]}
      onPress={() => onPress(title.toString())}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
);


  return (
    <View style={ styles.buttonClass}>
      <View style={styles.clearButtons}>

        <TouchableOpacity
          title="Clear History"
          style={styles.clearHistory}
          onPress={() => onClearHistory()}
        >
          <Text style={styles.text}>Clear History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="A/C"
          style={styles.Ac}
          onPress={() => onClear()}
        >
          <Text style={styles.text}>A/C</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.buttons}>
        <FlatList
          data={buttonData}
          renderItem={({ item }) => <OperationButton title={item.title} background={item.background} />}
          keyExtractor={(item) => item.title}
          numColumns={4}
          style={styles.button}
        />
      </View>

      
        <TouchableOpacity
          title="="
          style={styles.equalButton}
          onPress={() => onCalculate()}
        >
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
    
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
    width: "90%",
    backgroundColor: "#DBD8AE",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    padding: 13,
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
    padding: 13,
  },

  buttonClass: {
    alignSelf: "center",
    justifyContent: "flex-start",
    marginHorizontal: 2,
    marginBottom: 12,
    padding: 2,
    width: "100%",
    height: "90%",
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
    
    padding: 13,
  },

  Ac: {
    borderRadius: 10,
    alignItems: "center",
    alignContent: "flex-end",
    width: "24%",
    backgroundColor: "#CA907E",
    borderWidth: 1,
    borderColor: "black",
    padding: 13,
  },

  clearButtons: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    width: "90%",
    marginHorizontal: 2,
  },

  equalButton: {
    height: 50,
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

  text: {
    fontSize: 10,
    fontWeight: "bold",
  }

});
