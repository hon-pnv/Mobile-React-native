import { View, Text, Image, StyleSheet} from 'react-native';

function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.info}>
          <Image style={styles.AvtImage} source={require('../assets/Images/people.png')} />
          <Text style={styles.name}>Hi, Ben Cline</Text>
          <Text style={styles.intro}>Welcome to Medtech</Text>
        </View>
        <Text style={styles.text}>Hi there!
          <Text>Nice to meet you^^</Text>
        </Text>
        
      </View>
    );
  }

  export default Profile;

  const styles = StyleSheet.create({
    text: {
      top: -20,
      color: 'black',
    },
    info: {
      bottom: 10

    },
    intro: {
      bottom: 120,
      fontSize:15,
    },
    name: {
      fontSize: 18,
      bottom: 130,
      color: 'black',
      marginLeft: 10,
    },
    AvtImage: {
      width: 100,
      height: 100,
      bottom: 50,
      left: -88,
    }});