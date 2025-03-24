// Định nghĩa các kiểu dữ liệu cho bottom sheet

// Kiểu cho BottomSheet thông thường
export interface BottomSheetMethods {
  expand: () => void;
  collapse: () => void;
  close: () => void;
  snapToIndex: (index: number) => void;
  snapToPosition: (position: number) => void;
  forceClose: () => void;
}

// Kiểu cho BottomSheetModal
export interface BottomSheetModalMethods {
  present: () => void;
  dismiss: () => void;
  close: () => void;
  expand: () => void;
  collapse: () => void;
}

// Kiểu cho AddToCartSheetRef (custom)
export interface AddToCartSheetRef {
  present: (item: any) => void;
}
