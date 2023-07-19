import { Button, Text, View } from "react-native";
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
    operators.includes(value) && operators.includes(operationDisplay.slice(-1))
  ) {
    return;
  }

  setOperationDisplay(operationDisplay + value);

  
}

const calculate = () => {
  const result = (eval(operationDisplay).toString());
  setResult(result);
  setHistory([...history, `${operationDisplay} = ${result}`]);
  setOperationDisplay(result);
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
    <View>
      <View className="Display">
        <OperationDisplay
         d={operationDisplay}
         h={history}
         />
      </View>
      <View className="Buttons">
        <ButtonContainer onPress={buttonClicked}
          onClearHistory={() => setHistory([])}
          onClear={onClear}
          onCalculate={calculate}
          onDelete={deleteLast}
          />
      </View>

      {/* This button is to check that react-native buttons work but the mui buttons cause problems. */}
      <Button title="Touch Me" />
    </View>
  );
};
export default Calculator;
