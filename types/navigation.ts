import type {StackScreenProps} from '@react-navigation/stack';

// Định nghĩa các tham số cho mỗi màn hình (nếu cần)
export type HomeScreenParams = undefined;
export type CartScreenParams = undefined;

// Định nghĩa tất cả các màn hình trong stack
export type RootStackParamList = {
  Home: HomeScreenParams;
  Cart: CartScreenParams;
};

// Định nghĩa kiểu props cho mỗi màn hình
export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type CartScreenProps = StackScreenProps<RootStackParamList, 'Cart'>;

// Kiểu dữ liệu chung cho navigation prop
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
