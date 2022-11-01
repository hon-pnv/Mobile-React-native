import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Dimensions,
} from 'react-native';
import React from 'react';

const TopProducts = () => {
    const DATA = [
        {
            id: '1',
            title: 'Accu-check Active Test Strip',
            img: require('../assets/Images/image5.png'),
            price: '$120',

        },
        {
            id: '2',
            title: 'Omron HEM-8712 BP Monitor',
            img: require('../assets/Images/image6.png'),
            price: '$120',

        },
        {
            id: '3',
            title: 'Accu-check Active Test Strip',
            img: require('../assets/Images/image7.png'),
            price: '$120',

        },
        {
            id: '4',
            title: 'Omron HEM-8712 BP Monitor',
            img: require('../assets/Images/image8.png'),
            price: '$120',

        },
        {
            id: '5',
            title: 'Omron HEM-8712 BP Monitor',
            img: require('../assets/Images/image7.png'),
            price: '$120',

        }, ,    
        {
            id: '6',
            title: 'Accu-check Active Test Strip',
            img: require('../assets/Images/image6.png'),
            price: '$120',

        }, ,
        {
            id: '7',
            title: 'Accu-check Active Test Strip',
            img: require('../assets/Images/image7.png'),
            price: '$120',

        },
    ];

    const windowWidth = Dimensions.get('window').width;
    const renderItem = ({item}) => (
        <View
            style={[
                styles.item,{
                    width: (windowWidth - 46) / 2,
                },
            ]}
            >
            <Image
                style={styles.picture}
                source={item.img}
            />
            <View style={styles.infItemStyle}>
                <Text style={styles.infItemStyle}>{item.title}</Text>
                <Text style={styles.infItemStyle}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator ={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={DATA}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    item: {
        Width: 137,
        height:230,
        marginTop: 20,
        alignItems: 'center',        
        backgroundColor:'lightpink',
        borderRadius: 30,
    },
    infItemStyle:{
        width: 130,
        height: 50,
        color: 'rgba(9, 15, 71, 1)',
        alignItems: 'center',         
        textAlign:'center',
    },
    picture: {
        top: 10,
        width: 116,
        height: 119,
        marginBottom: 25,
        backgroundColor: '#F5F7FA',
    },
});
export default TopProducts;