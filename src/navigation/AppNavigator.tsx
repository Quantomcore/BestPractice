// navigation/AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams'; // Adjust path as needed
import { TabNavigator } from './TabNavigator';
import { useAuth } from '../state/AuthContext';
import { LoginScreen, RegistrationScreen } from '../screens'
import { View } from 'react-native';
import { AppText, globalStyle } from '../components';

// Define the Stack type using the param list
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
// In a real app, get this from your Auth Context/State
  const { isLoggedIn, isLoading } = useAuth()
    if (isLoading) {
      return (
        <View style = {globalStyle.container}>
          <AppText variant='h1' color= 'primary'>Best Practice</AppText>
        </View>
      )
    }
    return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          // Valid User Flow: Show Tabs
          <Stack.Screen name="Tabs" component={TabNavigator} />
        ) : (
            //Use fragment to group prelogin screens
            <> 
          <Stack.Screen name="Login" component={LoginScreen} initialParams={{ isFirstTime : true }} />
          <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: true}}/>
          </>
        )}
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default AppNavigator;
