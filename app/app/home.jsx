import { router } from "expo-router";
import { View, Text, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";



const Home = ()=>{
    return(
        <SafeAreaView>

            <Pressable onPress={()=>{
                router.back()

            }} style={{backgroundColor:'red', width:100, marginLeft:40}}>
                <Text>Back</Text>
            </Pressable>
            <Text>I AM THE HOME SCREEN</Text>
        </SafeAreaView>
    )
}

export default Home;