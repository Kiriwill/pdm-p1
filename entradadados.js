import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';

function EntradaDeDados(props) {
  const [descricaoItem,setDescricao] = useState('')
  const [fabricanteItem,setFabricante] = useState('')

  const capturarDescricao = (descricao) => {
    setDescricao(descricao)
  }

  const capturarFabricante = (fabricante) => {
    setFabricante(fabricante)
  }
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}  
        placeholder="Digite a descricao"
        onChangeText={capturarDescricao}
        value={descricaoItem}>
      </TextInput>
      
      <TextInput 
        style={styles.inputField}
        placeholder="Digite o Fabricante"
        onChangeText={capturarFabricante}
        value={fabricanteItem}>
      </TextInput>

      <Button 
        style={styles.button}
        title="Cadastrar"
        onPress={ () => {
            props.campos({
                descricao : descricaoItem, 
                fabricante : fabricanteItem,
              });
            setDescricao('');
            setFabricante('');
            }
        }
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '80%',
  },

  inputField: {
    textAlign: 'center',
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#f0f8ff',
    borderColor: '#FFF',
    marginBottom: 8,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'space-around',

  },

  button: {
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 30,
    paddingLeft: 30,
  }

    
});


export default EntradaDeDados