import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ItemLista()
{

    const [favorito, setFavorito] =  useState(false); 

    function alternarFavorito()
    {
        setFavorito(!favorito);
    }

    function getIcon()
    {
        return favorito ? require('../assets/icons/unfavorite.png')
                        : require('../assets/icons/favorite.png');
    }
    

    return(
        <View style={styles.container}>
            
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: "https://i0.wp.com/naoseinada.com.br/wp-content/uploads/2020/08/rocky-antologia-cronologia-naoseinada.jpg?resize=1024%2C640&ssl=1"}}/>
                <View style={styles.profileData}>
                    <Text style={styles.profileName}>Anderson Rodrigo</Text>
                    <Text style={styles.profileSubject}>Programação Web</Text>
                </View>
            </View>

            <Text style={styles.profileSkills}>
                Domino as mais novas tecnologias de desenvolvimento web!
                It's you against you. This is the paradox that drive us.
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                onPress={() => alternarFavorito()}
                style={[styles.favoriteButton, favorito ? styles.favorited : {}]}>
                    <Image source={getIcon()}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contactButton}>
                    <Image source={require('../assets/icons/whatsapp.png')}/>
                    <Text style={styles.contactButtonText}>Contatar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginBottom: 16,
        overflow: "hidden",
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
    profileName: {
        color: "#2F6795",
        fontSize: 20,
        fontWeight: "bold",
    },
    profileSubject: {
        color: "#5E9BCE",
        fontSize: 12,
        marginTop: 4,
    },
    profileSkills: {
        color: "#5E9BCE",
        fontSize: 14,
        marginHorizontal: 24,
    },
    favoriteButton: {
        backgroundColor: "#3575A9",
        height: 60,
        width: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 24,
    },
    contactButton: {
        backgroundColor: "#04D361",
        height: 56,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
    },
    contactButtonText: {
        color: "#FFF",
        fontSize: 16,
        marginLeft: 16,
    },
    buttonsContainer: {
        flexDirection: "row",
        backgroundColor: "#FAFAFC",
        padding: 24,
        marginTop: 24,
    },
    favorited: {
        backgroundColor: "#e33d3d",
    },
});