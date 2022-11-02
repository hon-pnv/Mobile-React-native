// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';
// import TopProduct from './components/TopProducts';
// import AllProducts from './components/AllProduct';
// import Banner from './components/Banner';
// import Tab from './Navigation/tabs';
// import { NavigationContainer } from '@react-navigation/native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.banner}>
//         <Banner />
//       </View>
//       <View style={styles.title}>
//         <Text>Diabetic Diet</Text>
//       </View>
//       <View style={styles.topProduct}>
//         <TopProduct />
//       </View>
//       <View style={styles.title_a}>
//        <Text>All Products</Text>
//       </View>
//       <View style={styles.all_product}>
//         <AllProducts/>
//         </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 16,
//   },
//   title: {
//     width: 94,
//     height: 25,
//     left: 24,
//     top: 60,
//   },
//   title_a: {
//     width: 94,
//     height: 25,
//     top: 30,
//   },
//   all_product:{
//     top: 10,
//   }

// }
// )


// export default App;


// import * as React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import tabs from './Navigation/tabs';
// import ProDetail from './components/ProDetail';
// import Tabs from './components/TabNavigation';
// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={({navigation}) => {
//           return {
//             animation: 'fade_from_bottom',
//             headerLeft: () => {
//               return (
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.goBack();
//                   }}>
//                   <Text>Back</Text>
//                 </TouchableOpacity>
//               );
//             },
//           };
//         }}>

//         <Stack.Screen
//           name="Main"
//           component={tabs}
//           options={{headerShown: false}}
//         />

//         <Stack.Screen
//           options={({route, navigation}) => {
//             return {
//               headerTitleAlign: 'center',
//               // title: route?.params?.headerTitle,
//               title: 'Product 1',
//             };
//           }}
//           name={'ProDetail'}
//           component={ProDetail}
//         />

//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//       <Tabs />
//     </NavigationContainer>
//   );
// }

// export default App;

import Tabs from "./components/TabNavigation";
import {NavigationContainer} from '@react-navigation/native';

const App = () => (
  <NavigationContainer>
    <Tabs/>
  </NavigationContainer>

);


export default App;