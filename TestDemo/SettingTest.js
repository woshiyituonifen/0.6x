import React ,{Component}from 'react'
import {View,Text,Button} from 'react-native'

export default class SettingTest extends Component<Props>{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button title="go to detials" onPress={()=>this.props.navigation.push('Setting')}></Button>
                <Button title="go to home" onPress={()=>this.props.navigation.goBack('HomeTest')}></Button>
                <Button title="go to Top" onPress={()=>this.props.navigation.popToTop()}></Button>
            </View>
        );
    }
}