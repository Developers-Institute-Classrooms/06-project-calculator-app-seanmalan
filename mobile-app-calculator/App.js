
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import Calculator from './src/components/Calculator';





export default function App() {

const deviceHeight = Dimensions.get("window").height;

  return (
    <SafeAreaView style={{
      flex: 1,
      height: deviceHeight,
    }}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
});
