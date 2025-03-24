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
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useCart, type MenuItem} from '../context/CartContext';

interface AddToCartSheetProps {
  item: MenuItem | null;
}

export interface AddToCartSheetRef {
  present: (item: MenuItem) => void;
}

const AddToCartSheetModal = forwardRef<AddToCartSheetRef, AddToCartSheetProps>(
  ({item: initialItem}, ref) => {
    const [quantity, setQuantity] = useState(1);
    const [notes, setNotes] = useState('');
    const [item, setItem] = useState<MenuItem | null>(initialItem);
    const {addToCart} = useCart();

    // Tạo snapPoints với giá trị cụ thể
    const snapPoints = React.useMemo(() => ['50%'], []);

    // Tạo bottomSheetRef
    const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

    // Expose methods
    useImperativeHandle(ref, () => ({
      present: (newItem: MenuItem) => {
        setItem(newItem);
        bottomSheetModalRef.current?.present();
      },
    }));

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
        bottomSheetModalRef.current?.dismiss();
      }
    };

    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
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
      </BottomSheetModal>
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

export default AddToCartSheetModal;
