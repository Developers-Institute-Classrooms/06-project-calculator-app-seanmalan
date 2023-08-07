import ButtonContainer from "./components/ButtonContainer";
import OperationDisplay from "./components/OperationDisplay";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(["1 + 1 = 2", "2 * 2 = 4"]);
  // history is a hard fixed array. You should look at creating a function that will push the current equation into the history array. This will allow you to have a dynamic history array that will grow as the user uses the calculator.

  const theme = createTheme({
    palette: {
      primary: {
        main: "#DBD8AE",
      },
      secondary: {
        main: "#CA907E",
      },
      warning: {
        main: "#B6636E",
      },
      error: {
        main: "#9E2A2B",
      },
      info: {
        main: "#BA9D9F",
      },
    },
  });

  const buttonClicked = (char) => {
    if (isFirstOperand(char)) {
      setFirstOperand((previousValue) => previousValue + char);
    } else if (isSecondOperand(char)) {
      if (char === "=") {
        calculateResult();
      } else {
        setSecondOperand((previousValue) => previousValue + char);
      }
    } else {
      setOperator(char);
    }
  };

  const isFirstOperand = (char) => {
    return !operator && !isOperator(char);
  };

  const isSecondOperand = (char) => {
    return operator && !isOperator(char);
  };

  const isOperator = (char) => {
    return char === "+" || char === "-" || char === "*" || char === "/";
  };


  // the clearStates function does not actually clear the states. Inside the function look at setting the states back to empty strings.
  const clearStates = () => {};



  // this function will always evaluate to an addition operation
  // Think about adding if statements that will evaluate to the correct operation based on the operator state.
  const calculateResult = () => {
    setResult(Number(firstOperand) + Number(secondOperand));
    clearStates();
      // the equals sign doesnt push the current equation into the history array.
      // create a function will will create the equation and push it into the history array.
  };



  useEffect(() => {
    setOperationDisplay(
      `${firstOperand} ${operator} ${secondOperand} = ${result}`
    );
  }, [result, firstOperand, secondOperand, operator]);
  // the result  will display all of the numbers after the decimal point.
  // Look at using the toFixed() method to round the result to 2 decimal places.



  // After an equation has been completed the result stays on screen. If you try a new equation, the previous equation and answer stays there as you type in new numbers. 
// to fix this error you  should look at creating a function that will trigger the clear states after the equation is finished AND a new char is passed into the display.



  // there is no way to clear the previous equation and answer to start again. 
  // To fix this you should try create a function that will clear the states and set the states back to empty strings when called. similar to the C button on a normal calculator.



  // you can add multiple operators to the equation.
// Look at creating a function that will only allow one operator to be added to the equation and to return nothing when there is a second operator added to the equation.


  // you can add multiple decimal points to the equation.
// Look at creating a function that will only allow one decimal point to be added to the Operand and to return nothing when there is a second decimal point added to the Operand. When the operator is changed the function should allow a decimal point to be added to the second operand.


  // you can add multiple equals signs to the equation.
// Look at creating a function that will only allow one equals sign to be added to the equation and to return nothing when there is a second equals sign added to the equation. Even better is to have it just be a funtion that will run the calculate function rather then getting passed through if statements and checked against the operands/operator.


  // you can add equals sign without having any operators or operands in the equation.
  // Look at creating a function that will only allow the equals sign to be added to the equation when there is an operator and both operands in the equation.
  


  // there is no delete function (probably yet) to delete a number or operator from the equation.
  // Look at creating a function that will delete the last number or operator from the equation when the delete button is pressed. This will require you to look at the last char in the equation and remove it from the equation. You will also need to look at the operator state and remove it from the equation if it is the last char in the equation.
  

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ButtonContainer
          onButton={buttonClicked}
          onClear={() => setHistory([])}
        ></ButtonContainer>
        <OperationDisplay d={operationDisplay} h={history}></OperationDisplay>
      </div>
    </ThemeProvider>
  );
}

export default App;
