import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import { CONTAINER_STYLES, TEXT_STYLES, SPACING } from '../styles/GlobalStyles';

export default function Lesson5Screen() {
  return (
    <SafeAreaView style={CONTAINER_STYLES.container}>
      <StatusBar style="auto" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[TEXT_STYLES.h2, styles.title]}>Bài 5: Platform-specific Style</Text>
        <Text style={[TEXT_STYLES.bodyMedium, styles.description]}>
          Sử dụng Platform.select để tạo style riêng cho iOS và Android.
        </Text>
        
        <Header title="Trang chủ" />
        
        <View style={styles.infoContainer}>
          <Text style={[TEXT_STYLES.bodyMedium, styles.infoText]}>
            📱 Header này sẽ có giao diện khác nhau trên iOS và Android:
          </Text>
          <Text style={[TEXT_STYLES.bodySmall, styles.infoText]}>
            • iOS: Nền trắng, tiêu đề giữa, shadow
          </Text>
          <Text style={[TEXT_STYLES.bodySmall, styles.infoText]}>
            • Android: Nền xanh, tiêu đề trái, elevation
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  infoContainer: {
    marginTop: SPACING.xl,
    padding: SPACING.lg,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  infoText: {
    marginBottom: SPACING.sm,
  },
});