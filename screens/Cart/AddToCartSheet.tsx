import {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {useCart, type MenuItem} from '../../screens/context/CartContext';

interface AddToCartSheetProps {
  item: MenuItem | null;
}

// Định nghĩa kiểu BottomSheetMethods
interface BottomSheetMethods {
  expand: () => void;
  collapse: () => void;
  close: () => void;
  snapToIndex: (index: number) => void;
  snapToPosition: (position: number) => void;
  forceClose: () => void;
}

const AddToCartSheet = forwardRef<BottomSheetMethods, AddToCartSheetProps>(
  ({item}, ref) => {
    const [quantity, setQuantity] = useState(1);
    const [notes, setNotes] = useState('');
    const {addToCart} = useCart();
    const bottomSheetRef = useRef<BottomSheet>(null);

    // Quan trọng: Đảm bảo snapPoints có ít nhất 2 phần tử
    // Phần tử đầu tiên là vị trí ẩn, phần tử thứ hai là vị trí hiển thị
    const snapPoints = useMemo(() => ['1%', '50%'], []);

    useImperativeHandle(ref, () => ({
      expand: () => {
        console.log('Expand called, snapping to index 1');
        try {
          // Đảm bảo index nằm trong phạm vi của snapPoints
          if (bottomSheetRef.current) {
            bottomSheetRef.current.snapToIndex(1);
          }
        } catch (error) {
          console.error('Error expanding bottom sheet:', error);
        }
      },
      collapse: () => {
        try {
          bottomSheetRef.current?.snapToIndex(0);
        } catch (error) {
          console.error('Error collapsing bottom sheet:', error);
        }
      },
      close: () => {
        try {
          bottomSheetRef.current?.close();
        } catch (error) {
          console.error('Error closing bottom sheet:', error);
        }
      },
      snapToIndex: (index: number) => {
        try {
          // Kiểm tra index có hợp lệ không
          if (index >= 0 && index < snapPoints.length) {
            bottomSheetRef.current?.snapToIndex(index);
          } else {
            console.warn(
              `Invalid index: ${index}. Valid range: 0-${
                snapPoints.length - 1
              }`,
            );
          }
        } catch (error) {
          console.error(`Error snapping to index ${index}:`, error);
        }
      },
      snapToPosition: (position: number) =>
        bottomSheetRef.current?.snapToPosition(position),
      forceClose: () => bottomSheetRef.current?.forceClose(),
    }));

    const decreaseQuantity = useCallback(
      () => setQuantity(prev => Math.max(1, prev - 1)),
      [],
    );

    const increaseQuantity = useCallback(() => {
      setQuantity(prev => prev + 1);
    }, []);

    const handleAddToCart = useCallback(() => {
      if (item) {
        addToCart(item, quantity, notes);
        bottomSheetRef.current?.close();
      }
    }, [item, quantity, notes, addToCart]);

    // Xử lý khi sheet thay đổi
    const handleSheetChanges = useCallback((index: number) => {
      console.log('Sheet index changed to:', index);
    }, []);

    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Bắt đầu với trạng thái ẩn
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}
        handleIndicatorStyle={styles.handleIndicator}
        backgroundStyle={styles.bottomSheetBackground}
        style={styles.bottomSheet}>
        <View style={styles.container}>
          {item ? (
            <>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.price}>{item.price.toLocaleString()} đ</Text>

              {/* Chỉnh số lượng */}
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

              {/* Ghi chú */}
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

              {/* Nút thêm vào giỏ */}
              <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddToCart}>
                <Text style={styles.addButtonText}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.emptyText}>Vui lòng chọn một sản phẩm</Text>
          )}
        </View>
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomSheetBackground: {
    backgroundColor: 'white',
  },
  handleIndicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
  },
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
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
});

export default AddToCartSheet;
