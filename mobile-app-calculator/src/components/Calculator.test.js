import React from "react";
import rendered from "react-test-renderer";

import App from "../../App";
import Calculator from "./Calculator";
import ButtonContainer from "./ButtonContainer";
import OperationDisplay from "./OperationDisplay";



describe("App", () => {
  it("renders correctly", () => {
    const tree = rendered.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
}
);


describe("Calculator", () => {
  it("Calculator should test an additon operation", () => {
    const tree = rendered.create(<Calculator />).toJSON();
    

    // const addition = tree.children.findByProps({title: "+"});

    console.log(tree.children);

    // const Addition = tree.root.findByProps({title: "+"});
    // const One = tree.root.findByProps({title: "1"});
    // const Two = tree.root.findByProps({title: "2"});
    // const Equals = tree.root.findByProps({title: "="});
    // const Result = tree.root.findByProps({title: "3"});

    // One.props.onPress();
    // Addition.props.onPress();
    // Two.props.onPress();
    // Equals.props.onPress();
    
    // expect(Result).toBe("3");
    

  })


})