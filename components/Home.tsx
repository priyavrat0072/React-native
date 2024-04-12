import { Text, View } from "react-native";

const Home = (props) => {
    // console.warn(props.route.params.name)
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>Home Screen</Text>
          <Text style={{fontSize:30}}>{props.route.params.name}</Text>
          <Text style={{fontSize:30}}>{props.route.params.age}</Text>
          
        </View>
      );
     };

    export default Home;