
import { router } from 'expo-router';
import {View, Text, Image,TextInput, Pressable, TouchableOpacity, Alert,Platform, Dimensions, ScrollView} from 'react-native';
import Button from '../components/button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Input from '../components/input';
import Post from '../components/post';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function index (){

  // STATE...

  const [email , setEmail] = useState('')

  const [lightMode , setLightMode] = useState(true)


 const [name , setName] = useState('Dayo') 


 console.log(name)

  Dimensions.get('screen') // returns {height , width , fontScale, }


  const {height , width} = Dimensions.get('screen')

  return(

    <SafeAreaView style={{
      backgroundColor: lightMode ? "white" : 'black',
      flex:1,
      paddingHorizontal:10
    }}>


      <Pressable onPress={()=>{
       
        setLightMode(!lightMode)

      }} style={{alignSelf:'flex-end', marginRight:20, marginTop:10}}>

        {

          lightMode ?  <MaterialIcons name="dark-mode" size={40} color="black" /> :   <Entypo name="light-down" size={40} color="white" />

        }
     

      </Pressable>

      <View style={{marginTop:40, gap:20}}>


        <Text style={{fontSize:40, fontWeight:'900', color:lightMode?'black':'white'}}>{name}</Text>

        <Input type={'default'} label='Full name' placeholder='Enter your full name'/>

        <Input type={'email-address'} label='Email' placeholder='Enter your email address'/>

        <Input type={'number-pad'} label="Phone number" placeholder='Enter your phone number'/>

        <TextInput style={{borderColor:'black', borderWidth:2, height:50, borderRadius:8, paddingHorizontal:10}}  onChangeText={(name)=>{

          setName(name)
        }} />

        <Pressable style={{height:50, backgroundColor:'orange', justifyContent:'center', borderRadius:8}} onPress={()=>{
          router.push('./home')

        }}>
          <Text style={{color:'white', alignSelf:'center'}}>Sign up</Text>

        </Pressable>
      </View>
    </SafeAreaView>

  )

}