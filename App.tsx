import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';
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

export default App;
