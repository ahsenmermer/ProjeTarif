import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Categories from '../pages/Categories'
import Meals from '../pages/Meals';
import Detail from '../pages/Detail';

 const Stack = createNativeStackNavigator ();
 
 const Router = () => {

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= "Categories" component={Categories} options={{
            title:"Categories",
            headerTitleAlign:"center",
            headerTitleStyle:{color:"orange"}
          }}/>
          <Stack.Screen name="Meals" component={Meals} options={{
            title:"Meals",
            headerTitleAlign:"center",
            headerTitleStyle:{color:"orange"},
          }}/>
          <Stack.Screen name="Detail" component={Detail} options={{
            title:"Detail",
            headerTitleAlign:"center",
            headerTitleStyle:{color:"orange"},
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
 };

 export default Router;