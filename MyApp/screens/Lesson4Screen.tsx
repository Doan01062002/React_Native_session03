import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '../components/LoginForm';
import { CONTAINER_STYLES, TEXT_STYLES, SPACING } from '../styles/GlobalStyles';

const Lesson4Screen: React.FC = () => {
  return (
    <SafeAreaView style={CONTAINER_STYLES.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[TEXT_STYLES.h2, styles.title]}>Bài 4: Login Form</Text>
        <Text style={[TEXT_STYLES.bodyMedium, styles.description]}>
          Xây dựng form đăng nhập với logo, TextInput và TouchableOpacity button.
        </Text>
        
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: SPACING.containerPadding,
  },
  title: {
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  description: {
    textAlign: 'center',
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.md,
  },
});

export default Lesson4Screen;