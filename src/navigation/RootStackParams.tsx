// navigation/RootStackParams.ts

import { NavigatorScreenParams, CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainTabParamList  = {
//   Home screen has no params
  Home: { message?: string };
//   Profile   screen expects an 'userId' string param
  Profile: { userId: string };
//   Details screen expects a 'itemId' string param
  Details: { itemId: string; otherParam?: string };
};

// 2. Define Root Stack Params
// Important: 'MainTabs' takes the Tab params as a nested object
export type RootStackParamList = {
  //    Login screen expects a 'isFirstTime' Boolean param
  Login: {isFirstTime: boolean};
  //    Registration screen
  Registration: undefined;
  //    Tabs with Home, Profile, Details screens
  Tabs: NavigatorScreenParams<MainTabParamList>; // <--- The Bridge};
}

// 3. Helper Type for Screens inside Tabs
// This gives a screen access to BOTH Tab actions (jumpTo) AND Root actions (push, replace)
export type RootTabScreenProps<T extends keyof MainTabParamList> = 
CompositeScreenProps<BottomTabScreenProps<MainTabParamList, T>, NativeStackScreenProps<RootStackParamList>
>;
