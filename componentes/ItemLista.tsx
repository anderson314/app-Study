import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ItemLista()
{
    return(
        <View style={styles.container}>
            
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: "https://i0.wp.com/naoseinada.com.br/wp-content/uploads/2020/08/rocky-antologia-cronologia-naoseinada.jpg?resize=1024%2C640&ssl=1"}}/>
                <View style={styles.profileData}>
                    <Text>Anderson Rodrigo da Silva</Text>
                    <Text>Programação Web</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFF",
    },
    avatar: {
        width: 64,
        height: 64,
        backgroundColor: "#EEE",
        borderRadius: 32,
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        padding: 25,
    },
    profileData: {
        marginLeft: 20,
    },
});