import { router } from "expo-router";
import { View, Text, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";



const Home = ()=>{

    console.log('hello from Home')
    return(
        <SafeAreaView>

            <Pressable onPress={()=>{
                router.back()

            }} style={{backgroundColor:'red', width:100, marginLeft:40}}>
                <Text>Back</Text>
            </Pressable>
            <Text>I AM THE HOME SCREEN</Text>


                  <Pressable style={{height:50, backgroundColor:'orange', justifyContent:'center', borderRadius:8}} onPress={()=>{

          router.push('./settings')
       

        }}>
          <Text style={{color:'white', alignSelf:'center'}}>Sign up</Text>

        </Pressable>
        </SafeAreaView>
    )
}

export default Home;