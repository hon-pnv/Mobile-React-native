import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.diabetic}>
        <Text style={styles.title}>Diabetic Diet</Text>
        <View style={styles.items}>
          <View style={styles.item}>
            <Image
              style={styles.medicien}
              source={require('../assets/Images/image2.png')}
            />
            <Text style={styles.proName}> Sugar Subsitute</Text>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.medicien}
              source={require('../assets/Images/image3.png')}
            />
            <Text style={styles.proName}> Sugar Subsitute</Text>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.medicien}
              source={require('../assets/Images/image4.png')}
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
    top: -100,
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(245, 247, 250, 1)',
    marginLeft: 10,

  },
  medicien: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },
  proName: {
    width: 80,
    textAlign: 'center',
  },
});
export default Product;