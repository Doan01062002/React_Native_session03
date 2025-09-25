import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {
  COLORS,
  FONT_SIZES,
  SPACING,
  BORDER_RADIUS,
  CONTAINER_STYLES,
  TEXT_STYLES,
  BUTTON_STYLES,
  INPUT_STYLES,
} from '../styles/GlobalStyles';

const GlobalStyleDemo: React.FC = () => {
  return (
    <View style={CONTAINER_STYLES.card}>
      <Text style={TEXT_STYLES.h3}>Demo Global Styles</Text>
      
      {/* Colors Demo */}
      <View style={CONTAINER_STYLES.section}>
        <Text style={TEXT_STYLES.h4}>Colors</Text>
        <View style={CONTAINER_STYLES.row}>
          <View style={{
            width: 30,
            height: 30,
            backgroundColor: COLORS.primary,
            borderRadius: BORDER_RADIUS.sm,
            marginRight: SPACING.sm,
          }} />
          <Text style={TEXT_STYLES.bodyMedium}>Primary: {COLORS.primary}</Text>
        </View>
        
        <View style={[CONTAINER_STYLES.row, { marginTop: SPACING.xs }]}>
          <View style={{
            width: 30,
            height: 30,
            backgroundColor: COLORS.secondary,
            borderRadius: BORDER_RADIUS.sm,
            marginRight: SPACING.sm,
          }} />
          <Text style={TEXT_STYLES.bodyMedium}>Secondary: {COLORS.secondary}</Text>
        </View>
        
        <View style={[CONTAINER_STYLES.row, { marginTop: SPACING.xs }]}>
          <View style={{
            width: 30,
            height: 30,
            backgroundColor: COLORS.success,
            borderRadius: BORDER_RADIUS.sm,
            marginRight: SPACING.sm,
          }} />
          <Text style={TEXT_STYLES.bodyMedium}>Success: {COLORS.success}</Text>
        </View>
      </View>

      {/* Typography Demo */}
      <View style={CONTAINER_STYLES.section}>
        <Text style={TEXT_STYLES.h4}>Typography</Text>
        <Text style={TEXT_STYLES.h1}>Heading 1 ({FONT_SIZES.h1}px)</Text>
        <Text style={TEXT_STYLES.h2}>Heading 2 ({FONT_SIZES.h2}px)</Text>
        <Text style={TEXT_STYLES.bodyLarge}>Body Large ({FONT_SIZES.lg}px)</Text>
        <Text style={TEXT_STYLES.bodyMedium}>Body Medium ({FONT_SIZES.md}px)</Text>
        <Text style={TEXT_STYLES.bodySmall}>Body Small ({FONT_SIZES.sm}px)</Text>
        <Text style={TEXT_STYLES.caption}>Caption ({FONT_SIZES.caption}px)</Text>
      </View>

      {/* Spacing Demo */}
      <View style={CONTAINER_STYLES.section}>
        <Text style={TEXT_STYLES.h4}>Spacing</Text>
        <View style={CONTAINER_STYLES.row}>
          <View style={{
            width: SPACING.xs,
            height: 20,
            backgroundColor: COLORS.primary,
            marginRight: SPACING.sm,
          }} />
          <Text style={TEXT_STYLES.bodyMedium}>XS: {SPACING.xs}px</Text>
        </View>
        
        <View style={[CONTAINER_STYLES.row, { marginTop: SPACING.xs }]}>
          <View style={{
            width: SPACING.sm,
            height: 20,
            backgroundColor: COLORS.secondary,
            marginRight: SPACING.sm,
          }} />
          <Text style={TEXT_STYLES.bodyMedium}>SM: {SPACING.sm}px</Text>
        </View>
        
        <View style={[CONTAINER_STYLES.row, { marginTop: SPACING.xs }]}>
          <View style={{
            width: SPACING.md,
            height: 20,
            backgroundColor: COLORS.success,
            marginRight: SPACING.sm,
          }} />
          <Text style={TEXT_STYLES.bodyMedium}>MD: {SPACING.md}px</Text>
        </View>
        
        <View style={[CONTAINER_STYLES.row, { marginTop: SPACING.xs }]}>
          <View style={{
            width: SPACING.lg,
            height: 20,
            backgroundColor: COLORS.warning,
            marginRight: SPACING.sm,
          }} />
          <Text style={TEXT_STYLES.bodyMedium}>LG: {SPACING.lg}px</Text>
        </View>
      </View>

      {/* Button Demo */}
      <View style={CONTAINER_STYLES.section}>
        <Text style={TEXT_STYLES.h4}>Buttons</Text>
        
        <TouchableOpacity style={BUTTON_STYLES.primaryButton}>
          <Text style={BUTTON_STYLES.primaryButtonText}>Primary Button</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[BUTTON_STYLES.secondaryButton, { marginTop: SPACING.sm }]}>
          <Text style={BUTTON_STYLES.secondaryButtonText}>Secondary Button</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[BUTTON_STYLES.ghostButton, { marginTop: SPACING.sm }]}>
          <Text style={BUTTON_STYLES.ghostButtonText}>Ghost Button</Text>
        </TouchableOpacity>
      </View>

      {/* Input Demo */}
      <View style={CONTAINER_STYLES.section}>
        <Text style={TEXT_STYLES.h4}>Input Fields</Text>
        
        <View style={INPUT_STYLES.inputContainer}>
          <Text style={INPUT_STYLES.inputLabel}>Email</Text>
          <TextInput
            style={INPUT_STYLES.input}
            placeholder="Nhập email của bạn"
            placeholderTextColor={COLORS.textSecondary}
          />
        </View>
        
        <View style={INPUT_STYLES.inputContainer}>
          <Text style={INPUT_STYLES.inputLabel}>Password</Text>
          <TextInput
            style={INPUT_STYLES.input}
            placeholder="Nhập mật khẩu"
            placeholderTextColor={COLORS.textSecondary}
            secureTextEntry
          />
        </View>
      </View>

      {/* Container Demo */}
      <View style={CONTAINER_STYLES.section}>
        <Text style={TEXT_STYLES.h4}>Container Styles</Text>
        
        <View style={[CONTAINER_STYLES.card, { backgroundColor: COLORS.backgroundSecondary }]}>
          <Text style={TEXT_STYLES.bodyMedium}>Card Container với shadow</Text>
        </View>
        
        <View style={[CONTAINER_STYLES.row, CONTAINER_STYLES.spaceBetween, { 
          backgroundColor: COLORS.backgroundTertiary,
          padding: SPACING.md,
          borderRadius: BORDER_RADIUS.md,
          marginTop: SPACING.sm 
        }]}>
          <Text style={TEXT_STYLES.bodyMedium}>Space Between</Text>
          <Text style={TEXT_STYLES.bodySmall}>Right Side</Text>
        </View>
        
        <View style={[CONTAINER_STYLES.center, {
          backgroundColor: COLORS.primary,
          height: 60,
          borderRadius: BORDER_RADIUS.md,
          marginTop: SPACING.sm
        }]}>
          <Text style={[TEXT_STYLES.bodyMedium, { color: COLORS.textWhite }]}>Center Container</Text>
        </View>
      </View>
    </View>
  );
};

export default GlobalStyleDemo;