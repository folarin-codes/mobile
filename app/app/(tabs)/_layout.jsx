import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const TabsLayout = ()=>{
    return(

        <Tabs screenOptions={{

            headerShown:false,

            tabBarActiveTintColor:'blue',

            tabBarInactiveTintColor:'grey',

            tabBarStyle:{
                height:88,
                marginHorizontal:30,
                marginBottom:20,
                borderRadius:44,
                justifyContent:'center',
                alignItems:'center',
                // position:"absolute",
                // top:70
            },

            tabBarIconStyle:{
                marginTop:20
            }

        }}>
            <Tabs.Screen name="home"
            options={{
                title:"Home",
                tabBarIcon: ({color})=> <Entypo name="home" size={24} color={color} />
            }} 
            />
            <Tabs.Screen name="settings"

            options={{
                title:'Settings',
                tabBarIcon : ({color})=> <Feather name="settings" size={24} color={color} />
            }}
            
            />
            <Tabs.Screen name="profile" 

            options={{
                title:'Profile',
                tabBarIcon : ({color})=> <AntDesign name="profile" size={24} color={color} />
            }}
            
            />


            <Tabs.Screen name="pay" 

            options={{
                title:'Pay',
                tabBarIcon : ({color})=> <MaterialIcons name="payment" size={24} color={color} />
            }}
            
            />
       
        </Tabs>

       

    )
}


export default TabsLayout;