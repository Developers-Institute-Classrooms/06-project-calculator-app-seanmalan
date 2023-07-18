
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Calculator from './src/components/Calculator';
// import style from "./App.module.css"




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
