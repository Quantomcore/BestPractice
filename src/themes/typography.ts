import {TextStyle} from 'react-native';

// 1. Define your design tokens (Typography Presets)
const typography = {
  h1: { fontSize: 40, fontWeight: '700', lineHeight: 48 } as TextStyle,
  h2: { fontSize: 32, fontWeight: '700', lineHeight: 40 } as TextStyle,
  h3: { fontSize: 24, fontWeight: '600', lineHeight: 32 } as TextStyle,
  p1: { fontSize: 18, fontWeight: '400', lineHeight: 26 } as TextStyle,
  p2: { fontSize: 16, fontWeight: '400', lineHeight: 24 } as TextStyle,
  p3: { fontSize: 14, fontWeight: '400', lineHeight: 20 } as TextStyle,
};

export default typography ;
