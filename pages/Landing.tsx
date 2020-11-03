import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native"

export default function Landing(){

    const { navigate } = useNavigation(); 

    return(
        <View style={styles.container} >
            <Image style={styles.image} source={require('../assets/landing.png')} />
            
            <Text style={styles.title}>Seja bem vindo,</Text>
            <Text style={styles.subtitle}>o que deseja fazer?</Text>
            
            <View style={styles.buttonContainer}> 
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={require('../assets/icons/estudo.png')} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={() => navigate("Ensinar")}
                style={[styles.button, styles.buttonSecondary]}>
                    <Image source={require('../assets/icons/aula.png')} />
                    <Text style={styles.buttonText}>Ensinar</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.total}>
                Total de 100 conexões realizadas {"  "}
                <Image  source={require('../assets/icons/coracao.png')}></Image>    
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#3575A9",
        justify: "center",
        padding: 40,
    },
    image: {
        width: '100%',
        resizeMode: 'contain', 
    },
    title: {
        color: "#FFF",
        fontSize: 22,
    },
    subtitle: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold", 
    },
    total: {
        color: "#FFF",
        fontSize: 22,
        marginTop: 40,
        maxWidth: 170,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 22,
    },
    button: {
        height: 150,
        width: '48%',
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 25,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 40,
    },
    buttonPrimary: {
        backgroundColor: "#5E9BCE",
    },
    buttonSecondary: {
        backgroundColor: "#04D361",
    },
});