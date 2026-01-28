import { Text, TextProps, TextStyle, StyleSheet } from 'react-native';
import typography from '../themes/typography'
import { Colors } from '../themes/colors';
// 2. Define component props
type TypographyVariant = keyof typeof typography;

interface AppTextProps extends TextProps {
  variant?: TypographyVariant;
  color?: keyof typeof Colors | string;
  align?: TextStyle['textAlign'];
}

// 3. The Custom Text Component
export const AppText: React.FC<AppTextProps> = ({ 
  variant = 'p2',  // Default
  color = 'textPrimary',  // Default
  align = 'left', // Default
  style, 
  children, 
  ...rest 
}) => {
    // Determine if 'color' is a key in our Colors file or a hex string
    const textColor = (Colors && Colors[color as keyof typeof Colors]) || color;
  return (
    <Text 
      style={[
        styles.base, 
        typography[variant], 
        { color: textColor, textAlign: align }, 
        style
      ]} 
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    // Shared styles across all text, e.g., default font family
    fontFamily: 'System', 
  },
});