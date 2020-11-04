import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";


export default function Header(props: any)
{

    const {navigate} = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigate('Landing')}>
                    <Image source={require('../assets/icons/voltar.png')}/>
                </TouchableOpacity>

                <Image source={require('../assets/logo.png')} />
            </View>

            <Text style={styles.title}>{props.title}</Text>

        </View>

        
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#3575A9",
        padding: 40,

    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        color: "#FFF",
        fontSize: 25,
        marginVertical: 30,
    },
});