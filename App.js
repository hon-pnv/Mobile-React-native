import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TopProduct from './components/TopProducts';
import AllProducts from './components/AllProduct';
import Banner from './components/Banner';
import Tab from './Navigation/tabs';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Banner />
      </View>
      <View style={styles.title}>
        <Text>Diabetic Diet</Text>
      </View>
      <View style={styles.topProduct}>
        <TopProduct />
      </View>
      <View style={styles.title_a}>
       <Text>All Products</Text>
      </View>
      <View style={styles.all_product}>
        <AllProducts/>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  title: {
    width: 94,
    height: 25,
    left: 24,
    top: 60,
  },
  title_a: {
    width: 94,
    height: 25,
    top: 30,
  },
  all_product:{
    top: 10,
  }

}
)


export default App;