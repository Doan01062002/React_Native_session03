import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginVertical: 16,
    borderRadius: 8,
    // Platform-specific styles using Platform.select
    ...Platform.select({
      ios: {
        backgroundColor: '#ffffff',
        alignItems: 'center', // Căn giữa cho iOS
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      android: {
        backgroundColor: '#2196F3', // Material Blue
        alignItems: 'flex-start', // Căn trái cho Android  
        elevation: 4, // Hiệu ứng đổ bóng Material Design
      },
    }),
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    // Platform-specific text styles
    ...Platform.select({
      ios: {
        color: '#333333', // Chữ đen cho nền trắng iOS
      },
      android: {
        color: '#ffffff', // Chữ trắng cho nền xanh Android
      },
    }),
  },
});

export default Header;