import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './RootStackParams';
import { HomeScreen, ProfileScreen, DetailsScreen } from '../screens';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Let nested stacks handle their own headers
        tabBarStyle: { backgroundColor: '#fff' }
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} initialParams={{ message: "Welcome user" }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'User Profile' }} initialParams={{ userId: "321" }}/>
      <Tab.Screen name="Details" component={DetailsScreen} options={{ title: 'User Details'}} initialParams={{ itemId: "123", otherParam: "" }} />
    </Tab.Navigator>
  );
};