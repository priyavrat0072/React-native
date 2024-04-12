import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Login = props => {
   
    const age = 29
    const [name,setName] = useState('')
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>Login Screen</Text>
        <TextInput
        style={{fontSize:30,borderColor:'skyblue',borderWidth:2}}
        onChangeText={(text)=>setName(text)} placeholder="Enter Name"></TextInput>
        <Button
          title="Go To  Home Page"
          onPress={() => props.navigation.navigate('Home',{
            name:name,age:age
          })}></Button>
      </View>
    );
  };

export default Login