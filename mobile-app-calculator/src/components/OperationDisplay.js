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
        <Collapse style={styles.accordian}>
          <CollapseHeader testID="calculation-history">
            <View>
              <Text style={styles.accordianTitle}>Calculation History:</Text>
            </View>
          </CollapseHeader>
          <CollapseBody testID="history-array">
            {history.map((item, index) => (
              <ScrollView>
                <Text
                  style={styles.accordianBody}
                  testID={`calculation${index}`}
                  keyExtractor={(item) => item.key}
                >
                  {item}
                </Text>
              </ScrollView>
            ))}
          </CollapseBody>
        </Collapse>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "flex-start",
          padding: 5,
          marginBottom: 12,
        }}
      >
        <Text style={styles.Text}>Current Calculation:</Text>

        <View style={styles.calculation}>
          <Text style={styles.Operation} testID="calculator-display">
            {shownText}
          </Text>
        </View>
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
    width: "100%",
    height: "50%",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 2,
    padding: 5,
    alignItems: "flex-end",
    justifyContent: "center",
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
  },
});
