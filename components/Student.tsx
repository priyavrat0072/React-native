import { Component } from "react";
import { Text, View } from "react-native";

class Student extends Component{
    render(){
        console.warn(this.props.name)
        return(
            <View>
                <Text style={{fontSize:20,color:'blue'}}>Student:{this.props.name}</Text>
            </View>
        )
    }   
}

export default Student;