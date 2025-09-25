import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import NewsArticle from '../components/NewsArticle';
import { CONTAINER_STYLES } from '../styles/GlobalStyles';

export default function Lesson8Screen() {
  return (
    <SafeAreaView style={CONTAINER_STYLES.container}>
      <StatusBar style="auto" />
      <NewsArticle />
    </SafeAreaView>
  );
}