// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// const BottomButtons = () => {
//   return (
//     <View style={styles.bottomButtons}>
//       <TouchableOpacity style={styles.resetButton}>
//         <Text style={styles.resetButtonText}>Chọn lại</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.viewOrderButton}>
//         <Text style={styles.viewOrderButtonText}>Xem đơn hàng</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bottomButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//     paddingBottom: 20,
//   },
//   resetButton: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#ccc',
//     alignItems: 'center',
//     borderRadius: 20,
//     marginRight: 5,
//   },
//   viewOrderButton: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#007AFF',
//     alignItems: 'center',
//     borderRadius: 20,
//   },
//   resetButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   viewOrderButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

// export default BottomButtons;
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface BottomButtonsProps {
  onViewOrderPress: () => void;
}

const BottomButtons = ({onViewOrderPress}: BottomButtonsProps) => {
  return (
    <View style={styles.bottomButtons}>
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Chọn lại</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewOrderButton}
        onPress={onViewOrderPress}>
        <Text style={styles.viewOrderButtonText}>Xem đơn hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 20,
  },
  resetButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 5,
  },
  viewOrderButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    borderRadius: 20,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewOrderButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default BottomButtons;
