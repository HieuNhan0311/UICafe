import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

interface CategoryTabsProps {
  selectedCategory: number | null;
  onSelectCategory: (index: number) => void;
}

const CategoryTabs = ({
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) => {
  const categories = [
    'Món ăn',
    'Dịch vụ',
    'Món ăn',
    'Hehe',
    'Món ăn',
    'Dịch vụ',
    'Món ăn',
    'Hehe',
    'Món ăn',
    'Dịch vụ',
    'Món ăn',
    'Hehe',
  ];

  return (
    <View style={styles.categoryTabs}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => onSelectCategory(index)}
            style={[
              styles.categoryTab,
              selectedCategory === index
                ? styles.activeTab
                : styles.inactiveTab,
            ]}>
            <Text
              style={[
                styles.categoryTabText,
                selectedCategory === index
                  ? styles.activeTabText
                  : styles.inactiveTabText,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  inactiveTab: {
    backgroundColor: '#E0E0E0',
  },
  categoryTabText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  activeTabText: {
    color: 'white',
  },
  inactiveTabText: {
    color: 'black',
  },
});

export default CategoryTabs;
