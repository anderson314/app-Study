import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from "../componentes/Header";
import ItemLista from "../componentes/ItemLista";

export default function ListaTutores()
{
    return(
        <View style={styles.container}>
            <Header title="Tutores disponíveis"/>
            <ScrollView style={styles.list}>
                <ItemLista />
                <ItemLista />
                <ItemLista />
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#DCE9F4",
    },
    list: {
        marginTop: -40,
        paddingHorizontal: 16,
    },
});