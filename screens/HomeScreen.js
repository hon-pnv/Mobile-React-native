import {Button, StyleSheet, Text,Image, View, ScrollView} from 'react-native';
import React from 'react';
import Banner from '../components/Banner';
import Product from '../components/Products';
import AllProduct from '../components/AllProduct';
const Home = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View style={{marginTop: 450}}>
        <Banner />
      </View>
      <Product />
      <AllProduct />
      <View style={{top: -200}}>
        <Button 
          title="Go to detail"
          onPress={() => {
            navigation.navigate('ProDetail', {headerTitle: 'Product 1'});
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width:150,
    height:150,
    display: 'flex',
    flexDirection: 'row',
  },
  des: {
    width: 361,
    height: 203,
    top: -100,
    bottom: 200,
  },
  // btn:{
  //   top:-500,
  // },
  title: {
    width:150,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});