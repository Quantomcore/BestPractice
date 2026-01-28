import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    elevation: 8, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  // Additional styles can be added here
  disabledContainer: {
    backgroundColor: '#aaa',
  },
  // Example for a small button
  smallContainer: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});