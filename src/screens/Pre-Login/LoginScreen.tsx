import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParams';
import { useAuth } from '../../state/AuthContext';
import { AppText, AppButton, globalStyle } from '../../components';

// Define props type for this screen
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ route, navigation }) => {
  const { login } = useAuth()
  const { isFirstTime }  = route.params; // Type-safe access to params
  const handleLoginClick = () => {
    login()
  }
  const handleRegistrationClick = () => {
    navigation.navigate('Registration')
  }
  
  return (
    <View style={globalStyle.container}>
      <View style={globalStyle.textWrapper}>
      <AppText variant='h1'>Login</AppText>
      <AppText variant='p2' color='textTertiary'>First Time in App : {String(isFirstTime)}</AppText>
      </View>
      <View style={globalStyle.buttonWrapper}>
      <AppButton style={globalStyle.appButton} title="Login" onPress={handleLoginClick} variant="primary" />
      <AppButton style={[globalStyle.appButton]} title="Registration" onPress={handleRegistrationClick} variant="outline" />
      </View>
    </View>
  );
};

export default LoginScreen;