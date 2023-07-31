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

  const clearStates = () => {};

  // this function wil always evaluate to an addition operation
  const calculateResult = () => {
    setResult(Number(firstOperand) + Number(secondOperand));
    clearStates();
  };

  useEffect(() => {
    setOperationDisplay(
      `${firstOperand} ${operator} ${secondOperand} = ${result}`
    );
  }, [result, firstOperand, secondOperand, operator]);



  // After an equation has been completed the result stays on screen. If you try a new equation, the previous equation and answer stays there as you type in new numbers. 

  // there is no way to clear the previous equation and answer to start again. 

  // you can add multiple operators to the equation.

  // you can add multiple decimal points to the equation.

  // you can add multiple equals signs to the equation.

  // you can add equals sign without having any operators or operands in the equation.
  
  // there is no delete function (probably yet) to delete a number or operator from the equation.
  // 

  // the equals sign doesnt push the current equation into the history array.

  // the history is firmly set so whenever you reload the app it sets a default history.


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
