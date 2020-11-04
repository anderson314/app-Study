import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ListaTutores from '../pages/ListaTutores';
import Favoritos from '../pages/Favoritos';


const { Navigator, Screen } = createBottomTabNavigator();

export default function EstudarTabs()
{
    return(

        <Navigator tabBarOptions={{
            activeBackgroundColor: "#B5D1E9",
            activeTintColor: "#2F6975",
            inactiveTintColor: "#7F7F7F",
            inactiveBackgroundColor: "#D9D9D9",
            style: {
                height: 80
            },            
            labelStyle: {
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: 15,
            },
            tabStyle: {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
            },
            iconStyle: {
                flex: 0,
                width: 25,
                height: 25,
            },
        }}>
            <Screen name="ListaTutores" component={ListaTutores}
                    options={{ tabBarLabel: "Tutores",
                                tabBarIcon: ({color, size}) => {
                                     return <Ionicons name="ios-easel" color={color} size={size} />;
                                     }, 
                                    }}   
            
            />
            <Screen name="Favoritos" component={Favoritos}
            options={{ tabBarIcon: ({color, size}) => {
                        return (
                            <Ionicons name="ios-heart" color={color} size={size}/>
                        );
            } }}   
            />
            
        </Navigator>
    
    );
}