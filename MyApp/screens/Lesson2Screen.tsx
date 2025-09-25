import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CONTAINER_STYLES, TEXT_STYLES, SPACING, COLORS } from '../styles/GlobalStyles';

interface BoxProps {
  color: string;
  width: number;
  height: number;
}

const Box: React.FC<BoxProps> = ({ color, width, height }) => {
  return <View style={[styles.box, { backgroundColor: color, width, height }]} />;
};

const Lesson2Screen: React.FC = () => {
  return (
    <SafeAreaView style={CONTAINER_STYLES.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[TEXT_STYLES.h2, styles.title]}>Bài 2: Flexbox Layout</Text>
        <Text style={[TEXT_STYLES.bodyMedium, styles.description]}>
          Thực hành với Flexbox để sắp xếp các element theo các hướng khác nhau.
        </Text>

        <Text style={styles.sectionTitle}>Lần 1: Sắp xếp dọc (column)</Text>
        <View style={styles.section1}>
          <Box color="#EF4444" width={100} height={40} />
          <Box color="#F97316" width={80} height={50} />
          <Box color="#22C55E" width={120} height={60} />
          <Box color="#3B82F6" width={90} height={30} />
          <Box color="#8B5CF6" width={110} height={55} />
        </View>

        <Text style={styles.sectionTitle}>Lần 2: Sắp xếp ngang (row)</Text>
        <View style={styles.section2}>
          <Box color="#EF4444" width={100} height={40} />
          <Box color="#F97316" width={80} height={50} />
          <Box color="#22C55E" width={120} height={60} />
          <Box color="#3B82F6" width={90} height={30} />
          <Box color="#8B5CF6" width={110} height={55} />
        </View>

        <Text style={styles.sectionTitle}>Lần 3: Sắp xếp dạng lưới (wrap)</Text>
        <View style={styles.section3}>
          <Box color="#EF4444" width={100} height={40} />
          <Box color="#F97316" width={80} height={50} />
          <Box color="#22C55E" width={120} height={60} />
          <Box color="#3B82F6" width={90} height={30} />
          <Box color="#8B5CF6" width={110} height={55} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  box: {
    borderRadius: 8,
    margin: 5,
  },
  section1: {
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
    marginTop: 70,
    padding: SPACING.lg,
  },
  section2: {
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#E5E5E5',
    padding: SPACING.lg,
  },
  section3: {
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: SPACING.lg,
  },
});

export default Lesson2Screen;