import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProfileCardProps {
  name: string;
  description: string;
  avatarUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  name, 
  description, 
  avatarUrl = 'https://i.pravatar.cc/150' 
}) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: avatarUrl }} 
        style={styles.avatar}
        resizeMode="cover"
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    margin: 16,
    maxWidth: 300,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#f0f0f0',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default ProfileCard;