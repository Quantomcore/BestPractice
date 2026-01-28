import { View } from 'react-native';
import { AppText, globalStyle } from '../../components';

const RegistrationScreen: React.FC = () => {
  return (
    <View style={globalStyle.container}>
    <AppText variant='h3' color='textTertiary'>Registration Screen</AppText>
    </View>
  );
};

export default RegistrationScreen;