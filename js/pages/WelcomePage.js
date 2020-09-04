import React, {Component}from 'react'

import {View, Text,ScrollView} from "react-native";


export default class WelcomePage extends Component<Props>{

    render() {
        return (
            <View>
              <Text style={{paddingTop:100}}>
                  欢迎您
              </Text>
            </View>
        );
    }
}

