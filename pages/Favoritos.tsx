import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from "../componentes/Header";

export default function Favoritos()
{
    return(
        <View style={styles.container}>
            <Header title="Tutores favoritos"/>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#DCE9F4",
    },

});