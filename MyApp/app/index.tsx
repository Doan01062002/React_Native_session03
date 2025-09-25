import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ProfileCard from '../components/ProfileCard';
import { CONTAINER_STYLES, TEXT_STYLES, SPACING } from '../styles/GlobalStyles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={CONTAINER_STYLES.container}>
      <StatusBar style="auto" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[TEXT_STYLES.h2, styles.title]}>Bài 1: Profile Card</Text>
        <Text style={[TEXT_STYLES.bodyMedium, styles.description]}>
          Tạo một component Profile Card hiển thị thông tin cá nhân với avatar, tên và mô tả.
        </Text>
        
        <ProfileCard
          name="Lê Minh Anh"
          description="Software Engineer | Mobile Developer"
          avatarUrl="https://i.pravatar.cc/150?img=1"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: SPACING.containerPadding,
    alignItems: 'center',
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
