import { Button, Text, View, StyleSheet } from "react-native";
import {React, useState} from "react";
import ButtonContainer from "./ButtonContainer";
import OperationDisplay from "./OperationDisplay";

const Calculator = () => {
  const [operationDisplay, setOperationDisplay] = useState("0");
  const [history, setHistory] = useState(["1 + 1 = 2", "2 * 2 = 4"]);
  const [result, setResult] = useState("");

const operators = ["+", "-", "*", "/", "."];

const buttonClicked = (value) => {
  if (
    operators.includes(value) && operationDisplay === "" ||
    operators.includes(value) && operators.includes(operationDisplay.slice(-1)) || value.includes(".") && operationDisplay.includes("."))
   {
    return;
  }

  if (value === "DEL") {
    deleteLast();
    return;
  }
  
  setOperationDisplay(operationDisplay + value);

  
}

const calculate = () => {

  if (operationDisplay === "") {
    return;
  } else if (operationDisplay !== "" || operationDisplay === "0") {
  const result = (eval(operationDisplay).toString());
  setResult(result);
  setHistory([...history, `${operationDisplay} = ${result}`]);
  setOperationDisplay(result);
}
}



const onClear = () => {
  setOperationDisplay("");
  setResult("");
}

const deleteLast = () => {
  if (operationDisplay === "") {
    return;
  }
  const value = operationDisplay.slice(0, -1);
  setOperationDisplay(value);
}


  return (
    <View style={{flex: 1}}>
      <View className="Display" style={styles.Display}>
        <OperationDisplay
         display={operationDisplay}
         history={history}
         />
      </View>
      <View className="Buttons" style={styles.Buttons}>
        <ButtonContainer onPress={buttonClicked}
          onClearHistory={() => setHistory([])}
          onClear={onClear}
          onCalculate={calculate}
          onDelete={deleteLast}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Display: {
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: 10,
  },

  
  Buttons: {
    flex: 1,
    justifyContent: "flex-start",
    
  }
})
export default Calculator;
