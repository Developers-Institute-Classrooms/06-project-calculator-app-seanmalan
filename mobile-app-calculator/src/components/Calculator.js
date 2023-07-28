import { Button, Text, View, StyleSheet } from "react-native";
import { React, useState, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import OperationDisplay from "./OperationDisplay";

const Calculator = () => {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [history, setHistory] = useState(["1 + 1 = 2", "2 * 2 = 4"]);
  const [result, setResult] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");

  

  const isFirstOperand = (value) => {
    return !operator && !operator.includes(value);
  };

  const isSecondOperand = (value) => {
    return operator && !operator.includes(value);
  };


const operators = ["+", "-", "*", "/"];


  const buttonClicked = (value) => {

    if (value === "DEL") {
      deleteLast();
      return;

    } else if (value === "A/C") {
      onClear();
      return;
    }

    if (operators.includes(value)) {
      setOperator(value);
      return;
    }

    if (value === ".") {
      if (isFirstOperand(value) && firstOperand.includes(".")) {
        return;
      } else if (isSecondOperand(value) && secondOperand.includes(".")) {
        return;
      }

      
    }
    if (isFirstOperand(value)) {
      setFirstOperand((previousValue) => previousValue + value);
    } 
      else if (isSecondOperand(value)) {
        setSecondOperand((previousValue) => previousValue + value);
      }
    
    
  };





  const calculate = () => {
    if (firstOperand === "" || secondOperand === "") {
      return;
    }

    if (operator === "+") {
    setResult(Number(firstOperand) + Number(secondOperand));
    } else if (operator === "-") {
      setResult(Number(firstOperand) - Number(secondOperand));
    } else if (operator === "*") {
      setResult(Number(firstOperand) * Number(secondOperand));
    } else if (operator === "/") {
      setResult(Number(firstOperand) / Number(secondOperand));
    }
    clearStates();
  };



  const onClear = () => {
    setOperationDisplay("");
    setFirstOperand("");
    setSecondOperand("");
    setOperator("");
    setResult("");
  };



  const deleteLast = () => {
    if (result !== "") {
      onClear();
      return;
    }
    if (secondOperand) {
      setSecondOperand((previousValue) =>
        previousValue.substring(0, previousValue.length - 1)
      );
    } else if (operator) {
      setOperator("");
    } else if (firstOperand) {
      setFirstOperand((previousValue) =>
        previousValue.substring(0, previousValue.length - 1)
      );
    }
  };



  const clearStates = () => {
    setFirstOperand("");
    setSecondOperand("");
    setOperator("");
  };





  useEffect(() => {
    setOperationDisplay(
      `${firstOperand} ${operator} ${secondOperand} = ${result}`
    );
  }, [result, firstOperand, secondOperand, operator]);



  return (
    <View style={{ flex: 1 }}>
      <View className="Display" style={styles.Display}>
        <OperationDisplay display={operationDisplay} history={history} />
      </View>
      <View className="Buttons" style={styles.Buttons}>
        <ButtonContainer
          onPress={buttonClicked}
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
  },
});
export default Calculator;
