import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Landing from '../pages/Landing';
import Ensinar from '../pages/Ensinar';
import EstudarTabs from './EstudarTabs'

const {Navigator, Screen} = createStackNavigator();

export default function AppStack()
{
    return(

        <NavigationContainer>

            <Navigator screenOptions={{headerShown : false}}>

                <Screen name="Landing" component={Landing}/>
                <Screen name="Ensinar" component={Ensinar}/>
                <Screen name="Estudar" component={EstudarTabs}/>


            </Navigator>

        </NavigationContainer>

    );
}