// // import type React from 'react';
// // import {useState} from 'react';
// // import {
// //   FlatList,
// //   Image,
// //   StyleSheet,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   View,
// // } from 'react-native';

// // import {SafeAreaView} from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // function App(): React.JSX.Element {
// //   // Danh sách món ăn mẫu
// //   const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
// //   const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
// //     0,
// //   );
// //   const [menuItems, setMenuItems] = useState([
// //     {
// //       id: '1',
// //       name: 'Cafe sữa',
// //       price: 100000,
// //       image:
// //         'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //       quantity: 1,
// //     },
// //     {
// //       id: '2',
// //       name: 'Cafe đá',
// //       price: 100000,
// //       image:
// //         'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //       quantity: 1,
// //     },
// //     {
// //       id: '3',
// //       name: 'Trà sữa',
// //       price: 100000,
// //       image:
// //         'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //       quantity: 1,
// //     },
// //     {
// //       id: '4',
// //       name: 'Trà đào',
// //       price: 100000,
// //       image:
// //         'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //       quantity: 1,
// //     },
// //     {
// //       id: '5',
// //       name: 'Trà mãng cầu',
// //       price: 100000,
// //       image:
// //         'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //       quantity: 1,
// //     },
// //     {
// //       id: '6',
// //       name: 'Nước ép chanh sữa',
// //       price: 100000,
// //       image:
// //         'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //       quantity: 1,
// //     },
// //     {
// //       id: '7',
// //       name: 'Ép chanh dây',
// //       price: 100000,
// //       image:
// //         'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //       quantity: 1,
// //     },
// // {
// //   id: '18',
// //   name: 'Trà đá',
// //   price: 100000,
// //   image:
// //     'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //   quantity: 1,
// // },
// // {
// //   id: '82',
// //   name: 'Matcha latte',
// //   price: 100000,
// //   image:
// //     'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //   quantity: 1,
// // },
// // {
// //   id: '38',
// //   name: 'Capuchino',
// //   price: 100000,
// //   image:
// //     'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //   quantity: 1,
// // },
// // {
// //   id: '48',
// //   name: 'Trà sen vàng',
// //   price: 100000,
// //   image:
// //     'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //   quantity: 1,
// // },
// // {
// //   id: '84',
// //   name: 'Phindi hạnh nhân',
// //   price: 100000,
// //   image:
// //     'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //   quantity: 1,
// // },
// // {
// //   id: '83',
// //   name: 'Cá viên chiên',
// //   price: 100000,
// //   image:
// //     'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //   quantity: 1,
// // },
// // {
// //   id: '86',
// //   name: 'Há cảo',
// //   price: 100000,
// //   image:
// //     'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //   quantity: 1,
// // },
// // {
// //   id: '87',
// //   name: 'Trà đá',
// //   price: 100000,
// //   image:
// //     'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
// //   quantity: 1,
// // },
// //   ]);
// //   // Tìm kiếm
// //   const [searchText, setSearchText] = useState('');
// //   const [filteredItems, setFilteredItems] = useState(menuItems);
// //   // Lọc danh sách theo tên sản phẩm
// //   const handleSearch = () => {
// //     if (searchText.trim() === '') {
// //       setFilteredItems(menuItems);
// //     } else {
// //       setFilteredItems(
// //         menuItems.filter(item =>
// //           item.name.toLowerCase().includes(searchText.toLowerCase()),
// //         ),
// //       );
// //     }
// //   };
// //   // Tăng/giảm số lượng
// //   const updateQuantity = (id: any, type: any) => {
// //     setMenuItems(prev =>
// //       prev.map(item =>
// //         item.id === id
// //           ? {
// //               ...item,
// //               quantity:
// //                 type === 'increase'
// //                   ? item.quantity + 1
// //                   : Math.max(1, item.quantity - 1),
// //             }
// //           : item,
// //       ),
// //     );
// //   };
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       {/* Thanh tiêu đề */}
// //       <View style={styles.header}>
// //         <TouchableOpacity>
// //           <Icon name="close-outline" size={24} color="black" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Bàn 22</Text>
// //       </View>
// //       <View style={styles.header1}>
// //         <TextInput
// //           placeholder="Mời bạn nhập sản phẩm "
// //           style={styles.searchInput}
// //           value={searchText}
// //           onChangeText={text => {
// //             setSearchText(text);
// //             // Tự động tìm kiếm khi nhập
// //             if (text.trim() === '') {
// //               setFilteredItems(menuItems);
// //             } else {
// //               setFilteredItems(
// //                 menuItems.filter(item =>
// //                   item.name.toLowerCase().includes(text.toLowerCase()),
// //                 ),
// //               );
// //             }
// //           }}
// //         />
// //         <TouchableOpacity onPress={handleSearch}>
// //           <Icon
// //             name="search-outline"
// //             size={24}
// //             color="black"
// //             style={styles.iconSeach}
// //           />
// //         </TouchableOpacity>
// //       </View>

// //       {/* Thanh danh mục */}
// //       <View style={styles.categoryTabs}>
// //         <FlatList
// //           data={[
// //             'Món ăn',
// //             'Dịch vụ',
// //             'Món ăn',
// //             'Hehe',
// //             'Món ăn',
// //             'Dịch vụ',
// //             'Món ăn',
// //             'Hehe',
// //             'Món ăn',
// //             'Dịch vụ',
// //             'Món ăn',
// //             'Hehe',
// //           ]}
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           style={{marginLeft: 10}}
// //           keyExtractor={(item, index) => index.toString()}
// //           renderItem={({item, index}) => (
// //             <TouchableOpacity
// //               onPress={() => setSelectedCategory(index)}
// //               style={[
// //                 styles.categoryTab,
// //                 selectedCategory === index
// //                   ? styles.activeTab
// //                   : styles.inactiveTab,
// //               ]}>
// //               <Text
// //                 style={[
// //                   styles.categoryTabText,
// //                   selectedCategory === index
// //                     ? styles.activeTabText
// //                     : styles.inactiveTabText,
// //                 ]}>
// //                 {item}
// //               </Text>
// //             </TouchableOpacity>
// //           )}
// //         />
// //       </View>

// //       {/* Body container */}
// //       <View style={styles.body}>
// //         {/* Thanh chọn danh mục phụ */}
// //         <FlatList
// //           horizontal={true} // thanh này được scroll ngang
// //           data={[
// //             'Tất cả',
// //             'Trái cây',
// //             'Cafe',
// //             'Cafe sữa',
// //             'Capuchino',
// //             'Trà đào',
// //             'Trà sữa',
// //             'Nước ép',
// //             'Nước ngọt',
// //             'Bia',
// //             'Rượu',
// //             'Thuốc lá',
// //           ]}
// //           style={{flexGrow: 0, marginLeft: 10}} // không chiếm phần đang trống của thẻ
// //           renderItem={({item, index}) => (
// //             <TouchableOpacity
// //               onPress={() => setSelectedSubCategory(index)}
// //               style={[
// //                 styles.subCategoryItem,
// //                 selectedSubCategory === index
// //                   ? styles.activeSubCategoryItem
// //                   : {},
// //               ]}>
// //               <Text
// //                 style={[
// //                   styles.subCategoryText,
// //                   selectedSubCategory === index
// //                     ? styles.activeSubCategoryText
// //                     : {},
// //                 ]}>
// //                 {item}
// //               </Text>
// //             </TouchableOpacity>
// //           )}
// //           keyExtractor={(item, index) => index.toString()}
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={[
// //             styles.subCategoryList,
// //             {justifyContent: 'flex-start'},
// //           ]}
// //         />

// //         {/* Danh sách món ăn */}
// //         <FlatList
// //           data={filteredItems}
// //           keyExtractor={item => item.id}
// //           renderItem={({item}) => (
// //             <View style={styles.menuItem}>
// //               <Image
// //                 source={require('./asset/img/2.png')}
// //                 style={styles.menuItemImage}
// //               />
// //               <View style={styles.menuItemInfo}>
// //                 <Text style={styles.menuItemName}>{item.name}</Text>
// //                 <Text style={styles.menuItemPrice}>
// //                   {item.price.toLocaleString()}
// //                 </Text>
// //               </View>
// //               <View style={styles.quantityControl}>
// //                 <TouchableOpacity
// //                   onPress={() => updateQuantity(item.id, 'decrease')}
// //                   style={styles.quantityButton}>
// //                   <Icon name="remove-circle" size={24} color="#2196F3" />
// //                 </TouchableOpacity>
// //                 <Text style={styles.quantityText}>{item.quantity}</Text>
// //                 <TouchableOpacity
// //                   onPress={() => updateQuantity(item.id, 'increase')}
// //                   style={styles.quantityButton}>
// //                   <Icon name="add-circle" size={24} color="#2196F3" />
// //                 </TouchableOpacity>
// //               </View>
// //             </View>
// //           )}
// //           contentContainerStyle={styles.menuList}
// //           ListEmptyComponent={
// //             <Text style={styles.emptyText}>Không tìm thấy sản phẩm</Text>
// //           }
// //         />
// //       </View>

// //       {/* Nút chọn lại & xem đơn hàng */}
// //       <View style={styles.bottomButtons}>
// //         <TouchableOpacity style={styles.resetButton}>
// //           <Text style={styles.resetButtonText}>Chọn lại</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.viewOrderButton}>
// //           <Text style={styles.viewOrderButtonText}>Xem đơn hàng</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingTop: 50,
// //     backgroundColor: '#fff',
// //   },
// //   body: {
// //     flex: 1,
// //     display: 'flex',
// //     flexDirection: 'column',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //     borderBottomWidth: 1,
// //     borderColor: '#ddd',
// //   },
// //   emptyText: {
// //     textAlign: 'center',
// //     fontSize: 18,
// //     color: '#888',
// //     marginTop: 20,
// //     paddingBottom: 20,
// //   },
// //   header1: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //     marginHorizontal: 10,
// //     borderBottomWidth: 2.5,
// //     borderColor: '#ddd',
// //   },
// //   iconSeach: {
// //     marginLeft: 10,
// //   },
// //   headerTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     paddingRight: 200,
// //   },
// //   categoryTabs: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     paddingVertical: 10,
// //   },
// //   categoryTab: {
// //     paddingVertical: 8,
// //     paddingHorizontal: 16,
// //     borderRadius: 15,
// //     marginRight: 10,
// //   },
// //   activeTab: {
// //     backgroundColor: '#007AFF',
// //   },
// //   inactiveTab: {
// //     backgroundColor: '#E0E0E0',
// //   },
// //   categoryTabText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     paddingHorizontal: 10,
// //     paddingVertical: 5,
// //     marginHorizontal: 5,
// //   },
// //   activeTabText: {
// //     color: 'white',
// //   },
// //   inactiveTabText: {
// //     color: 'black',
// //   },
// //   subCategoryList: {
// //     paddingVertical: 10,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingHorizontal: 10,
// //     height: 60,
// //   },
// //   subCategoryItem: {
// //     paddingVertical: 6,
// //     paddingHorizontal: 12,
// //     marginRight: 8,
// //     alignSelf: 'flex-start',
// //   },
// //   activeSubCategoryItem: {
// //     borderColor: 'blue',
// //     borderBottomWidth: 3,
// //   },
// //   subCategoryText: {
// //     fontSize: 14,
// //   },
// //   activeSubCategoryText: {
// //     color: 'black',
// //   },
// //   menuList: {
// //     paddingHorizontal: 10,
// //     flexGrow: 0,
// //     alignItems: 'stretch',
// //   },
// //   menuItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#fff',
// //     padding: 10,
// //     borderBottomWidth: 1,
// //     borderColor: '#ddd',
// //   },
// //   menuItemImage: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 10,
// //   },
// //   menuItemInfo: {
// //     flex: 1,
// //     marginLeft: 10,
// //   },
// //   menuItemName: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   menuItemPrice: {
// //     color: '#666',
// //   },
// //   quantityControl: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   quantityButton: {
// //     padding: 5,
// //   },
// //   quantityText: {
// //     marginHorizontal: 8,
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   bottomButtons: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     padding: 10,
// //     borderTopWidth: 1,
// //     borderColor: '#ddd',
// //     paddingBottom: 20,
// //   },
// //   resetButton: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#ccc',
// //     alignItems: 'center',
// //     borderRadius: 20,
// //     marginRight: 5,
// //   },
// //   viewOrderButton: {
// //     flex: 1,
// //     padding: 10,
// //     backgroundColor: '#007AFF',
// //     alignItems: 'center',
// //     borderRadius: 20,
// //   },
// //   resetButtonText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   viewOrderButtonText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: 'white',
// //   },
// //   searchInput: {
// //     fontSize: 20,
// //     flex: 1,
// //     height: 40,
// //     paddingVertical: 0,
// //   },
// // });

// // export default App;

// import {useState} from 'react';
// import {StyleSheet, View, SafeAreaView} from 'react-native';
// import Header from './screens/Order/Header';
// import SearchBar from './screens/Order/SearchBar';
// import CategoryTabs from './screens/Order/CategoryTabs';
// import SubCategoryList from './screens/Order/SubCategoryList';
// import MenuList from './screens/Order/MenuList';
// import BottomButtons from './screens/Order/BottomButtons';

// // Dữ liệu mẫu
// const initialMenuItems = [
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
//   {
//     id: '18',
//     name: 'Trà đá',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '82',
//     name: 'Matcha latte',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '385',
//     name: 'Capuchino',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '48',
//     name: 'Trà sen vàng',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '84',
//     name: 'Phindi hạnh nhân',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '83',
//     name: 'Cá viên chiên',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '86',
//     name: 'Há cảo',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   {
//     id: '87',
//     name: 'Trà đá',
//     price: 100000,
//     image:
//       'https://png.pngtree.com/png-clipart/20240323/original/pngtree-milkshake-of-coffee-png-image_14664662.png',
//     quantity: 1,
//   },
//   // Thêm các mục khác nếu cần
// ];

// const App = () => {
//   // State
//   const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//   const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(
//     0,
//   );
//   const [menuItems, setMenuItems] = useState(initialMenuItems);
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

//   // Hàm cập nhật số lượng
//   const updateQuantity = (id: string, type: 'increase' | 'decrease') => {
//     setMenuItems(prev =>
//       prev.map(item =>
//         item.id === id
//           ? {
//               ...item,
//               quantity:
//                 type === 'increase'
//                   ? item.quantity + 1
//                   : Math.max(1, item.quantity - 1),
//             }
//           : item,
//       ),
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header title="Bàn 22" />

//       <SearchBar searchText={searchText} onSearchChange={handleSearch} />

//       <CategoryTabs
//         selectedCategory={selectedCategory}
//         onSelectCategory={setSelectedCategory}
//       />

//       <View style={styles.body}>
//         <SubCategoryList
//           selectedSubCategory={selectedSubCategory}
//           onSelectSubCategory={setSelectedSubCategory}
//         />

//         <MenuList items={filteredItems} updateQuantity={updateQuantity} />
//       </View>

//       <BottomButtons />
//     </SafeAreaView>
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
// });

// export default App;
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CartProvider} from './screens/context/CartContext';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </GestureHandlerRootView>
  );
};

export default App;
