import React, {useEffect, useState, useRef} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  SectionList,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Pressable,
  StatusBar,
  Platform,
} from 'react-native';

import {WebView} from 'react-native-webview';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Home from './components/Home';
// import Login from './components/Login';
// import CompanyData from './components/CompanyData';
// import UserData from './components/UserData';
// import Exstyles from './style';
// import Student from './components/Student';

// const name = "anil";
// let email =  "abc@gmail.com" ;
// var age =29;

// V5
// const App =() => {
//   return (
//   <View>
//     <Text style={{fontSize:30}}>Hello Text Component</Text>
//     <Text style={{fontSize:20, color:"black"}}>Hello Text 2</Text>
//     <Button title='Press Here' ></Button>
//     <Text style={{fontSize:20, color:"black"}}>Hello Text 2</Text>
//     <Button title='Press Me' ></Button>
//   </View>
//   );
// }

// V6
// function fruit(){
//   return "apple";
// }

// const App =()=>{
//   return(
//     <View>
//       <Text style={{fontSize:30}}>Hello:{name}</Text>
//       <Text style={{fontSize:30}}>{age}</Text>
//       <Text style={{fontSize:30}}>{email}</Text>
//       <Text style={{fontSize:30}}>{fruit()}</Text>
//       <Text style={{fontSize:30}}>{100+20}</Text>
//       <Text style={{fontSize:30}}>{age===29?"above 20":"unknown"}</Text>
//     </View>
//   )
// }

// V7
// const App =()=>{
//   return(
//     <View>
//       <Text style={{fontSize:25}}>Components</Text>
//       <UserData/>
//       <CompanyData/>
//     </View>
//   )
// }

// const UserData =()=>{
//   return(
//     <View>
//       <Text style={{fontSize:20}}>Name : Bit</Text>
//       <Text style={{fontSize:20}}>Age : 25</Text>
//       <Text style={{fontSize:20}}>Email : Bit@test.com</Text>
//     </View>
//   )
// }

// V8
// const App =()=>{
//   // const [data,setData] = useState(10)
//   let data =100
//   const fruit =(fru: string)=>{
//     data = 20
//     console.warn("Function Called",fru,data)
//   }
//   return(
//     <View>
//       <Text>Button Making {data}</Text>
//       <Button title="Press Me" onPress={()=>{fruit("Mango")}} color={'red'}></Button>
//     </View>
//   )
// }

// V9
// const App =()=>{
//   const [name,setName] = useState("BITT")
//   function testUser(){
//     setName("Like")
//   }
//   return(
//     <View>
//       <Text style={{fontSize:25}}>{name}</Text>

//       {/* <Button title="Press Me" onPress={()=>setName("Anil")}></Button> */}
//       <Button title='Press-Me' onPress={testUser}></Button>
//     </View>
//   )
// }

// V10
// const App =()=>{
//   const [name,setname] = useState('Anil')
//   return(
//     <View>
//       <Text style={{fontSize:20, backgroundColor:"red"}}>Props in RN</Text>
//       <Button title='UpdateProps' onPress={()=>setname("Bittu")}> </Button>
//       <User name = {name} age={29}/>
//     </View>
//   )
// }
// const User =(props: any)=>{
//   console.warn(props)
//   return(
//     <View>
//       <Text style={{fontSize:20, backgroundColor:"blue"}}>Child Components</Text>
//       <Text style={{fontSize:20, backgroundColor:"blue"}}>{props.name}</Text>
//       <Text style={{fontSize:20, backgroundColor:"blue"}}>{props.age}</Text>
//     </View>
//   )
// }

// V11
// const App =()=>{
//   return(
//     <View>
//       <Text style={{fontSize:30,color:'red',marginTop:50, backgroundColor:'pink'}}>STYLING IN REACT NATIVE</Text>
//       <Text style={Exstyles.textBox}>STYLING IN REACT NATIVE</Text>
//       <Text style={Exstyles.textBox}>STYLING IN REACT NATIVE</Text>
//       <Text style={Exstyles.textBox}>STYLING IN REACT NATIVE</Text>
//     </View>
//   )
// }

// V12
// const App =()=>{
//   const[name,setName]= useState("")
//   return(
//     <View>
//       <Text style={{fontSize:30,color:'red', margin:10}}>INPUT BOX</Text>
//       <Text style={{fontSize:30,color:'red', margin:10}}>Your Name is: {name}</Text>
//       <TextInput
//       style={style.inputbox}
//       placeholder='Enter Your Name'
//       onChangeText={(text)=>setName(text)}
//       value={name}
//       />
//       <Button title='clear input value' onPress={()=>setName("")}></Button>

//     </View>
//   )
// }

// const style = StyleSheet.create({
//   inputbox :{
//     fontSize:18,
//     color:'blue',
//     borderWidth:2,
//     borderColor:'red',
//     margin:10
//   }
// })

// V13
// const App =()=>{
//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")
//   const [dispaly, setDisplay] = useState(false)

//   const clearEverything =()=>{
//     setDisplay(false)
//     setName('')
//     setEmail('')
//     setPassword('')
//   }
//   return(
//     <View>
//       <Text style={{fontSize:25,color:'blue', textAlign:'center'}}>Form handling</Text>
//       <TextInput
//         style={style.forms}
//         placeholder='Enter User Name'
//         onChangeText={(text)=>setName(text)}
//         value={name}
//       />
//       <TextInput
//         style={style.forms}
//         placeholder='Enter Email'
//         onChangeText={(text)=>setEmail(text)}
//         value={email}

//       />
//       <TextInput
//         style={style.forms}
//         placeholder='Enter Password'
//         secureTextEntry={true}
//         onChangeText={(text)=>setPassword(text)}
//         value={password}

//       />

//       <View style={{margin:10}}>
//       <Button color={"green"} title='Print Value' onPress={()=>setDisplay(true)}></Button>
//       </View>
//       <View style={{margin:10}}>
//       <Button color={"red"} title='Clear Value' onPress={clearEverything}></Button>
//       </View>

//       <View>
//         {
//           dispaly?
//           <View>
//             <Text style={style.dis}>Username is:{name}</Text>
//             <Text style={style.dis}>Username is:{email}</Text>
//             <Text style={style.dis}>Username is:{password}</Text>
//           </View>:null
//         }
//       </View>

//     </View>
//   )
// }

// const style =StyleSheet.create({
//   forms:{
//     fontSize:18,
//     color:'blue',
//     borderWidth:2,
//     borderColor:'blue',
//     margin:10
//   },
//   dis:{
//     fontSize:18,
//     color:"black",
//     margin:10
//   }
// })

// V14
// const App =()=>{
//   const users=[
//     {
//       id:1,
//       name:"anil"
//     },
//     {
//       id:2,
//       name:"sam"
//     },
//     {
//       id:3,
//       name:"peter"
//     },
//     {
//       id:4,
//       name:"bruce"
//     },
//     {
//       id:10,
//       name:"Tony"
//     }
//   ]
//   return(
//     <View>
//       <Text style={{fontSize:25,color:'blue', textAlign:'center'}}> Flat List </Text>
//       <FlatList
//       data ={users}

//       renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
//       // keyExtractor={item=>item.id}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   item:{
//     fontSize:24,
//     padding:10,
//     color:"white",
//     backgroundColor:'blue',
//     borderColor:'black',
//     borderWidth:3,
//     margin:10
//   }
// })

// v15
// const App =()=>{
//   const users=[
//         {
//           id:1,
//           name:"anil"
//         },
//         {
//           id:2,
//           name:"sam"
//         },
//         {
//           id:3,
//           name:"peter"
//         },
//         {
//           id:4,
//           name:"bruce"
//         },
//         {
//           id:10,
//           name:"Tony"
//         },
//         {
//           id:1,
//           name:"anil"
//         },
//         {
//           id:2,
//           name:"sam"
//         },
//         {
//           id:3,
//           name:"peter"
//         },
//         {
//           id:4,
//           name:"bruce"
//         },
//         {
//           id:10,
//           name:"Tony"
//         },
//         {
//           id:1,
//           name:"anil"
//         },
//         {
//           id:2,
//           name:"sam"
//         },
//         {
//           id:3,
//           name:"peter"
//         },
//         {
//           id:4,
//           name:"bruce"
//         },
//         {
//           id:10,
//           name:"Hello"
//         }
//       ]

//   return(
//     <View>
//       <Text style={{fontSize:25,color:'blue', textAlign:'center'}}>LIST WITH MAP</Text>
//       <ScrollView style={{margin:30}}>
//       {
//         users.map((item)=><Text style={styles.item}>{item.name}</Text>)
//       }
//       </ScrollView>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   item:{
//     fontSize:24,
//     padding:10,
//     color:"white",
//     backgroundColor:'blue',
//     borderColor:'black',
//     borderWidth:3,
//     margin:10,
//     textAlign:'center'
//   }
// })

// V16

// const App =()=>{
//   return(
//     <View>
//       <Text style={{fontSize:30}}>Grid static</Text>
//       <View style={{ flex:1,flexDirection:'row', flexWrap:'wrap'}} >
//         <Text style={style.grid}>Sam</Text>
//         <Text style={style.grid}>Sam</Text>
//         <Text style={style.grid}>Sam</Text>
//         <Text style={style.grid}>Sam</Text>
//         <Text style={style.grid}>Sam</Text>
//         <Text style={style.grid}>Sam</Text>
//         <Text style={style.grid}>Sam</Text>
//         <Text style={style.grid}>Sam</Text>
//         <Text style={style.grid}>Sam</Text>
//         <Text style={style.grid}>Sam</Text>
//       </View>
//     </View>
//   )
// }

// const App =()=>{

//   const users=[
//             {
//               id:1,
//               name:"anil"
//             },
//             {
//               id:2,
//               name:"sam"
//             },
//             {
//               id:3,
//               name:"peter"
//             },
//             {
//               id:4,
//               name:"bruce"
//             },
//             {
//               id:10,
//               name:"Tony"
//             },
//             {
//               id:1,
//               name:"anil"
//             },
//             {
//               id:2,
//               name:"sam"
//             },
//             {
//               id:3,
//               name:"peter"
//             },
//             {
//               id:4,
//               name:"bruce"
//             },
//             {
//               id:10,
//               name:"Tony"
//             },
//             {
//               id:1,
//               name:"anil"
//             },
//             {
//               id:2,
//               name:"sam"
//             },
//             {
//               id:3,
//               name:"peter"
//             },
//             {
//               id:4,
//               name:"bruce"
//             },
//             {
//               id:10,
//               name:"Hello"
//             },
//             {
//               id:1,
//               name:"anil"
//             },
//             {
//               id:2,
//               name:"sam"
//             },
//             {
//               id:3,
//               name:"peter"
//             },
//             {
//               id:4,
//               name:"bruce"
//             },
//             {
//               id:10,
//               name:"Tony"
//             },
//             {
//               id:1,
//               name:"anil"
//             },
//             {
//               id:2,
//               name:"sam"
//             },
//             {
//               id:3,
//               name:"peter"
//             },
//             {
//               id:4,
//               name:"bruce"
//             },
//             {
//               id:10,
//               name:"Tony"
//             },
//             {
//               id:1,
//               name:"anil"
//             },
//             {
//               id:2,
//               name:"sam"
//             },
//             {
//               id:3,
//               name:"peter"
//             },
//             {
//               id:4,
//               name:"bruce"
//             },
//             {
//               id:10,
//               name:"Hello"
//             },
//             {
//               id:1,
//               name:"anil"
//             },
//             {
//               id:2,
//               name:"sam"
//             },
//             {
//               id:3,
//               name:"peter"
//             },
//             {
//               id:4,
//               name:"bruce"
//             },
//             {
//               id:10,
//               name:"Tony"
//             },
//             {
//               id:1,
//               name:"anil"
//             },
//             {
//               id:2,
//               name:"sam"
//             },
//             {
//               id:3,
//               name:"peter"
//             },
//             {
//               id:4,
//               name:"bruce"
//             },
//             {
//               id:10,
//               name:"Tony"
//             },
//             {
//               id:1,
//               name:"anil"
//             },
//             {
//               id:2,
//               name:"sam"
//             },
//             {
//               id:3,
//               name:"peter"
//             },
//             {
//               id:4,
//               name:"bruce"
//             },
//             {
//               id:10,
//               name:"Hello"
//             }
//           ]

//   return(
//     <View>
//       <Text style={{fontSize:30}}>Grid Dynamic</Text>
//       <ScrollView style={{marginBottom:50}}>
//       <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
//       {
//         users.map((item)=><Text style={style.grid}>{item.name}</Text>)
//       }
//       </View>
//       </ScrollView>
//     </View>
//   )
// }

// const style = StyleSheet.create({
//   grid:{
//     fontSize:25,
//     backgroundColor:'blue',
//     color:'white',
//     margin:5,
//     padding:5,
//     width:80,
//     height:80,
//     textAlignVertical:'center',
//     textAlign:'center'
//   }
// })

// V17
// const App = () => {
//   const users = [
//     {
//       id: 1,
//       name: 'anil',
//       email:'anil@test.com'
//     },
//     {
//       id: 2,
//       name: 'sam',
//       email:'sam@test.com'
//     },
//     {
//       id: 3,
//       name: 'peter',
//       email:'peter@test.com'
//     },
//   ];

//   return(
//     <View>
//       <Text style={{fontSize:20}}>Looping components Using FlatList</Text>
//       <FlatList
//       data={users}
//       renderItem={({item})=> <UserData item={item}/>
//       }
//       />

//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   item:{
//     fontSize:24,
//     color:'orange',
//     flex:1,
//     margin:2,
//     backgroundColor:'blue',
//     textAlign:'center'

//   },
//   box:{
//     flexDirection:'row',
//     borderWidth:2,
//     borderColor:'orange',
//     margin:10
//   }
// })

// V18
// const App =()=>{

//   const users =[
//     {
//       id:1,
//       name:'anil',
//       data:["PHP","React js","Angular"]
//     },
//     {
//       id:2,
//       name:'peter',
//       data:["node","js","Rust"]
//     },
//     {
//       id:3,
//       name:'Max',
//       data:["c","c++","py"]
//     },
//     {
//       id:4,
//       name:'sam',
//       data:["golaang","boots","java"]
//     }
//   ]

//  return(
//   <View>
//   <Text style={{fontSize:25}}>Section List</Text>
//   <SectionList
//   sections={users}
//   renderItem={({item})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text>}
//   renderSectionHeader={({section:{name}})=>(
//     <Text style={{fontSize:25,color:'red'}}>
//       {name}
//     </Text>
//  )
//   }
//   />
// </View>
//  )
// }

// const App =()=>{
//   return(
//     <View>
//       <Text></Text>
//     </View>
//   )
// }

// V19
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state ={
//       name:"Anil"

//     }
//   }
//   updateName=(val: string)=>{
//     this.setState({name:val})
//   }
//   render() {
//     return (
//       <View>
//         <Text style={{fontSize:30,color:'red'}}>{this.state.name}</Text>
//         <TextInput
//           placeholder='Enter Name'
//           onChangeText={(text)=>this.updateName(text)}
//         />

//         <Button title='Press Me' ></Button>
//         <Student name ={this.state.name}/>
//       </View>
//     );
//   }
// }

// V23
// const App=()=>{
//   const[count,setCount] = useState(0)
//   useEffect(()=>{
//     console.warn("hello")
//   },[])
//   return(
//     <View>
//       <Text style={{fontSize:30}}>Use Effect Hook</Text>
//       <Text style={{fontSize:30}}>{count}</Text>
//       <Button title='UpdateCount' onPress={()=>setCount(count+1)}></Button>
//     </View>
//   )
// }

// v24
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState(100);
//   // useEffect(()=>{console.warn("count")},[count])
//   // useEffect(()=>{console.warn("data")},[data])
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>Component Did Mount</Text>
//       {/* <Text style={{fontSize:30}}>{count}</Text>
//       <Text style={{fontSize:30}}>{data}</Text> */}
//       <Button
//         title="update Counter"
//         onPress={() => setCount(count + 1)}></Button>
//       <Button title="update data" onPress={() => setData(data + 5)}></Button>
//       <User data={data} count={count} />
//     </View>
//   );
// };

// const User = (props: { data: number; count: number; }) => {
//   // console.warn(props)
//   useEffect(() => {
//     console.warn('child Data');
//   }, [props.data]);
//   useEffect(() => {
//     console.warn('child Count');
//   }, [props.count]);
//   return (
//     <View>
//       <Text style={{fontSize: 30, color: 'orange'}}>User Component</Text>
//       <Text style={{fontSize: 30, color: 'orange'}}>{props.count}</Text>
//       <Text style={{fontSize: 30, color: 'orange'}}>{props.data}</Text>
//     </View>
//   );
// };

// V25
// const App =()=>{
//   const [show,setShow] = useState(true)
//   const toggle =()=>{
//     if(show){
//       setShow(false)
//     }else{
//       setShow(true)
//     }
//   }
//   return(
//     <View>
//       <Text style={{fontSize:20}}>Show, Hide ,Toggle</Text>
//       {/* <Button title='Hide' onPress={()=>setShow(false)}></Button>
//       <Button title='Show' onPress={()=>setShow(true)}></Button> */}
//       <Button title='Toggle' onPress={toggle}></Button>
//       {
//         show?<User/>:null
//       }
//     </View>
//   )
// }

// const User =()=>{
//   return(
//     <View>
//       <Text style={{fontSize:20,color:'blue'}}>User Component</Text>
//     </View>
//   )
// }

// V26
// const App = () => {
//   const [toggle,setToggle] = useState(true)
//   return (
//     <View>
//       <Text style={{fontSize: 25}}>Component Unmount</Text>
//       <Button title='Toggle' onPress={()=>setToggle(!toggle)}></Button>
//       {
//         toggle?<Student/>:null
//       }
//     </View>
//   );
// };

// const Student =()=>{

//   let timer = setInterval(()=>{
//     console.warn("INTERVAL")
//   },2000)

//   // useEffect(()=>{
//   //   return ()=> clearInterval(timer)
//   // })
//   // useEffect(()=>{clearInterval(timer)})
//   return(
//     <View>
//       <Text style={{fontSize: 25}}>Student Component</Text>
//     </View>
//   )
// }
// V27
// const App =()=>{
//   return(
//     <View style={styles.main}>
//       {/* <Text>Responsive UI with Flex</Text> */}
//       <View style={styles.box1}>
//         <View style={styles.innerbox1}></View>
//         <View style={styles.innerbox2}></View>
//         <View style={styles.innerbox3}></View>
//       </View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,

//   },
//   box1:{
//     flex:1,backgroundColor:'red',
//     flexDirection:'row'
//   },
//   box2:{
//     flex:1,backgroundColor:'blue'
//   },
//   box3:{
//     flex:1,backgroundColor:'yellow'
//   },
//   innerbox1:{
//     flex:1,backgroundColor:'pink',
//     margin:10
//   },
//   innerbox2:{
//     flex:1,backgroundColor:'skyblue',
//     margin:10
//   },
//   innerbox3:{
//     flex:1,backgroundColor:'green',
//     margin:10
//   },
// })

// const App =()=>{
//   return(
//     <View style={styles.main}>
//       <TouchableHighlight>
//         <Text style={styles.btn}>Button</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.btn,styles.sucess]}>Sucess</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.btn,styles.primary]}>Primary</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.btn,styles.warning]}>Warning</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.btn,styles.error]}>Error</Text>
//       </TouchableHighlight>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//     flexDirection:'row',
//     flexWrap:'wrap'
//   },
//   btn:{

//     backgroundColor:"#bbb",
//     color:"#fff",
//     fontSize:24,
//     textAlign:'center',
//     padding:5,
//     margin:5,
//     borderRadius:10,
//     shadowColor:'black',
//     elevation:10,
//     shadowOpacity:1,
//     width:100
//   },
//   sucess:{
//     backgroundColor:'green'
//   },
//   primary:{
//     backgroundColor:'blue'
//   },
//   warning:{
//     backgroundColor:'orange'
//   },
//   error:{
//     backgroundColor:'red'
//   },
// })
// const App = () => {

//   const [selectedRadio,setSelectedRadio] =useState(1)

//   return (
//     <View style={styles.main}>
//       {/* <Text> Static Radio Button</Text> */}
//       <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
//         <View style={styles.radioWarp}>
//           <View style={styles.radio}>
//             {
//               selectedRadio === 1?<View style={styles.radiobg}></View>:null
//             }
//           </View>
//           <Text style={styles.radiotext}>Radio 1</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
//         <View style={styles.radioWarp}>
//           <View style={styles.radio}>
//           {
//               selectedRadio === 2?<View style={styles.radiobg}></View>:null
//             }
//           </View>
//           <Text style={styles.radiotext}>Radio 2</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   radiotext: {
//     fontSize: 20,
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderColor: 'black',
//     borderWidth: 2,
//     borderRadius: 20,
//     margin: 10,
//   },
//   radioWarp: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   radiobg:{
//     backgroundColor:'blue',
//     height:28,
//     width:28,
//     borderRadius:20,
//     margin:4,
//   }
// });

// V30
// const App =()=>{
//   const skills = [
//       {
//         id:1,
//         name:'JAVA'
//       },
//       {
//         id:2,
//         name:'lang'
//       },
//       {
//         id:3,
//         name:'Node'
//       },
//       {
//         id:4,
//         name:'c++'
//       },
//       {
//         id:5,
//         name:'Rust'
//       },
//   ]
//   const [selectedRadio,setSelectedRadio] = useState(0)
//   return(
//     <View style={styles.main}>
//       {/* <Text>Dynamic Radio Button</Text> */}
//       {
//         skills.map((item,index)=><TouchableOpacity
//         key={index}
//         onPress={()=>setSelectedRadio(item.id)}
//         >
//         <View style={styles.radioWarp}>
//           <View style={styles.radio}>
//             {
//               selectedRadio == item.id ?<View style={styles.radiobg}></View>:null
//             }
//           </View>
//           <Text style={styles.radiotext}>{item.name}</Text>
//         </View>
//       </TouchableOpacity>

//         )
//       }

//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   radiotext: {
//     fontSize: 20,
//   },
//   radio: {
//     height: 40,
//     width: 40,
//     borderColor: 'black',
//     borderWidth: 2,
//     borderRadius: 20,
//     margin: 10,
//   },
//   radioWarp: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   radiobg:{
//     backgroundColor:'blue',
//     height:28,
//     width:28,
//     borderRadius:20,
//     margin:4,
//   }
// });

// V31 Activity Indicator
// const App=()=>{
//   const [show,setShow] = useState(false)
//   const display =()=>{
//     setShow(true)
//     setTimeout(()=>{setShow(false)},3000)

//   }
//   return(
//     <View style={styles.main}>
//       <ActivityIndicator size='large' color='red' animating={show}></ActivityIndicator>
//       <Button title='loader' onPress={()=>display()}></Button>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'

//   }
// })

// V32 Modal Dailouge box

// const App=()=>{
//   const [show,setShow] = useState(false)
//   return(
//     <View style={styles.main}>
//       <Modal
//       transparent={true}
//       visible = {show}
//       animationType='fade'
//       >
//         <View style={styles.cent}>
//           <View style={styles.wrap}>
//             <Text style={styles.text}>Hello World</Text>
//             <Button title='close' onPress={()=>setShow(false)}></Button>
//           </View>
//         </View>
//       </Modal>
//       <View style={styles.btnView}>
//       <Button title='Open Modal' onPress={()=>setShow(true)}></Button>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//   },
//   btnView:{
//     flex:1,
//     justifyContent:'flex-end'
//   },
//   cent:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',

//   },
//   wrap:{
//     backgroundColor:'white',
//     padding:30,
//     borderRadius:20,
//     shadowColor:'black',
//     elevation:5
//   },
//   text:{
//     fontSize:35,

//   }
// })

// V33
// const App = ()=>{
//   return(
//     <View style={styles.main}>
//       <Pressable
//       // onPress={()=>console.warn("normal on press")}
//       // onLongPress={()=>console.warn("Long Press")} //500ms
//       onPressIn={()=>console.warn("press In")}
//       onPressOut={()=>console.warn("press out")}
//       >
//         <Text style={styles.pressableBtn}>Pressable</Text>
//       </Pressable>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//     justifyContent:'center'
//   },
//   pressableBtn:{
//     backgroundColor:'skyblue',
//     color:'#fff',
//     padding:10,
//     margin:10,
//     borderRadius:10,
//     fontSize:20,
//     textAlign:'center',
//     shadowColor:'#000',
//     elevation:5
//   }
// })

// V34
// const App =()=>{
//   const [toggle,setToggle] = useState(false)
//   const [barStyle,setBarStyle] = useState('default')
//   return(
//     <View style={styles.container}>
//       <Text>Status Bar</Text>
//       <StatusBar backgroundColor={'orange'}
//       barStyle={barStyle}
//       hidden={toggle}
//       >

//       </StatusBar>
//       <Button title='Toggle Status Bar' onPress={()=>setToggle(!toggle)}></Button>
//       <Button title='update Style' onPress={()=>setBarStyle('dark-content')}></Button>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center'
//   }
// })

// const App=()=>{
//   return(
//     <View>
//       <Text style={{fontSize:30}}>PlatForm: {Platform.OS}</Text>
//       {
//         Platform.OS == "ios"?
//         <View style={{backgroundColor:'red',height:100,width:100}}></View>
//         :
//         <View style={{backgroundColor:'green',height:100,width:100}}></View>
//       }
//       <Text style={styles.text}>Hello</Text>
//       <ScrollView>
//       <Text style={styles.text} >{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
//       </ScrollView>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   text:{
//     color:Platform.OS == "ios"?'orange':'blue',
//     fontSize:30
//   }
// })

// V37
// const App = ()=>{
//   return(
//     <WebView source={{uri:"https://reactnative.dev/"}}/>

//   )
// }

// V38
// const App=()=>{
//   const [show,setShow]  = useState(false)
//   return(
//     <View style={styles.main}>
//       {
//         show?
//         <View style={styles.modal}>
//         <View style={styles.body}>
//           <Text>Hello Coder</Text>
//             <Button title='Close' onPress={()=>setShow(false)}></Button>
//         </View>

//       </View>:
//       null
//       }
//       <Button title='Ope dialog' onPress={()=>setShow(true)}></Button>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   main:{
//     flex:1,
//     justifyContent:'center'
//   },
//   modal:{
//     flex:1,
//     backgroundColor:'rgba(50,50,50,0.5)',
//     justifyContent:'center',
//     alignItems:'center'

//   },
//   body:{
//     backgroundColor:"#fff",
//     height:300,
//     width:300,
//     padding:20,
//     justifyContent:'flex-end',
//     borderRadius:10
//   }
// })

// V38 React Navigation
// const Stack = createNativeStackNavigator();
// const App = () => {
//   const btnAction =()=>{console.warn('btn Press')}
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//          screenOptions={{

//           headerStyle: {
//             backgroundColor: 'blue',
//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {
//             fontSize: 30,
//           },
//         }}
//       >
//         <Stack.Screen
//         options={{
//           headerTitle:(props)=><Button title='Left' onPress={btnAction}></Button>,
//           headerRight:(props)=><Header/>,
//           title:'User Login',
//           headerStyle: {
//             backgroundColor: 'orange',
//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {
//             fontSize: 30,
//           },
//         }}
//           name="Login"
//           component={Login}

//         />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const Header =()=>{
//   return(
//     <Button title='btn'></Button>
//   )
// }

// V44
// const Tab = createMaterialTopTabNavigator()
// const App=()=>{
//   return(

//       <NavigationContainer>
//         <Tab.Navigator>
//             <Tab.Screen name='Login' component={Login}/>
//             <Tab.Screen name='SignUp' component={SignUp}/>
//             <Tab.Screen name='other' component={SignUp}/>
//         </Tab.Navigator>
//       </NavigationContainer>

//   )
// }

//V45
// const Login =()=>{
//   return(
//     <View>
//       <Text>
//         Login
//       </Text>
//     </View>
//   )
// }
// const SignUp =()=>{
//   return(
//     <View>
//       <Text>
//       SignUp
//       </Text>
//     </View>
//   )
// }

//V46
// const App = () => {
//   const[data,setData] = useState()
//   const getAPIData = async () => {

//     // api call
//     // console.warn("api call")
//     const url = "https://jsonplaceholder.typicode.com/posts/1"
//     // const url2 = "https://jsonplaceholder.typicode.com/posts"
//     let result = await fetch(url);
//     result = await result.json();
//     setData(result)
//     console.warn("result : ",result)

//   };

//   useEffect(() => {
//     getAPIData();
//   }, []);

//   return (
//     <View>
//       <Text>API</Text>
//       {
//         data?<View>
//           <Text style={{fontSize:30}}>{data.id}</Text>
//           <Text style={{fontSize:30}}>{data.userId}</Text>
//           <Text style={{fontSize:30}}>{data.title}</Text>
//           <Text style={{fontSize:30}}>{data.body}</Text>

//         </View>:null
//       }
//       {/* {
//         data.map((item)=><Text>{item.id}</Text>)
//       } */}
//     </View>
//   );
// };

// V47 Multiple Api
// const App=()=>{

//   const [data,setData] = useState([]);

//   const getAPIData = async ()=>{

//     // console.warn("Api data")
//     //  const url = "https://jsonplaceholder.typicode.com/posts"
//      let result = await fetch("https://jsonplaceholder.typicode.com/posts")
//      result = await result.json()
//      setData(result)
//      console.warn(data)

//    }

//    useEffect(()=>{
//     getAPIData()
//    },[])

//   return(
//     <View>
//       <ScrollView>
//       <Text>Multi Api</Text>
//       {
//         data.map((item)=><View style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:2}}>
//           <Text style={{fontSize:20,backgroundColor:'skyblue'}}>Id : {item.id}</Text>
//           <Text style={{fontSize:20,backgroundColor:'pink'}}>Id : {item.title}</Text>
//           <Text style={{fontSize:20,backgroundColor:'yellow'}}>Id : {item.body}</Text>
//         </View>)
//       }
//       </ScrollView>
//     </View>
//   )
// }

// V48 Flat ListApi

// const App =()=>{
//   const [data,setData] = useState([])

//   const getApiData = async()=>{
//       // console.warn("Api data")
//       const url = "https://jsonplaceholder.typicode.com/posts"
//       let result  = await fetch(url)
//       result = await result.json()
//       setData(result)
//       // console.warn("result:",data)
//   }
//   useEffect(()=>{
//     getApiData()
//   },[data])
//   return(
//     <View>
//        <ScrollView>
//        <Text>Multi Api</Text>
//         {
//           <FlatList
//           data={data}
//           renderItem={({item})=><View style={{margin:5,borderColor:"black",borderWidth:2}}>
//             <Text style={{fontSize:30,backgroundColor:'orange',margin:5}}>ID:{item.id}</Text>
//             <Text style={{fontSize:20,backgroundColor:'skyblue',margin:5}}>ID:{item.title}</Text>
//             <Text style={{fontSize:10,backgroundColor:'pink',margin:5}}>ID:{item.body}</Text>
//           </View>}

//           />
//         }
//        </ScrollView>
//      </View>
//   )

// }

// const App =()=>{
//   const [data,setdata] = useState([])
//   const getApidata =async()=>{
//     const url ="http://10.0.2.2:3000/users"
//     let result = await fetch(url)
//     result = await result.json()
//     console.warn(result)
//     setdata(result)
//   }
//   useEffect(()=>{
//     getApidata()
//   },[])

//   return(
//     <View>
//       <Text>JSON API</Text>
//       {
//         data.length?
//         data.map((item)=>
//         <View>
//           <Text style={{fontSize:30}}>{item.id}</Text>
//           <Text style={{fontSize:30}}>{item.name}</Text>
//           <Text style={{fontSize:30}}>{item.email}</Text>
//           <Text style={{fontSize:30}}>{item.age}</Text>
//         </View>)
//         :null
//       }
//     </View>
//   )
// }

// V52
// const App=()=>{

//   const saveApiData = async ()=>{
//     console.warn("data Saved")
//     const data={
//       name:'bit',
//       age:20,
//       email:"bit@test.com"
//     }
//     const url = "http://10.0.2.2:3000/users"
//     let result = await fetch(url,{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify(data)
//     })
//     result = await result.json();
//     console.warn(result)
//   }

//   useEffect(()=>{
//     saveApiData()
//   },[])

//   return(
//     <View>
//       <Text style={{fontSize:30}}>POST METHOD</Text>
//       <Button title='Save Data' onPress={saveApiData}></Button>
//     </View>
//   )
// }

// V54
// const App=()=>{

//   const [name,setName] = useState("")
//   const [age,setAge] = useState(0)
//   const [email,setEmail] = useState("")

//   const [nameErr, setNameErr] = useState(false)
//   const [ageErr, setAgeErr] =  useState(false)
//   const [emailErr, setEmailErr] =  useState(false)

//   const saveApiData =async()=>{
//     // console.warn(name,age,email)

//     if(!name){
//       setNameErr(true)
//     }else{
//       setNameErr(false)
//     }

//     if(!age){
//       setAgeErr(true)
//     }else{
//       setAgeErr(false)
//     }

//     if(!email){
//       setEmailErr(true)
//     }else{
//       setEmailErr(false)
//     }

//     if(!name || !age || !email){
//       return false
//     }

//     const data={
//         name:name,
//         age:age,
//         email:email
//     }

//     console.warn("next ")

//     const url = "http://10.0.2.2:3000/users"
//     let result = await fetch(url ,{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify(data)
//     })

//   }

//   const clearDdata =()=>{
//     setName("")
//     setAge(0)
//     setEmail("")
//   }

//   useEffect(()=>{
//     saveApiData
//     console.warn("useEffect")
//   },[])

//   return(
//     <View style={Styles.main}>
//       <Text style={Styles.mn}>Form</Text>
//       <TextInput style={Styles.ti} placeholder='Enter Name'  onChangeText={(text)=>setName(text)} value={name}></TextInput>
//       {nameErr?<Text style={Styles.err}>Enter Valid Name</Text>:null}

//       <TextInput style={Styles.ti} placeholder='Enter age'   onChangeText={(text)=>setAge(Number(text))} value={age}></TextInput>
//       {ageErr?<Text style={Styles.err}>Enter Valid Age</Text>:null}

//       <TextInput style={Styles.ti} placeholder='Enter email' onChangeText={(text)=>setEmail(text)} value={email}></TextInput>
//       {emailErr?<Text style={Styles.err}>Enter Valid Email</Text>:null}

//       <View style={Styles.btn}><Button title='Save Data' onPress={saveApiData}> </Button></View>
//       <View><Button title='Clear Data' onPress={clearDdata}> </Button></View>

//     </View>
//   )
// }

// const Styles = StyleSheet.create({
//   main:{
//     flex:1,
//     backgroundColor:'skyblue',
//     alignItems:'center',
//     borderWidth:2,
//     borderColor:"black",
//   },
//   mn:{
//     fontSize:30,
//     color:"black",
//     backgroundColor:"yellow",
//     margin:10,
//     padding:5,
//     borderWidth:2,
//     borderColor:"black",
//   },
//   ti:{
//     fontSize:20,
//     color:"blue",
//     backgroundColor:"pink",
//     margin:10,
//     borderWidth:2,
//     borderColor:"black",
//     width:300,
//     padding:5,

//   },
//   btn:{
//     margin:10
//   },
//   err:{
//     fontSize:15,
//     color:"red"
//   }

// })

// const App = () => {
//   const [data, setData] = useState([]);
//   const [showModal, setShowModal] = useState(false)
//   const [selectedUser,setSelectedUser] = useState(undefined)

//   const getApiData = async () => {
//     const url = 'http://10.0.2.2:3000/users';
//     let result = await fetch(url);
//     result = await result.json();

//     setData(result);

//   };

//   const deleteUser = async (id)=>{
//     const url="http://10.0.2.2:3000/users"
//     let result = await fetch(`${url}/${id}`,{
//       method:"DELETE"
//     })
//     result = await result.json()
//     if(result){
//       console.warn("USER deleted")
//       getApiData();
//     }
//   }

//   const updateUser =(data)=>{
//     setShowModal(true)
//     setSelectedUser(data)
//   }

//   useEffect(() => {
//     getApiData();
//   }, []);

//   return (
//     <View style={{flex:1}}>
//       {data.length?data.map(item => (
//         <View style={styles.main2}>
//           <View style={styles.main}>
//             <Text >{item.name}</Text>
//           </View>
//           <View style={styles.main}>
//             <Text >{item.age}</Text>
//           </View>
//           <View style={styles.main}>
//             <Button title='Delete' onPress={()=>deleteUser(item.id)}></Button>
//           </View>
//           <View style={styles.main}>
//             <Button title='Update' onPress={()=>updateUser(item)}></Button>
//           </View>
//         </View>
//       )):null}
//       <Modal visible={showModal} transparent={true}>
//         <UserModal setShowModal = {setShowModal} selectedUser={selectedUser} getApiData={getApiData}/>
//       </Modal>
//     </View>
//   );
// };

// const UserModal=(props)=>{
//   // console.warn(props.selectedUser)
//   const [name,setName] = useState(undefined)
//   const [age,setAge] = useState(undefined)
//   const [email,setEmail] = useState(undefined)

//   useEffect(()=>{
//     if(props.selectedUser){
//       setName(props.selectedUser.name)
//       setEmail(props.selectedUser.email)
//       setAge(props.selectedUser.age.toString())
//     }
//   },[props.selectedUser])

//   const UpdateUser =async()=>{
//     console.warn(name,email,age,props.selectedUser.id)
//     const url="http://10.0.2.2:3000/users"
//     const id = props.selectedUser.id
//     let result = fetch(`${url}/${id}`,{
//       method:"PUT",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify({name,age,email})
//     })
//     result = (await result).json()
//     if(result){
//       console.warn(result);
//       props.getApiData();
//       props.setShowModal(false)
//     }
//   }

//   return(
//     <View style={styles.cenModal}>
//     <View style={styles.inmodal}>
//       <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)} placeholder='Enter Name'/>
//       <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)} placeholder='Enter Email'/>
//       <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)} placeholder='Enter Age'/>
//       <View style={{marginBottom:10}}><Button title='Save' onPress={()=>UpdateUser()}></Button></View>
//       <Button title='Close' onPress={()=>props.setShowModal(false)}></Button>
//     </View>
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     margin:2
//   },
//   main2: {

//     flexDirection: 'row',
//     justifyContent:'space-around',
//     backgroundColor:'orange',
//     margin:5,
//     padding:8

//   },
//   cenModal:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   inmodal:{
//     backgroundColor:'skyblue',
//     padding:40,
//     borderRadius:10,
//     shadowColor:'black',
//     shadowOpacity:1,
//     elevation:5

//   },
//   input:{
//     borderWidth:1,
//     borderColor:"yellow",
//     backgroundColor:'pink',
//     width:200,
//     marginBottom:10,
//     fontSize:15
//   }
// });

// const App = () => {
//   const [data, setData] = useState([]);

//   const searchUser = async text => {
//     // console.warn(text)
//     const url = `http://10.0.2.2:3000/users?q=${text}`;
//     let result = await fetch(url)
//     // await fetch(`${url}?q=${text}`);
//     result = await result.json();
//     console.warn(result);
//   };

//   return (
//     <View style={{flex: 1}}>
//       <TextInput
//         style={{
//           borderColor: 'skyblue',
//           borderWidth: 1,
//           margin: 15,
//           fontSize: 20,
//         }}
//         placeholder="Search"
//         onChangeText={text => searchUser(text)}
//       />
//       {
//         data.length?
//         data.map((item)=>
//           <View>
//             <Text>{item.name}</Text>
//             <Text>{item.age}</Text>
//             <Text>{item.email}</Text>
//             </View>
//         ):null
//       }
//     </View>
//   );
// };

const App =()=>{

  const input =useRef();

  const updateInput=()=>{
    input.current.focus();
    input.current.setNativeProps({
      fontSize:24,
      color:'red'
    })
  }

  return(
    <View style={Styles.container}>
      <TextInput ref={input} style={Styles.input} placeholder='Enter Name' />
      <TextInput style={Styles.input} placeholder='Enter Email' />
      <Button title='Update Input' onPress={updateInput}></Button>
    </View>
  )
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16
  },
  input:{
    borderColor:'skyblue',
    borderWidth:2,
    margin:10
  }
})

export default App;
