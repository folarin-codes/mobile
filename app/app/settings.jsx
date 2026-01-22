

import { router } from "expo-router"
import { View, Text, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Settings = ()=>{
    return(
        <SafeAreaView>

            <Pressable onPress={()=> router.back()}>
                <Text>Go back</Text>

            </Pressable>

            <Text>Welcome to the settings page</Text>

        </SafeAreaView>
    )
}


export default Settings