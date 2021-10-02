import { StatusBar } from 'expo-status-bar';
import React,  {useState} from 'react';
import { FlatList, StyleSheet, Button, Text, TextInput,  View } from 'react-native';
import ExibeItems from './exibeitems'
import EntradaDeDados from './entradadados'

export default function App() {
  const [listaItems, setlistaItems] = useState([])

  const setCampos = (campos) => {
    let l = [...listaItems, campos]
    setlistaItems(l)
  }

  return (
    <View style={styles.container}>
      <EntradaDeDados campos={setCampos}/>
      <ExibeItems listaItems={listaItems}/>
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
