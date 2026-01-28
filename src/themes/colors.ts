// 1. Raw Palette (Hex codes)
export const palette = {
  white: '#FFFFFF',
  black: '#121212',
  grey100: '#F5F5F5',
  grey500: '#9E9E9E',
  grey900: '#212121',
  primary: '#007AFF', // Example iOS Blue
  error: '#FF3B30',
  background: '#F9FAFB'
};

// 2. Semantic Theme (Assigning palette values to roles)
export const Colors = {
  // Brand
  primary: palette.primary,
  background: palette.background,
  
  // Text specific roles
  textPrimary: palette.black,
  textSecondary: palette.grey900,
  textTertiary: palette.grey500,
  textInverted: palette.white,
  
  // Status
  error: palette.error,
  border: palette.grey100,
};

export type AppColors = keyof typeof Colors;