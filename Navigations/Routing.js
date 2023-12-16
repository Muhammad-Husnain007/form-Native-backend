// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer'

// // import Signup from '../LoginSignup/Signup';
// // import Signin from '../LoginSignup/Signin';
// import Home from '../AllScreens/Home';
// import About from '../AllScreens/About';

// // const Stack = createNativeStackNavigator();
// // const Tab = createMaterialTopTabNavigator();
// const Drawer = createDrawerNavigator();

// // const AuthStack = () => (
// //     <Stack.Navigator initialRouteName="Signin">
// //       <Stack.Screen name="Signup" component={Signup} />
// //       <Stack.Screen name="About" component={About} />
// //       <Stack.Screen name="Home" component={Home} />
// //       <Stack.Screen name="Signin" component={Signin} />
// //     </Stack.Navigator>
// // );

// // const MainTab = () => (

// //   <Tab.Navigator
// //   initialRouteName="Home"
// //     // screenOptions={{
// //     //   headerStyle: {
// //     //     backgroundColor: 'blue',
// //     //   },
// //     //   headerTintColor: 'orange',
// //     //   headerTitleStyle: {
// //     //     fontSize: 25,
// //     //   },
// //     // }}
// //   >
// //     <Tab.Screen name="Home" component={Home} />
// //     <Tab.Screen name="About" component={About} />
// //   </Tab.Navigator>
 
// // );
// // const MainDrawer = () => {
 
// //     <Drawer.Navigator initialRouteName="Home">
// //       <Drawer.Screen name="Home" component={Home} />
// //       <Drawer.Screen name="About" component={About} />
// //     </Drawer.Navigator>
  
   
// // }
// const Routing = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="About" component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Routing;



import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../AllScreens/Home';
import About from '../AllScreens/About';

const Drawer = createDrawerNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
