import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import {useNavigation} from "@react-navigation/native"

export default function Ensinar()
{

    const { goBack } = useNavigation();

    return(
        <View style={styles.container}>

            <ImageBackground
            style={styles.imageBackground} 
            source={require('../assets/ensinar-background.png')}>
                
                <Text style={styles.title}>Quer ajudar um colega?</Text>
                <Text style={styles.subtitle}>Para começar, você precisa se cadastrar como tutor na nossa plataforma web</Text>
            </ImageBackground>
            
            <TouchableOpacity 
            onPress={() => goBack()}
            style={styles.button}>
                <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>

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
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: "#FFF",
        fontSize: 32,
        maxWidth: 180,
    },
    subtitle: {
        marginTop: 25,
        color: "#AECDE6",
        fontSize: 16,
        maxWidth: 220,
    },
    button: {
        backgroundColor: "#04D361",
        borderRadius: 10,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 40,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
    }
});