import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS, CONTAINER_STYLES } from '../styles/GlobalStyles';

interface NewsArticleProps {
  bannerImage?: string;
  title?: string;
  authorName?: string;
  authorAvatar?: string;
  publishDate?: string;
  content?: string;
}

const NewsArticle: React.FC<NewsArticleProps> = ({
  bannerImage = 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&h=400&fit=crop',
  title = 'React Native: Xây dựng ứng dụng di động đa nền tảng',
  authorName = 'Sơn Nguyễn',
  authorAvatar = 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  publishDate = '07/09/2025',
  content = `React Native đã cách mạng hóa lĩnh vực phát triển ứng dụng di động bằng cách cho phép các nhà phát triển xây dựng các ứng dụng gốc cho cả iOS và Android từ một cơ sở mã duy nhất. Được phát triển bởi Facebook, framework này sử dụng thư viện React, một trong những thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng.

Ưu điểm lớn nhất của React Native là hiệu quả trong việc phát triển. Thay vì phải viết hai ứng dụng riêng biệt cho iOS và Android, các developer có thể sử dụng một codebase chung. Điều này không chỉ tiết kiệm thời gian mà còn giảm thiểu chi phí bảo trì và cập nhật.

React Native sử dụng kiến trúc bridge để kết nối JavaScript với native code. Khi một component được render, nó sẽ được chuyển đổi thành các component native tương ứng. Ví dụ, một <View> trong React Native sẽ trở thành UIView trên iOS và View trên Android.

Một trong những tính năng nổi bật khác là Hot Reload, cho phép developers xem ngay lập tức những thay đổi họ vừa thực hiện mà không cần build lại toàn bộ ứng dụng. Điều này giúp tăng đáng kể tốc độ phát triển và debugging.

Nhiều công ty lớn đã chọn React Native cho các ứng dụng di động của họ, bao gồm Facebook, Instagram, Uber, Airbnb, và Tesla. Điều này chứng minh rằng framework này đủ mạnh mẽ để xử lý các ứng dụng có lưu lượng truy cập cao và yêu cầu hiệu suất cao.`
}) => {
  const [screenData, setScreenData] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = (result: { window: any }) => {
      setScreenData(result.window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  // Responsive font sizes với lineHeight chuẩn
  const getResponsiveFontSizes = () => {
    const { width } = screenData;
    const isTablet = width >= 768;
    const isLargePhone = width >= 414;

    return {
      title: isTablet ? 28 : isLargePhone ? 24 : 22,
      titleLineHeight: isTablet ? 36 : isLargePhone ? 32 : 28,
      content: isTablet ? 18 : isLargePhone ? 16 : 15,
      contentLineHeight: isTablet ? 28 : isLargePhone ? 25 : 23,
      authorName: isTablet ? 16 : 15,
      authorLineHeight: isTablet ? 22 : 20,
      date: isTablet ? 14 : 13,
      dateLineHeight: isTablet ? 20 : 18,
    };
  };

  const fontSizes = getResponsiveFontSizes();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Banner Image */}
      <View style={styles.bannerContainer}>
        <Image 
          source={{ uri: bannerImage }} 
          style={[styles.bannerImage, { width: screenData.width }]}
        />
      </View>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <Text style={[styles.title, { 
          fontSize: fontSizes.title,
          lineHeight: fontSizes.titleLineHeight
        }]}>
          {title}
        </Text>

        {/* Author Info */}
        <View style={styles.authorContainer}>
          <Image 
            source={{ uri: authorAvatar }} 
            style={styles.authorAvatar}
          />
          <View style={styles.authorInfo}>
            <Text style={[styles.authorName, { 
              fontSize: fontSizes.authorName,
              lineHeight: fontSizes.authorLineHeight
            }]}>
              {authorName}
            </Text>
            <Text style={[styles.publishDate, { 
              fontSize: fontSizes.date,
              lineHeight: fontSizes.dateLineHeight
            }]}>
              Đăng ngày: {publishDate}
            </Text>
          </View>
        </View>

        {/* Article Content */}
        <View style={styles.contentSection}>
          <Text style={[styles.content, { 
            fontSize: fontSizes.content,
            lineHeight: fontSizes.contentLineHeight
          }]}>
            {content}
          </Text>
        </View>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>#ReactNative</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>#MobileDev</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>#JavaScript</Text>
          </View>
        </View>

        {/* Debug Info */}
        <View style={styles.debugContainer}>
          <Text style={styles.debugText}>
            📱 Screen: {Math.round(screenData.width)} x {Math.round(screenData.height)}
          </Text>
          <Text style={styles.debugText}>
            📝 Font sizes - Title: {fontSizes.title}px, Content: {fontSizes.content}px
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
  },
  bannerContainer: {
    width: '100%',
    backgroundColor: COLORS.backgroundSecondary,
  },
  bannerImage: {
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
  },
  title: {
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xl,
    fontFamily: 'System',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xl,
    paddingBottom: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  authorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: SPACING.md,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  publishDate: {
    color: COLORS.textSecondary,
    fontWeight: '400',
  },
  contentSection: {
    marginBottom: SPACING.xl,
  },
  content: {
    color: COLORS.textPrimary,
    textAlign: 'left',
    fontFamily: 'System',
    marginBottom: SPACING.md,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: SPACING.lg,
  },
  tag: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.pill,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    marginRight: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  tagText: {
    color: COLORS.textWhite,
    fontSize: 12,
    fontWeight: '500',
  },
  debugContainer: {
    backgroundColor: COLORS.backgroundSecondary,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    marginTop: SPACING.lg,
  },
  debugText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
    textAlign: 'center',
  },
});

export default NewsArticle;