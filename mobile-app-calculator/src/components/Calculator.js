import { Button, Text, View, StyleSheet } from "react-native";
import { React, useState, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import OperationDisplay from "./OperationDisplay";

const Calculator = () => {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [history, setHistory] = useState(["1+2=3","2+5=7"]);
  const [result, setResult] = useState("");
  const [shownResult, setShownResult] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");

  
// useEffect(() => {
// const storeData = async (array) => {
//     try {
//       const jsonValue = JSON.stringify(array);
//       await AsyncStorage.setItem('my-key', jsonValue);
//     } catch (e) {
//       // saving error
//     }
//   };

//   storeData(history);
// }, [history]);


// useEffect(() => {
//   const getData = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem('my-key');
//       return jsonValue != null ? JSON.parse(jsonValue) : null;
//     } catch(e) {
//       // error reading value
//     }
//   };

//   getData()
// }, []);




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
      if (isFirstOperand === "" || OperationDisplay === "=") {
        return;
      }

      if (isSecondOperand === "") {
        return;
      }


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



  useEffect(() => {
    const settingDisplay = () => {
      if (result !== "") {
      setOperationDisplay(
        `${firstOperand} ${operator} ${secondOperand} = ${result.toFixed(2)}`
      );
      setHistory([...history, `${operationDisplay} = ${result.toFixed(2)}`]);
      setShownResult(
        `${firstOperand} ${operator} ${secondOperand} = ${result.toFixed(2)}`
      );
      clearStates();
      } else {
        setOperationDisplay(`${firstOperand} ${operator} ${secondOperand}`);
      }
  
    };

    settingDisplay();
    }, [firstOperand, secondOperand, operator, result]);
  
  
  



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
    
    
    
    settingDisplay();
  };



  const onClear = () => {
    setOperationDisplay("");
    setFirstOperand("");
    setSecondOperand("");
    setOperator("");
    setResult("");
    setShownResult("");
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
    setResult("");
  };

  return (
    <View style={{ flex: 1 }}>
      <View className="Display" style={styles.Display}>
        <OperationDisplay display={operationDisplay} history={history} answer={shownResult}/>
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
