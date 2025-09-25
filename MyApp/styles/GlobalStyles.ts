import { StyleSheet } from 'react-native';

// ==================== COLORS ====================
export const COLORS = {
  // Primary Colors
  primary: '#007AFF',           // iOS Blue
  primaryLight: '#5AC8FA',      // Light Blue
  primaryDark: '#0051D5',       // Dark Blue
  
  // Secondary Colors
  secondary: '#FF9500',         // Orange
  secondaryLight: '#FFCC02',    // Light Orange
  secondaryDark: '#FF6B00',     // Dark Orange
  
  // Text Colors
  textPrimary: '#000000',       // Black
  textSecondary: '#8E8E93',     // Gray
  textTertiary: '#C7C7CC',      // Light Gray
  textWhite: '#FFFFFF',         // White
  
  // Background Colors
  backgroundPrimary: '#FFFFFF',  // White
  backgroundSecondary: '#F2F2F7', // Light Gray
  backgroundTertiary: '#E5E5EA', // Medium Gray
  
  // Status Colors
  success: '#34C759',           // Green
  warning: '#FF9500',           // Orange
  error: '#FF3B30',             // Red
  info: '#007AFF',              // Blue
  
  // Border Colors
  border: '#C6C6C8',            // Border Gray
  borderLight: '#E5E5EA',       // Light Border
  
  // Shadow
  shadow: '#000000',
  
  // Transparent
  transparent: 'transparent',
};

// ==================== FONT SIZES ====================
export const FONT_SIZES = {
  // Text Sizes
  xs: 10,     // Extra Small
  sm: 12,     // Small
  md: 14,     // Medium (Base)
  lg: 16,     // Large
  xl: 18,     // Extra Large
  
  // Heading Sizes
  h1: 32,     // Main Title
  h2: 28,     // Section Title
  h3: 24,     // Subsection Title
  h4: 20,     // Card Title
  h5: 18,     // List Item Title
  h6: 16,     // Small Title
  
  // Special Sizes
  caption: 11,    // Caption Text
  button: 16,     // Button Text
  input: 16,      // Input Text
};

// ==================== SPACING ====================
export const SPACING = {
  // Base Spacing Units (4px base)
  xs: 4,      // 4px
  sm: 8,      // 8px
  md: 16,     // 16px
  lg: 24,     // 24px
  xl: 32,     // 32px
  xxl: 40,    // 40px
  
  // Component Specific Spacing
  containerPadding: 16,
  cardPadding: 16,
  buttonPadding: 12,
  inputPadding: 16,
  
  // Vertical Spacing
  sectionSpacing: 32,
  componentSpacing: 16,
  itemSpacing: 8,
};

// ==================== BORDER RADIUS ====================
export const BORDER_RADIUS = {
  sm: 4,      // Small radius
  md: 8,      // Medium radius
  lg: 12,     // Large radius
  xl: 16,     // Extra large radius
  pill: 50,   // Pill shape
  circle: 999, // Perfect circle
};

// ==================== SHADOWS ====================
export const SHADOWS = {
  // iOS Shadows
  small: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Android
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // Android
    elevation: 4,
  },
  large: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    // Android
    elevation: 8,
  },
};

// ==================== CONTAINER STYLES ====================
export const CONTAINER_STYLES = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
  
  // Safe Area Container
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
  
  // Content Container with padding
  contentContainer: {
    flex: 1,
    padding: SPACING.containerPadding,
    backgroundColor: COLORS.backgroundPrimary,
  },
  
  // Scroll Content Container
  scrollContainer: {
    paddingHorizontal: SPACING.containerPadding,
    paddingBottom: SPACING.lg,
  },
  
  // Card Container
  card: {
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.cardPadding,
    marginVertical: SPACING.sm,
    ...SHADOWS.medium,
  },
  
  // Section Container
  section: {
    marginBottom: SPACING.sectionSpacing,
  },
  
  // Row Container
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  // Column Container
  column: {
    flexDirection: 'column',
  },
  
  // Centered Container
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Space Between Container
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

// ==================== TEXT STYLES ====================
export const TEXT_STYLES = StyleSheet.create({
  // Heading Styles
  h1: {
    fontSize: FONT_SIZES.h1,
    fontWeight: '700',
    color: COLORS.textPrimary,
    lineHeight: FONT_SIZES.h1 * 1.2,
  },
  h2: {
    fontSize: FONT_SIZES.h2,
    fontWeight: '600',
    color: COLORS.textPrimary,
    lineHeight: FONT_SIZES.h2 * 1.2,
  },
  h3: {
    fontSize: FONT_SIZES.h3,
    fontWeight: '600',
    color: COLORS.textPrimary,
    lineHeight: FONT_SIZES.h3 * 1.2,
  },
  h4: {
    fontSize: FONT_SIZES.h4,
    fontWeight: '600',
    color: COLORS.textPrimary,
    lineHeight: FONT_SIZES.h4 * 1.2,
  },
  
  // Body Text Styles
  bodyLarge: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '400',
    color: COLORS.textPrimary,
    lineHeight: FONT_SIZES.lg * 1.5,
  },
  bodyMedium: {
    fontSize: FONT_SIZES.md,
    fontWeight: '400',
    color: COLORS.textPrimary,
    lineHeight: FONT_SIZES.md * 1.5,
  },
  bodySmall: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '400',
    color: COLORS.textSecondary,
    lineHeight: FONT_SIZES.sm * 1.5,
  },
  
  // Special Text Styles
  caption: {
    fontSize: FONT_SIZES.caption,
    fontWeight: '400',
    color: COLORS.textTertiary,
    lineHeight: FONT_SIZES.caption * 1.5,
  },
  button: {
    fontSize: FONT_SIZES.button,
    fontWeight: '600',
    textAlign: 'center',
  },
});

// ==================== BUTTON STYLES ====================
export const BUTTON_STYLES = StyleSheet.create({
  // Primary Button
  primaryButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.buttonPadding,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    ...SHADOWS.small,
  },
  primaryButtonText: {
    ...TEXT_STYLES.button,
    color: COLORS.textWhite,
  },
  
  // Secondary Button
  secondaryButton: {
    backgroundColor: COLORS.transparent,
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingVertical: SPACING.buttonPadding,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
  },
  secondaryButtonText: {
    ...TEXT_STYLES.button,
    color: COLORS.primary,
  },
  
  // Ghost Button
  ghostButton: {
    backgroundColor: COLORS.transparent,
    paddingVertical: SPACING.buttonPadding,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
  },
  ghostButtonText: {
    ...TEXT_STYLES.button,
    color: COLORS.primary,
  },
});

// ==================== INPUT STYLES ====================
export const INPUT_STYLES = StyleSheet.create({
  inputContainer: {
    marginBottom: SPACING.md,
  },
  inputLabel: {
    ...TEXT_STYLES.bodyMedium,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.inputPadding,
    paddingVertical: SPACING.buttonPadding,
    fontSize: FONT_SIZES.input,
    backgroundColor: COLORS.backgroundPrimary,
  },
  inputFocused: {
    borderColor: COLORS.primary,
    ...SHADOWS.small,
  },
  inputError: {
    borderColor: COLORS.error,
  },
});

// ==================== EXPORT DEFAULT ====================
export default {
  COLORS,
  FONT_SIZES,
  SPACING,
  BORDER_RADIUS,
  SHADOWS,
  CONTAINER_STYLES,
  TEXT_STYLES,
  BUTTON_STYLES,
  INPUT_STYLES,
};