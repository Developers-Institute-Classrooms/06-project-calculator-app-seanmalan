
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculator from './src/components/Calculator';





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
