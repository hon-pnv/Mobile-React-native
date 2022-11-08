import {Text, StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const GoogleMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 52.5200066,
          longitude: 13.404954,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
    </View>
  );
};

export default GoogleMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
