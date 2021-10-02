import React from 'react'
import ReactDOM from 'react-dom'
import { FlatList, StyleSheet, Button, Text, TextInput,  View } from 'react-native';


class ExibeItens extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log('listaItems: ',this.props.listaItems)
        return (
            <View style={{marginTop:2 }}>
            <FlatList
                data={this.props.listaItems}
                renderItem={(item) => (
                    <View style={styles.itemLista}>
                        <Text>Descricao: {item.item.descricao}</Text>
                        <Text>Fabricante: {item.item.fabricante}</Text>
                    </View>
                )}/>
         </View>
    )
    }
}

const styles = StyleSheet.create({
    'itemLista': {
        paddingBottom: 12,
        paddingTop: 12,
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor: '#CCC',
        borderColor: '#CCC',
        marginBottom: 8,
        borderRadius: 8
      }
})

export default ExibeItens