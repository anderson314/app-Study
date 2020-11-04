import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "../componentes/Header";
import ItemLista from "../componentes/ItemLista";

export default function ListaTutores()
{
    return(
        <View style={styles.container}>
            <Header title="Tutores disponíveis"/>

            <ItemLista />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#DCE9F4",
    },

});