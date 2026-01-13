
import { router } from 'expo-router';
import {View, Text, Image,TextInput, Pressable, TouchableOpacity, Alert,} from 'react-native';
import Button from '../components/button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Input from '../components/input';


export default function index (){

  // STATE...

  const [email , setEmail] = useState('')

  const [lightMode , setLightMode] = useState(true)
  console.log(email)


  return(

    <SafeAreaView style={{
      backgroundColor: lightMode ? 'off-white' :'black' ,
      flex:1,
      paddingHorizontal:10
    }}>
{/* 
      <Text style={{fontSize:50, color:'red', fontWeight:'900', textAlign:'center'}}>Hello world!</Text>
      <Text>My name is micheal</Text>
      <Text>I love coding</Text>

      <Image style={{width:300, height:100, alignSelf:'center'}} source={require('../assets/images/screen.png')}  /> */}

{/* 
      <TextInput onChangeText={(text)=>{

        setEmail(text)

      }} 
      
      placeholderTextColor={'black'} placeholder='Enter email' style={{backgroundColor:'white', height:50, marginTop:20, borderRadius:20, paddingHorizontal:20}}/> */}


      {/* <Pressable onPress={()=> router.push('./home')}>

        <Text> Click me!</Text>
      
      </Pressable> */}

{/* 
      <TouchableOpacity onPress={()=> setLightMode(!lightMode) } style={{backgroundColor:'orange', height:50, borderRadius:8, justifyContent:'center'}}>

        <Text style={{ alignSelf:'center', color:'white', fontSize:20}}>Enter</Text>

      </TouchableOpacity> */}

{/* 
      <View style={{gap:30}}>

      <Button style={{backgroundColor:'red', marginTop:20}} text={'Click me'}/>

      <Button text={'press me'}/>

      <Button text={'login'}/>

      <Button style={{backgroundColor:'blue'}} text={'sign in'}/>

      </View> */}


      <View style={{marginTop:40, gap:20}}>

        <Input type={'default'} label='Full name' placeholder='Enter your full name'/>

        <Input type={'email-address'} label='Email' placeholder='Enter your email address'/>

        <Input type={'number-pad'} label="Phone number" placeholder='Enter your phone number'/>


      </View>




     

    </SafeAreaView>

  )

}