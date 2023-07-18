
import { StyleSheet, View } from 'react-native';
import Calculator from './src/components/Calculator';
import "../mobile-app-calculator/src/App.css"

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
