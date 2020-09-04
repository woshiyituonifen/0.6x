import React ,{Component}from 'react'
import {View,Text,Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";


export default class HomeTest extends Component<Props>{

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>
                    HomeTest
                </Text>
                {/*<Button title="Go to Details" onPress={()=>this.navigation.navigate('Setting')}></Button>*/}
                <Button title="按钮" onPress={()=>this.props.navigation.navigate('Setting')}></Button>
            </View>
        );
    }
}
// function HomeTest({navigation}) {
//     return(
//             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//                 <Text>
//                     HomeTest
//                 </Text>
//                 <Button title="Go to Details" onPress={()=>navigation.navigate('Setting')}></Button>
//             </View>
//         );
// }
//
// export default HomeTest;
