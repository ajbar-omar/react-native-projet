import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.tit} >Sign Up</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header:{
     height:80,
     paddingTop:38,
     backgroundColor: 'coral'
},
tit : {
 paddingLeft:185,
 color:"#fff",
 fontWeight:"700"
 

 
}


});

