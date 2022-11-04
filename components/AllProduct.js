import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const AllProduct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.diabetic}>
        <Text style={styles.title}>All Product</Text>
        <View style={styles.items}>
          <View style={styles.item}>
            <Image
              style={styles.medicien}
              source={require('../assets/Images/image5.png')}
            />
            <Text style={styles.proName}> Sugar Subsitute</Text>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.medicien}
              source={require('../assets/Images/image6.png')}
            />
            <Text style={styles.proName}> Sugar Subsitute</Text>
          </View>
          
        </View>
      </View>
      
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    top: -50,
  },
  diabetic: {
    top: -10,
  },
  title: {
    color: 'black',
    top: -145,
  },
  items: {
    top: -120,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    width:150,
    height:200,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(245, 247, 250, 1)',
    marginLeft: 10,

  },
  medicien: {
    width:150,
    height:150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },
  proName: {
    width: 100,
    textAlign: 'center',
  },
});
export default AllProduct;