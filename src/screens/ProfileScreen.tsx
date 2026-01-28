import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
//Root Stack
import { MainTabParamList } from '../navigation/RootStackParams';
// Auth
import { useAuth } from '../state/AuthContext';
import { AppText, AppButton, globalStyle } from '../components';

// Define props type for this screen
type ProfileScreenProps = NativeStackScreenProps<MainTabParamList, 'Profile'>;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route }) => {
 const { userId } = route.params; // Type-safe access to params
  const { logout } = useAuth()
  const handleLogoutClick = () => {
    logout()
  }
  return (
    <View style={globalStyle.container}>
    <AppText variant='p2' color='textTertiary'>Details For UserId: { userId }</AppText>
    <AppButton style={globalStyle.appButton} title="Logout" onPress={handleLogoutClick} variant="primary" />
    </View>
  );
};

export default ProfileScreen;
