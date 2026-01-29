import { router } from "expo-router";
import { View, Text, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"



const BuyAirtime = ()=>{
    return(
        <SafeAreaView>

            <Pressable onPress={()=> router.back()}>
                <Text>Go back</Text>
            </Pressable>

            <View>
                <Text>
                    Welcome to buy airtime

                </Text>
            </View>

        </SafeAreaView>
    )
}

export default BuyAirtime;