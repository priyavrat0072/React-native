import React from "react"
import {
    Button,
    Text,
    View,
    StyleSheet,
    TextInput,
    FlatList,
    ScrollView,
  } from 'react-native';

export default UserData =(props)=>{
    const item = props.item
    return(
      <View style={styles.box}>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.item}>{item.email}</Text>
        </View>
    )
  }

  const styles = StyleSheet.create({
    item:{
      fontSize:24,
      color:'orange',
      flex:1,
      margin:2,
      backgroundColor:'blue',
      textAlign:'center'
  
    },
    box:{
      flexDirection:'row',
      borderWidth:2,
      borderColor:'orange',
      margin:10
    }
  })