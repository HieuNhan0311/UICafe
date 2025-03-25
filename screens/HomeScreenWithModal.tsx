'use client';

import {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import type {HomeScreenProps} from '../types/navigation';

import Header from './Order/Header';
import SearchBar from './Order/SearchBar';
import CategoryTabs from './Order/CategoryTabs';
import SubCategoryList from './Order/SubCategoryList';
import MenuList from './Order/MenuList';
import BottomButtons from './Order/BottomButtons';
import AddToCartSheet from './Cart/AddToCartSheet';
import type {MenuItem} from './context/CartContext';

import AddToCartSheetModal, {
  type AddToCartSheetRef,
} from '../screens/Cart/AddToCartSheetModal';

// // Dữ liệu mẫu
// const initialMenuItems: MenuItem[] = [
//   {
//     id: '1',
//     name: 'Cafe sữa',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '2',
//     name: 'Cafe đá',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '3',
//     name: 'Trà sữa',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '38',
//     name: 'Capuchino',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   // Thêm các mục khác nếu cần
// ];

// const HomeScreen = () => {
//   // Sử dụng kiểu dữ liệu đúng cho navigation
//   const navigation = useNavigation<HomeScreenProps['navigation']>();
//   const bottomSheetRef = useRef<AddToCartSheetRef>(null);

//   // State
//   const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
//     0,
//   );
//   const [menuItems] = useState(initialMenuItems);
//   const [searchText, setSearchText] = useState('');
//   const [filteredItems, setFilteredItems] = useState(menuItems);

//   // Hàm xử lý tìm kiếm
//   const handleSearch = (text: string) => {
//     setSearchText(text);
//     if (text.trim() === '') {
//       setFilteredItems(menuItems);
//     } else {
//       setFilteredItems(
//         menuItems.filter(item =>
//           item.name.toLowerCase().includes(text.toLowerCase()),
//         ),
//       );
//     }
//   };

//   // Hàm mở bottom sheet khi bấm dấu cộng
//   const handleAddButtonPress = (item: MenuItem) => {
//     console.log('click me!', item.name);
//     bottomSheetRef.current?.present(item);
//   };

//   // Hàm điều hướng đến màn hình giỏ hàng
//   const navigateToCart = () => {
//     navigation.navigate('Cart');
//   };

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <BottomSheetModalProvider>
//         <SafeAreaView style={styles.container}>
//           <Header title="Bàn 22" />

//           <SearchBar searchText={searchText} onSearchChange={handleSearch} />

//           <CategoryTabs
//             selectedCategory={selectedCategory}
//             onSelectCategory={setSelectedCategory}
//           />

//           <View style={styles.body}>
//             <SubCategoryList
//               selectedSubCategory={selectedSubCategory}
//               onSelectSubCategory={setSelectedSubCategory}
//             />

//             <MenuList items={filteredItems} onAddPress={handleAddButtonPress} />
//           </View>

//           <BottomButtons onViewOrderPress={navigateToCart} />

//           {/* Bottom Sheet Modal để thêm vào giỏ hàng */}
//           <AddToCartSheetModal ref={bottomSheetRef} item={null} />

//           {/* Nút debug để kiểm tra bottom sheet */}
//           <TouchableOpacity
//             style={styles.debugButton}
//             onPress={() => {
//               console.log('Debug button pressed');
//               if (bottomSheetRef.current) {
//                 bottomSheetRef.current.present(initialMenuItems[0]);
//               }
//             }}>
//             <Text style={styles.debugButtonText}>Test Bottom Sheet</Text>
//           </TouchableOpacity>
//         </SafeAreaView>
//       </BottomSheetModalProvider>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     backgroundColor: '#fff',
//   },
//   body: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   debugButton: {
//     position: 'absolute',
//     bottom: 100,
//     right: 20,
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 5,
//     zIndex: 1000,
//   },
//   debugButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });
const initialMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Cafe sữa',
    price: 100000,
    image:
      'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
    quantity: 1,
  },
  {
    id: '2',
    name: 'Cafe đá',
    price: 100000,
    image:
      'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
    quantity: 1,
  },
  {
    id: '3',
    name: 'Trà sữa',
    price: 100000,
    image:
      'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
    quantity: 1,
  },
  {
    id: '38',
    name: 'Capuchino',
    price: 100000,
    image:
      'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
    quantity: 1,
  },
  // Thêm các mục khác nếu cần
];

const HomeScreen = () => {
  // Sử dụng kiểu dữ liệu đúng cho navigation
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  const bottomSheetRef = useRef<AddToCartSheetRef>(null);

  // State
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
    0,
  );
  const [menuItems] = useState(initialMenuItems);
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(menuItems);

  // Hàm xử lý tìm kiếm
  const handleSearch = (text: string) => {
    setSearchText(text);
    if (text.trim() === '') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(
        menuItems.filter(item =>
          item.name.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    }
  };

  // Hàm mở bottom sheet khi bấm dấu cộng
  const handleAddButtonPress = (item: MenuItem) => {
    console.log('click me!', item.name);
    bottomSheetRef.current?.present(item);
  };

  // Hàm điều hướng đến màn hình giỏ hàng
  const navigateToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>
          <Header title="Bàn 22" />

          <SearchBar searchText={searchText} onSearchChange={handleSearch} />

          <CategoryTabs
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <View style={styles.body}>
            <SubCategoryList
              selectedSubCategory={selectedSubCategory}
              onSelectSubCategory={setSelectedSubCategory}
            />

            <MenuList items={filteredItems} onAddPress={handleAddButtonPress} />
          </View>

          <BottomButtons onViewOrderPress={navigateToCart} />

          {/* Bottom Sheet Modal để thêm vào giỏ hàng */}
          <AddToCartSheetModal ref={bottomSheetRef} item={null} />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default HomeScreen;
