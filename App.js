import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Btn from './components/Btn';

export default function App() {

  const [number, setNumber] = useState(0);

  const incrementar = () => {
    setNumber( number + 1 );
  }

  const disminuir = () => {
    setNumber( number - 1 );
  }

  return ( 
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Learning React Native :D</Text>
      <Text>{number}</Text>
      <Btn style={styles.margin} action={incrementar} text={'Incrementar'}></Btn>
      <Btn style={styles.margin} action={disminuir} text={'Disminuir'}></Btn>
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
  margin: {
    marginBottom: 10,
    marginTop: 10,
  }
});
