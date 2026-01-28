import { 
  Pressable, 
  StyleSheet, 
  ActivityIndicator, 
  ViewStyle, 
  StyleProp 
} from 'react-native';
import { Colors } from '../themes/colors';
import { AppText } from './AppText';

// 1. Define Button Variants
type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'danger';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  style,
}) => {
  
  // 2. Logic for Dynamic Styles based on Variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'outline':
        return { 
          container: styles.outlineContainer, 
          text: 'primary' as keyof typeof Colors 
        };
      case 'ghost':
        return { 
          container: styles.ghostContainer, 
          text: 'primary' as keyof typeof Colors 
        };
      case 'danger':
        return { 
          container: styles.dangerContainer, 
          text: 'white' as any // or textInverted
        };
      default:
        return { 
          container: styles.primaryContainer, 
          text: 'textInverted' as keyof typeof Colors 
        };
    }
  };

  const { container, text } = getVariantStyles();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      // 3. New in 2026: Use the 'pressed' state for modern feedback
      style={({ pressed }) => [
        styles.base,
        container,
        size === 'sm' && styles.sm,
        size === 'lg' && styles.lg,
        pressed && styles.pressed,
        (disabled || loading) && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? Colors.background : Colors.primary} />
      ) : (
        <AppText 
          variant={size === 'sm' ? 'p3' : 'p2'} 
          color={text} 
          style={styles.textWeight}
        >
          {title}
        </AppText>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 12, // Modern rounded corners
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  // Sizes
  sm: { height: 36 },
  md: { height: 48 },
  lg: { height: 56 },
  
  // Variants
  primaryContainer: {
    backgroundColor: Colors.primary,
  },
  outlineContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  ghostContainer: {
    backgroundColor: 'transparent',
  },
  dangerContainer: {
    backgroundColor: Colors.error,
  },

  // States
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }], // Modern subtle haptic-like visual
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: '#E0E0E0', // Standard light grey for disabled
    borderColor: '#E0E0E0',
  },
  textWeight: {
    fontWeight: '600',
  },
});



