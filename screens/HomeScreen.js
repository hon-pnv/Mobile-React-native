import {Button, StyleSheet, Text,Image, View} from 'react-native';
import React from 'react';
import Banner from '../components/Banner';
const Home = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 24}}>Home</Text>
      <Banner />
      <View style={styles.container}>
        
        <View style={styles.des}>
          <Image
            style={styles.logo}
            source={require('../assets/Images/image7.png')}
          />
          <View style={styles.title}>
            <Text>Sugar Substitute</Text>
            <Text>Price: 120k</Text>
          </View>
        </View>
        
      </View>
      <Button
        title="Go to detail"
        onPress={() => {
          navigation.navigate('ProDetail', {headerTitle: 'Product 1'});
        }}
      />
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
  title: {
    width:150,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});