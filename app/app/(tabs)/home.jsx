import { router } from "expo-router"
import { View, Text, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"



const Home = ()=>{
    return(
        <SafeAreaView>
            <View>
                <Text>WELCOME TO THE HOME SCREEN</Text>
            </View>

            <Pressable style={{backgroundColor:'blue', width:100, padding:10, borderRadius:8}}

            onPress={()=>{
                router.push('../buy-airtime')
            }}
            
            >

                <Text>Buy Airtime</Text>

            </Pressable>
        </SafeAreaView>
    )
}

export default Home;