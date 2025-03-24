// // import {
// //   View,
// //   Text,
// //   Image,
// //   TouchableOpacity,
// //   FlatList,
// //   StyleSheet,
// // } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';

// // interface MenuItem {
// //   id: string;
// //   name: string;
// //   price: number;
// //   image: string;
// //   quantity: number;
// // }

// // interface MenuListProps {
// //   items: MenuItem[];
// //   updateQuantity: (id: string, type: 'increase' | 'decrease') => void;
// // }

// // const MenuList = ({items, updateQuantity}: MenuListProps) => {
// //   return (
// //     <FlatList
// //       data={items}
// //       keyExtractor={item => item.id}
// //       renderItem={({item}) => (
// //         <View style={styles.menuItem}>
// //           <Image
// //             source={require('../../asset/img/2.png')}
// //             style={styles.menuItemImage}
// //           />
// //           <View style={styles.menuItemInfo}>
// //             <Text style={styles.menuItemName}>{item.name}</Text>
// //             <Text style={styles.menuItemPrice}>
// //               {item.price.toLocaleString()}
// //             </Text>
// //           </View>
// //           <View style={styles.quantityControl}>
// //             <TouchableOpacity
// //               onPress={() => updateQuantity(item.id, 'decrease')}
// //               style={styles.quantityButton}>
// //               <Icon name="remove-circle" size={24} color="#2196F3" />
// //             </TouchableOpacity>
// //             <Text style={styles.quantityText}>{item.quantity}</Text>
// //             <TouchableOpacity
// //               onPress={() => updateQuantity(item.id, 'increase')}
// //               style={styles.quantityButton}>
// //               <Icon name="add-circle" size={24} color="#2196F3" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>
// //       )}
// //       contentContainerStyle={styles.menuList}
// //       ListEmptyComponent={
// //         <Text style={styles.emptyText}>Không tìm thấy sản phẩm</Text>
// //       }
// //     />
// //   );
// // };

// // const styles = StyleSheet.create({
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
// //   emptyText: {
// //     textAlign: 'center',
// //     fontSize: 18,
// //     color: '#888',
// //     marginTop: 20,
// //     paddingBottom: 20,
// //   },
// // });

// // export default MenuList;
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import type {MenuItem} from '../context/CartContext';

// interface MenuListProps {
//   items: MenuItem[];
//   onAddPress: (item: MenuItem) => void;
// }

// const MenuList = ({items, onAddPress}: MenuListProps) => {
//   return (
//     <FlatList
//       data={items}
//       keyExtractor={item => item.id}
//       renderItem={({item}) => (
//         <View style={styles.menuItem}>
//           <Image
//             source={require('../../asset/img/2.png')}
//             style={styles.menuItemImage}
//           />
//           <View style={styles.menuItemInfo}>
//             <Text style={styles.menuItemName}>{item.name}</Text>
//             <Text style={styles.menuItemPrice}>
//               {item.price.toLocaleString()}
//             </Text>
//           </View>
//           <View style={styles.quantityControl}>
//             <TouchableOpacity
//               onPress={() => onAddPress(item)}
//               style={styles.addButton}>
//               <Icon name="add-circle" size={24} color="#2196F3" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//       contentContainerStyle={styles.menuList}
//       ListEmptyComponent={
//         <Text style={styles.emptyText}>Không tìm thấy sản phẩm</Text>
//       }
//     />
//   );
// };

// const styles = StyleSheet.create({
//   menuList: {
//     paddingHorizontal: 10,
//     flexGrow: 0,
//     alignItems: 'stretch',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//   },
//   menuItemImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 10,
//   },
//   menuItemInfo: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   menuItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   menuItemPrice: {
//     color: '#666',
//   },
//   quantityControl: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   addButton: {
//     padding: 5,
//   },
//   emptyText: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#888',
//     marginTop: 20,
//     paddingBottom: 20,
//   },
// });

// export default MenuList;
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import type {MenuItem} from '../context/CartContext';

interface MenuListProps {
  items: MenuItem[];
  onAddPress: (item: MenuItem) => void;
}

const MenuList = ({items, onAddPress}: MenuListProps) => {
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.menuItem}>
          <Image
            source={require('../../asset/img/2.png')}
            style={styles.menuItemImage}
          />
          <View style={styles.menuItemInfo}>
            <Text style={styles.menuItemName}>{item.name}</Text>
            <Text style={styles.menuItemPrice}>
              {item.price.toLocaleString()}
            </Text>
          </View>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              onPress={() => {
                console.log('Add button pressed for:', item.name);
                onAddPress(item);
              }}
              style={styles.addButton}
              activeOpacity={0.7}>
              <Icon name="add-circle" size={24} color="#2196F3" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      contentContainerStyle={styles.menuList}
      ListEmptyComponent={
        <Text style={styles.emptyText}>Không tìm thấy sản phẩm</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  menuList: {
    paddingHorizontal: 10,
    flexGrow: 0,
    alignItems: 'stretch',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  menuItemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  menuItemInfo: {
    flex: 1,
    marginLeft: 10,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    color: '#666',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    padding: 10, // Tăng kích thước vùng chạm
    backgroundColor: '#f0f0f0', // Thêm màu nền để dễ nhìn
    borderRadius: 20,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 20,
    paddingBottom: 20,
  },
});

export default MenuList;
