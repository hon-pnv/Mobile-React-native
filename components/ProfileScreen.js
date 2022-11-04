import { View, Text, Image, StyleSheet, BackHandler} from 'react-native';

function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.profile}>
          <Text style={styles.title}>My profile</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.info}>
            <Image style={styles.AvtImage} source={require('../assets/Images/people.png')} />
            <Text style={styles.name}>Hi, Ben Cline</Text>
            <Text style={styles.intro}>Welcome to Medtech</Text>
          </View>
          <View style={styles.leftComponents}>
            <View style={styles.smallText}>
              <Image style={styles.icon} source={require('../assets/Images/private.png')} />
              <Text style={styles.smalltitle}>Private Account</Text>
            </View>
            <View style={styles.smallText}>
              <Image style={styles.icon} source={require('../assets/Images/consult.png')} />
              <Text style={styles.smalltitle}>My Consults</Text>
            </View>
            <View style={styles.smallText}>
              <Image style={styles.icon} source={require('../assets/Images/order.png')} />
              <Text style={styles.smalltitle}>My Orders</Text>
            </View>
            <View style={styles.smallText}>
              <Image style={styles.icon} source={require('../assets/Images/billing.png')} />
              <Text style={styles.smalltitle}>Billing</Text>
            </View>
            <View style={styles.smallText}>
              <Image style={styles.icon} source={require('../assets/Images/fag.png')} />
              <Text style={styles.smalltitle}>Fags</Text>
            </View>
            <View style={styles.smallText}>
              <Image style={styles.icon} source={require('../assets/Images/setting.png')} />
              <Text style={styles.smalltitle}>Setting</Text>
            </View>
          </View>
        </View>
        
        
      </View>
    );
  }

  export default Profile;

  const styles = StyleSheet.create({
    profile: {
      bottom: -40,
    },
    content:{
      top:-80,
      left:-10,
      
    },
    smalltitle: {
      left: 20,

    },
    title: {
      color:'black',
      top: -240,
      left: -120,
      fontSize: 20,
    },
    smallText: {
      flexDirection: 'row',
      marginBottom: 10,
      left: -90,

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
      width: 70,
      height: 70,
      bottom: 50,
      left: -88,
    },
    icon: {
     marginLeft: 10,
    },
  });