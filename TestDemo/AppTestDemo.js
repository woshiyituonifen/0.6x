import {createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import  {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import React ,{Component} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {View,Text,Button} from "react-native";

const  Tab = createMaterialTopTabNavigator();

import HomeTest from './HomeTest'
import SettingTest from './SettingTest'

function  Mytabs() {

    return(
        <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeTest} />
          <Tab.Screen name="SettingTest" component={SettingTest} />
      </Tab.Navigator>
        </NavigationContainer>
    );
}


// export default Mytabs;


function HomeScreen() {

    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>
                Homeessssss
            </Text>
            <Button t onPress={()=>{}}></Button>
        </View>
    );
}

const Stack  =createStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeTest">
                <Stack.Screen name="HomeTest" component={HomeTest} options={{title:"首也"}}/>
                <Stack.Screen name="Setting" component={SettingTest} options={{title:"详情页面"}} style={{fontSize:20,color:"red"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;