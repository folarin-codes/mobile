import { Stack } from "expo-router"



const RootLayout = ()=>{

  return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="onboarding"/>

      <Stack.Screen name="(tabs)"/>

      <Stack.Screen name="(home)"/>


    </Stack>
 
  )
}

export default RootLayout;