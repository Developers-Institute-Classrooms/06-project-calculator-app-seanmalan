import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Calculator from "./Calculator";

describe("Calculator", () => {
  test("should display on the screen", () => {
    render(<Calculator />);

    const calculatorHistory = screen.getByText(/Calculation History:/i);
    expect(calculatorHistory).toBeTruthy();

    const currentCalculation = screen.getByText(/Current Calculation:/i);
    expect(currentCalculation).toBeTruthy();

    const buttonContainer = screen.getByTestId("button-container");
    expect(buttonContainer).toBeTruthy();
  });
});

//***************************************** */
test("should update operation display when buttons are clicked", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const button1 = getByText("1");
  fireEvent.press(button1);
  expect(getByTestId("calculator-display").props.children).toBe("1  ");

  const button2 = getByText("2");
  fireEvent.press(button2);
  expect(getByTestId("calculator-display").props.children).toBe("12  ");

  const buttonPlus = getByText("+");
  fireEvent.press(buttonPlus);
  expect(getByTestId("calculator-display").props.children).toBe("12 + ");

  const button3 = getByText("3");
  fireEvent.press(button3);
  expect(getByTestId("calculator-display").props.children).toBe("12 + 3");

  const buttonEqual = getByText("=");
  fireEvent.press(buttonEqual);
  expect(getByTestId("calculator-display").props.children).toBe(
    "12 + 3 = 15.00"
  );
});

// *****************************************
test("should clear the operation display when the clear button is clicked", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const button1 = getByText("1");
  fireEvent.press(button1);
  expect(getByTestId("calculator-display").props.children).toBe("1  ");

  const button2 = getByText("2");
  fireEvent.press(button2);
  expect(getByTestId("calculator-display").props.children).toBe("12  ");

  const buttonClear = getByText("A/C");
  fireEvent.press(buttonClear);
  expect(getByTestId("calculator-display").props.children).toBe("");
});

// *****************************************
test("Should delete the last character when the delete button is clicked", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const button1 = getByText("1");
  fireEvent.press(button1);
  expect(getByTestId("calculator-display").props.children).toBe("1  ");

  const button2 = getByText("2");
  fireEvent.press(button2);
  expect(getByTestId("calculator-display").props.children).toBe("12  ");

  const buttonDelete = getByText("DEL");
  fireEvent.press(buttonDelete);
  expect(getByTestId("calculator-display").props.children).toBe("1  ");
});

// *****************************************
test("Should delete the operand & operator when I press the delete button", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const button1 = getByText("1");
  fireEvent.press(button1);
  expect(getByTestId("calculator-display").props.children).toBe("1  ");

  const button2 = getByText("2");
  fireEvent.press(button2);
  expect(getByTestId("calculator-display").props.children).toBe("12  ");

  const buttonPlus = getByText("+");
  fireEvent.press(buttonPlus);
  expect(getByTestId("calculator-display").props.children).toBe("12 + ");

  const button7 = getByText("7");
  fireEvent.press(button7);
  expect(getByTestId("calculator-display").props.children).toBe("12 + 7");

  const buttonDelete = getByText("DEL");
  fireEvent.press(buttonDelete);
  expect(getByTestId("calculator-display").props.children).toBe("12 + ");

  const buttonDelete2 = getByText("DEL");
  fireEvent.press(buttonDelete2);
  expect(getByTestId("calculator-display").props.children).toBe("12  ");
});

// *****************************************
test("Should display the answer being pushed into the history array", () => {
  const { getByTestId, getByText } = render(<Calculator />);

  const button1 = getByText("1");
  fireEvent.press(button1);
  expect(getByTestId("calculator-display").props.children).toBe("1  ");

  const button2 = getByText("2");
  fireEvent.press(button2);
  expect(getByTestId("calculator-display").props.children).toBe("12  ");

  const buttonPlus = getByText("+");
  fireEvent.press(buttonPlus);
  expect(getByTestId("calculator-display").props.children).toBe("12 + ");

  const button3 = getByText("3");
  fireEvent.press(button3);
  expect(getByTestId("calculator-display").props.children).toBe("12 + 3");

  const buttonEqual = getByText("=");
  fireEvent.press(buttonEqual);
  expect(getByTestId("calculator-display").props.children).toBe(
    "12 + 3 = 15.00"
  );

  const endHistory = getByText("Calculation History:");
  fireEvent.press(endHistory);
  const history = getByTestId("calculation0");
  expect(history).toBeTruthy();
});



//******************************************* */
//******************************************* */

describe("Operator functions", () => {
  test("Should check the subtract operator functions", () => {
    const { getByTestId, getByText } = render(<Calculator />);

    const button1 = getByText("5");
    fireEvent.press(button1);
    expect(getByTestId("calculator-display").props.children).toBe("5  ");

    const buttonMinus = getByText("-");
    fireEvent.press(buttonMinus);
    expect(getByTestId("calculator-display").props.children).toBe("5 - ");

    const button2 = getByText("2");
    fireEvent.press(button2);
    expect(getByTestId("calculator-display").props.children).toBe("5 - 2");

    const buttonEqual = getByText("=");
    fireEvent.press(buttonEqual);
    expect(getByTestId("calculator-display").props.children).toBe(
      "5 - 2 = 3.00"
    );
  });

  test("Should check the multiply operator functions", () => {

    const { getByTestId, getByText } = render(<Calculator />);

    const button1 = getByText("5");
    fireEvent.press(button1);
    expect(getByTestId("calculator-display").props.children).toBe("5  ");

    const buttonMultiply = getByText("*");
    fireEvent.press(buttonMultiply);
    expect(getByTestId("calculator-display").props.children).toBe("5 * ");

    const button2 = getByText("2");
    fireEvent.press(button2);
    expect(getByTestId("calculator-display").props.children).toBe("5 * 2");

    const buttonEqual = getByText("=");
    fireEvent.press(buttonEqual);
    expect(getByTestId("calculator-display").props.children).toBe(
      "5 * 2 = 10.00"
    );


  })

  test(" Should check the divide operator functions", () => {

    const { getByTestId, getByText } = render(<Calculator />);

    const button1 = getByText("1");
    fireEvent.press(button1);
    expect(getByTestId("calculator-display").props.children).toBe("1  ");

    const button0 = getByText("0");
    fireEvent.press(button0);
    expect(getByTestId("calculator-display").props.children).toBe("10  ");

    const buttonDivide = getByText("/");
    fireEvent.press(buttonDivide);
    expect(getByTestId("calculator-display").props.children).toBe("10 / ");

    const button2 = getByText("2");
    fireEvent.press(button2);
    expect(getByTestId("calculator-display").props.children).toBe("10 / 2");

    const buttonEqual = getByText("=");
    fireEvent.press(buttonEqual);
    expect(getByTestId("calculator-display").props.children).toBe(
      "10 / 2 = 5.00"
    );

  })
});
// it("should clear history when the 'Clear History' button is pressed", async () => {
//   const { getByText, findByTestId } = render(<Calculator />);

//   const clearButton = getByText("Clear History");
//   fireEvent.press(clearButton);

//   // Check if AsyncStorage.clear was called
//     expect(
//       require("@react-native-async-storage/async-storage").clear
//     ).toHaveBeenCalled();
// });
