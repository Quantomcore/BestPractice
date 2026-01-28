import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
//Root Stack
import { MainTabParamList } from '../navigation/RootStackParams'; 
// Componetes
import { AppText, AppButton, globalStyle } from '../components';

// Define props type for this screen
type HomeScreenProps = NativeStackScreenProps<MainTabParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ route, navigation }) => {
  const { message }  = route.params; // Type-safe access to params
  const handleProfileClick = () => {
      navigation.navigate('Profile', { userId: '123' })
  }
  
  return (
    <View style={globalStyle.container}>
    <AppText variant='p2' color='textTertiary'>Message : {message}</AppText>
    <AppButton style={globalStyle.appButton} title="Profile" onPress={handleProfileClick} variant="primary" />
   </View>
  );
};

export default HomeScreen;
