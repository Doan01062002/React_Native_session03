import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsArticle from '../components/NewsArticle';
import { CONTAINER_STYLES, TEXT_STYLES, SPACING } from '../styles/GlobalStyles';

const Lesson8Screen: React.FC = () => {
  return (
    <SafeAreaView style={CONTAINER_STYLES.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[TEXT_STYLES.h2, styles.title]}>Bài 8: News Article Reader</Text>
        <Text style={[TEXT_STYLES.bodyMedium, styles.description]}>
          Xây dựng màn hình đọc báo hoàn chỉnh với responsive design và custom fonts.
        </Text>
        
        <NewsArticle />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 0, // NewsArticle tự quản lý padding
  },
  title: {
    textAlign: 'center',
    marginBottom: SPACING.md,
    marginHorizontal: SPACING.containerPadding,
  },
  description: {
    textAlign: 'center',
    marginBottom: SPACING.xl,
    paddingHorizontal: SPACING.containerPadding,
  },
});

export default Lesson8Screen;