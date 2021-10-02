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
        placeholder="digite a descricao do Item"
        onChangeText={capturarDescricao}
        value={descricaoItem}>
      </TextInput>
      
      <TextInput 
        style={styles.inputField}
        placeholder="Digite o Fabricante do Item"
        onChangeText={capturarFabricante}
        value={fabricanteItem}>
      </TextInput>

      <Button
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
  },

  inputField: {
    padding: 12,
    borderColor: '#000',
    borderWidth: 2,
    marginBottom: 4,
    textAlign: 'center'
    }
});


export default EntradaDeDados