'use strict';
import { StyleSheet } from 'react-native';
import { Colors } from '../themes/colors';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    paddingBottom: 50,
    paddingHorizontal: 30,
    backgroundColor: Colors.background
  },
  buttonWrapper: {
    width: '100%',
    gap: 30,
  },
   textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   appButton: {
    height: 50
  }
})