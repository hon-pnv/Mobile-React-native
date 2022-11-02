import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen';
import Profile from './ProfileScreen';
import ProDetail from './ProDetail';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>            
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="ProDetail" component={ProDetail} />
        </Tab.Navigator>
     
    );
}

export default Tabs;
