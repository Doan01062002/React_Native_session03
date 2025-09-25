import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

// Mock data sản phẩm
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    price: '999$',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=300&h=300&fit=crop',
  },
  {
    id: '2',
    name: 'MacBook Air',
    price: '1199$',
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop',
  },
  {
    id: '3',
    name: 'iPad Pro',
    price: '799$',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop',
  },
  {
    id: '4',
    name: 'Apple Watch',
    price: '399$',
    imageUrl: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop',
  },
  {
    id: '5',
    name: 'AirPods Pro',
    price: '249$',
    imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop',
  },
  {
    id: '6',
    name: 'Samsung Galaxy',
    price: '899$',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
  },
  {
    id: '7',
    name: 'Dell Laptop',
    price: '799$',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
  },
  {
    id: '8',
    name: 'Sony Camera',
    price: '1299$',
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop',
  },
];

const ProductGrid: React.FC = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = (result: { window: any }) => {
      setScreenData(result.window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  // Tính toán số cột dựa trên kích thước màn hình
  const getColumnsCount = () => {
    const { width, height } = screenData;
    const isLandscape = width > height;
    const isTablet = Math.min(width, height) >= 768; // Coi là tablet nếu kích thước nhỏ nhất >= 768px

    if (isTablet) {
      return 4; // Máy tính bảng: 4 sản phẩm/hàng
    } else if (isLandscape) {
      return 3; // Điện thoại ngang: 3 sản phẩm/hàng
    } else {
      return 2; // Điện thoại dọc: 2 sản phẩm/hàng
    }
  };

  // Tính toán kích thước sản phẩm
  const getItemDimensions = () => {
    const columns = getColumnsCount();
    const padding = 16;
    const itemSpacing = 12;
    const availableWidth = screenData.width - (padding * 2) - (itemSpacing * (columns - 1));
    const itemWidth = availableWidth / columns;
    
    return {
      width: itemWidth,
      height: itemWidth * 1.3, // Tỷ lệ chiều cao/chiều rộng = 1.3
      fontSize: itemWidth > 150 ? 16 : 14, // Font size tùy theo kích thước
      priceSize: itemWidth > 150 ? 14 : 12,
    };
  };

  const columns = getColumnsCount();
  const itemDimensions = getItemDimensions();

  // Render từng sản phẩm
  const renderProduct = (product: Product) => (
    <TouchableOpacity
      key={product.id}
      style={[
        styles.productItem,
        {
          width: itemDimensions.width,
          height: itemDimensions.height,
        },
      ]}
    >
      <Image
        source={{ uri: product.imageUrl }}
        style={[
          styles.productImage,
          {
            width: itemDimensions.width - 16,
            height: itemDimensions.height * 0.6,
          },
        ]}
      />
      <View style={styles.productInfo}>
        <Text
          style={[
            styles.productName,
            { fontSize: itemDimensions.fontSize },
          ]}
          numberOfLines={2}
        >
          {product.name}
        </Text>
        <Text
          style={[
            styles.productPrice,
            { fontSize: itemDimensions.priceSize },
          ]}
        >
          {product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Danh sách sản phẩm ({columns} cột)
      </Text>
      <Text style={styles.screenInfo}>
        Màn hình: {Math.round(screenData.width)} x {Math.round(screenData.height)}
      </Text>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.grid, { gap: 12 }]}>
          {mockProducts.map(renderProduct)}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  screenInfo: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    borderRadius: 8,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 8,
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontWeight: '700',
    color: '#007AFF',
  },
});

export default ProductGrid;