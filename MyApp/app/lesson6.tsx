import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ProductGrid from '../components/ProductGrid';
import { CONTAINER_STYLES, TEXT_STYLES, SPACING } from '../styles/GlobalStyles';

export default function Lesson6Screen() {
  return (
    <SafeAreaView style={CONTAINER_STYLES.container}>
      <StatusBar style="auto" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[TEXT_STYLES.h2, styles.title]}>Bài 6: Responsive Design</Text>
        <Text style={[TEXT_STYLES.bodyMedium, styles.description]}>
          Tạo ProductGrid responsive tự động điều chỉnh theo kích thước màn hình và hướng xoay thiết bị.
        </Text>
        
        <ProductGrid />
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
});