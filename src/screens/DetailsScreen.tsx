import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
//Root Stack
import { MainTabParamList } from '../navigation/RootStackParams';
import { AppText, globalStyle } from '../components';

// Define props type for this screen
type DetailsScreenProps = NativeStackScreenProps<MainTabParamList, 'Details'>;

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { itemId, otherParam } = route.params; // Type-safe access to params

  return (
    <View style={globalStyle.container}>
    <AppText variant='h2' color='textTertiary'>Item ID: {itemId}</AppText>
    <AppText variant='p2' color='textTertiary'>Other Param: {otherParam || 'N/A'}</AppText>
    </View>
  );
};

export default DetailsScreen;