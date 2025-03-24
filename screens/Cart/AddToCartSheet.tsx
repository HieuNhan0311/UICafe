// import React, {useState, forwardRef, useImperativeHandle} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import {useCart, type MenuItem} from '../context/CartContext';

// interface AddToCartSheetProps {
//   item: MenuItem | null;
// }

// const AddToCartSheet = forwardRef<BottomSheet, AddToCartSheetProps>(
//   ({item}, ref) => {
//     const [quantity, setQuantity] = useState(1);
//     const [notes, setNotes] = useState('');
//     const {addToCart} = useCart();

//     // Expose the bottomSheet ref
//     useImperativeHandle(ref, () => bottomSheetRef.current as BottomSheet);

//     // Create a local ref
//     const bottomSheetRef = React.useRef<BottomSheet>(null);

//     // Reset form when sheet closes
//     const handleSheetChanges = (index: number) => {
//       if (index === -1) {
//         setQuantity(1);
//         setNotes('');
//       }
//     };

//     const decreaseQuantity = () => {
//       if (quantity > 1) {
//         setQuantity(quantity - 1);
//       }
//     };

//     const increaseQuantity = () => {
//       setQuantity(quantity + 1);
//     };

//     const handleAddToCart = () => {
//       if (item) {
//         addToCart(item, quantity, notes);
//         bottomSheetRef.current?.close();
//       }
//     };

//     return (
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={-1}
//         snapPoints={['50%']}
//         enablePanDownToClose
//         onChange={handleSheetChanges}>
//         <View style={styles.container}>
//           {item && (
//             <>
//               <Text style={styles.title}>{item.name}</Text>
//               <Text style={styles.price}>{item.price.toLocaleString()} đ</Text>

//               <View style={styles.quantityContainer}>
//                 <Text style={styles.sectionTitle}>Số lượng:</Text>
//                 <View style={styles.quantityControl}>
//                   <TouchableOpacity
//                     onPress={decreaseQuantity}
//                     style={styles.quantityButton}>
//                     <Text style={styles.quantityButtonText}>-</Text>
//                   </TouchableOpacity>
//                   <Text style={styles.quantityText}>{quantity}</Text>
//                   <TouchableOpacity
//                     onPress={increaseQuantity}
//                     style={styles.quantityButton}>
//                     <Text style={styles.quantityButtonText}>+</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>

//               <View style={styles.notesContainer}>
//                 <Text style={styles.sectionTitle}>Ghi chú:</Text>
//                 <TextInput
//                   style={styles.notesInput}
//                   placeholder="Thêm ghi chú cho món này..."
//                   value={notes}
//                   onChangeText={setNotes}
//                   multiline
//                 />
//               </View>

//               <TouchableOpacity
//                 style={styles.addButton}
//                 onPress={handleAddToCart}>
//                 <Text style={styles.addButtonText}>Thêm vào giỏ hàng</Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </View>
//       </BottomSheet>
//     );
//   },
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 18,
//     color: '#007AFF',
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   quantityContainer: {
//     marginBottom: 16,
//   },
//   quantityControl: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   quantityButton: {
//     width: 36,
//     height: 36,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   quantityButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   quantityText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginHorizontal: 16,
//   },
//   notesContainer: {
//     marginBottom: 24,
//   },
//   notesInput: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 12,
//     height: 80,
//     textAlignVertical: 'top',
//   },
//   addButton: {
//     backgroundColor: '#007AFF',
//     borderRadius: 8,
//     padding: 16,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default AddToCartSheet;
'use client';

import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useCart, type MenuItem} from '../context/CartContext';

interface BottomSheetMethods {
  expand: () => void;
  collapse: () => void;
  close: () => void;
  snapToIndex: (index: number) => void;
  snapToPosition: (position: number) => void;
  forceClose: () => void;
}

interface AddToCartSheetProps {
  item: MenuItem | null;
}

const AddToCartSheet = forwardRef<BottomSheetMethods, AddToCartSheetProps>(
  ({item}, ref) => {
    const [quantity, setQuantity] = useState(1);
    const [notes, setNotes] = useState('');
    const {addToCart} = useCart();

    // Tạo snapPoints với giá trị cụ thể
    const snapPoints = React.useMemo(() => ['50%'], []);

    // Tạo bottomSheetRef
    const bottomSheetRef = React.useRef<BottomSheet>(null);

    // Expose the bottomSheet ref methods
    useImperativeHandle(
      ref,
      () => bottomSheetRef.current as BottomSheetMethods,
    );

    // Reset form when sheet closes
    const handleSheetChanges = useCallback((index: number) => {
      console.log('Sheet index changed:', index);
      if (index === -1) {
        setQuantity(1);
        setNotes('');
      }
    }, []);

    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
      if (item) {
        addToCart(item, quantity, notes);
        bottomSheetRef.current?.close();
      }
    };

    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}
        handleIndicatorStyle={{width: 50, height: 5, backgroundColor: '#ccc'}}>
        <View style={styles.container}>
          {item && (
            <>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>{item.price.toLocaleString()} đ</Text>

              <View style={styles.quantityContainer}>
                <Text style={styles.sectionTitle}>Số lượng:</Text>
                <View style={styles.quantityControl}>
                  <TouchableOpacity
                    onPress={decreaseQuantity}
                    style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={increaseQuantity}
                    style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.notesContainer}>
                <Text style={styles.sectionTitle}>Ghi chú:</Text>
                <TextInput
                  style={styles.notesInput}
                  placeholder="Thêm ghi chú cho món này..."
                  value={notes}
                  onChangeText={setNotes}
                  multiline
                />
              </View>

              <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddToCart}>
                <Text style={styles.addButtonText}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#007AFF',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quantityContainer: {
    marginBottom: 16,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 36,
    height: 36,
    backgroundColor: '#f0f0f0',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  notesContainer: {
    marginBottom: 24,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    height: 80,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddToCartSheet;
