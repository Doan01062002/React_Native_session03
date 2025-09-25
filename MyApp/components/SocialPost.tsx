import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Heart, MessageCircle, Send } from 'lucide-react-native';

interface SocialPostProps {
  userName: string;
  avatarUrl: string;
  postImageUrl: string;
  description: string;
}

const SocialPost: React.FC<SocialPostProps> = ({
  userName,
  avatarUrl,
  postImageUrl,
  description,
}) => {
  return (
    <View style={styles.container}>
      {/* Header - Avatar và tên người đăng */}
      <View style={styles.header}>
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      {/* Content - Hình ảnh bài post */}
      <View style={styles.content}>
        <Image source={{ uri: postImageUrl }} style={styles.postImage} />
      </View>

      {/* Action Bar - 3 icon ngang */}
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionButton}>
          <Heart size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Send size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Description - Mô tả bài viết */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  actionButton: {
    padding: 8,
    marginRight: 12,
  },
  descriptionContainer: {
    paddingHorizontal: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default SocialPost;