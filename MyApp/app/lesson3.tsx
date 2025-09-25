import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import SocialPost from '../components/SocialPost';
import { CONTAINER_STYLES, TEXT_STYLES, SPACING } from '../styles/GlobalStyles';

export default function Lesson3Screen() {
  return (
    <SafeAreaView style={CONTAINER_STYLES.container}>
      <StatusBar style="auto" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[TEXT_STYLES.h2, styles.title]}>Bài 3: Social Media Post</Text>
        <Text style={[TEXT_STYLES.bodyMedium, styles.description]}>
          Tạo giao diện một bài post trên mạng xã hội với header, content, action bar và description.
        </Text>
        
        <SocialPost
          userName="thuy_anh26"
          avatarUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          postImageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          description="Một buổi chiều yên bình bên bờ biển. 🌊 ☀️"
        />
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