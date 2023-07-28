import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Calculator from "../components/Calculator";


describe("Calculator", () => {
  test('should display on the screen', () => { 
    render(<Calculator />);

    const calculatorHistory = screen.getByText(/Calculation History:/i);
    expect(calculatorHistory).toBeTruthy();
  });
   })

    describe("Calculator", () => {
  test('should display buttons on the screen', () => {
    render(<Calculator />);
    const button = screen.getByText(/1/i);
    expect(button).toBeTruthy();

    const button2 = screen.getByText(/2/i);
    expect(button2).toBeTruthy();

    const addButton = screen.getByText(/\+/i);
    expect(addButton).toBeTruthy();

    const equalButton = screen.getAllByRole("TouchableOpacity", { title: "=" });
    expect(equalButton).toBeTruthy();

    fireEvent.press(button);
    fireEvent.press(addButton);
    fireEvent.press(button2);
    fireEvent.press(equalButton);

    const result = screen.getByText(/3/i);
    expect(result).toBeTruthy();


  });

    })