import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Btn from './components/Btn';
import ExampleFelx from './components/ExampleFelx';

const Stack = createNativeStackNavigator();

export default function App() {

  const [number, setNumber] = useState(0);

  const incrementar = () => {
    setNumber( number + 1 );
  }

  const disminuir = () => {
    setNumber( number - 1 );
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Learning React Native :D</Text>
        <Text>{number}</Text>
        <Btn style={styles.margin} action={incrementar} text={'Incrementar'}></Btn>
        <Btn style={styles.margin} action={disminuir} text={'Disminuir'}></Btn>
        <Btn action={() => navigation.navigate("ExampleFLex")} text={"To Flex Example"} />
      </View>

      {/* Navigation */}
      <Stack.Navigator>
        <Stack.Screen component={ExampleFelx} name={'ExampleFlex'} options={{title: 'Flex'}}></Stack.Screen>
        {/* <Stack.Screen component={} name={''}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
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
