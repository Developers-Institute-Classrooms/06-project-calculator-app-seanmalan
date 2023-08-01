import { StyleSheet, Text, View, ScrollView } from "react-native";
import { React } from "react";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  
} from "accordion-collapse-react-native";

const OperationDisplay = ({ display, history, answer }) => {

  let shownText = answer;
  if (display.length > 2) {
    shownText = display;
  }

  return (
    <View style={styles.display}>
      <View>
        <Collapse style={styles.accordian} >
          <CollapseHeader testID="calculation-history">
            <View>
              <Text style={styles.accordianTitle}>Calculation History:</Text>
            </View>
          </CollapseHeader>
          <CollapseBody >
            {history.map((item, index) => (
              
              <ScrollView>
                <Text style={styles.accordianBody} testID={`calculation${index}`}>{item}</Text>
              </ScrollView>
            ))}
          </CollapseBody>
        </Collapse>
      </View>


      <Text style={styles.Text}>Current Calculation:</Text>
  
      <View style={styles.calculation}>
        <Text style={styles.Operation} testID="calculator-display">
        {shownText}
        </Text>
      </View>
    </View>

  );
};

export default OperationDisplay;

const styles = StyleSheet.create({
  display: {
    backgroundColor: "#fff",
    width: "90%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
  },

  calculation: {
    backgroundColor: "white",
    width: "100%",
    height: "50%",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 2,
    padding: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderRadius: 10,
  },

  Text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    alignSelf: "flex-start",
    marginTop: 20,
  },
  Operation: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },

  accordian: {
    marginBottom: 10,
  },


  accordianTitle: {
    backgroundColor: "#eee",
    fontSize: 20,
    fontWeight: "bold",


  },

  accordianBody: {
    backgroundColor: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "flex-end",
  }
});
