import { SafeAreaView, Dimensions } from "react-native";
import Calculator from "./src/components/Calculator";

export default function App() {
  const deviceHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: deviceHeight,
      }}
    >
      <Calculator />
    </SafeAreaView>
  );
}
