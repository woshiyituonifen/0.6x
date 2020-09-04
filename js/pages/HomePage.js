import React,{Component}from 'react'

import {View,Text,StyleSheet,TextInput,Image,Button,ActivityIndicator,ScrollView} from 'react-native'

export default class HomePage extends Component<Props>{
    constructor(Props) {
        super(Props);
    }

    render() {
        return (<View style={styles.conte}>
            <Text style={styles.textStyles}>
                首也少时诵诗书所所所所所
            </Text>
            <TextInput style={{borderColor: 'red',top:100,placeholder:"ded",borderWidth: 1,width:"100%",textAlign:"center"} } >
                nihadaw
            </TextInput>
            <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
            <Button title="这是按钮" style={styles.bottonStles} onPress={()=>{console.warn("123")}}></Button>
            <View style={{paddingLeft:150}}><ActivityIndicator  style={{width:45,height:45 }} size="large" color="red"></ActivityIndicator></View>
 
            <ScrollView >
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>
                <Image style={styles.imageStyles} source={{uri:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599119851&di=4cbcf6882d46d1cee6f54e63bba35283&src=http://img8.zol.com.cn/bbs/upload/18816/18815745.jpg"}}/>


            </ScrollView>
        </View>);
    }
}

const styles=StyleSheet.create({
    conte:{
        paddingTop:65
    },
    textStyles:{
      top: 80
    },

    inputStyles:{
width:"100%",
        borderColor:'red',
        borderWidth:1,
        height:40,
        top:100,

    },
    imageStyles:{
        top:130,
        width: 130,
        height: 130,
        borderColor: "red",
        borderWidth: 1
    },
    bottonStles:{
        width:100,
        height:45,
    }

})