import {FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface SubCategoryListProps {
  selectedSubCategory: number | null;
  onSelectSubCategory: (index: number) => void;
}

const SubCategoryList = ({
  selectedSubCategory,
  onSelectSubCategory,
}: SubCategoryListProps) => {
  const subCategories = [
    'Tất cả',
    'Trái cây',
    'Cafe',
    'Cafe sữa',
    'Capuchino',
    'Trà đào',
    'Trà sữa',
    'Nước ép',
    'Nước ngọt',
    'Bia',
    'Rượu',
    'Thuốc lá',
  ];

  return (
    <FlatList
      horizontal={true}
      data={subCategories}
      style={{flexGrow: 0}}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => onSelectSubCategory(index)}
          style={[
            styles.subCategoryItem,
            selectedSubCategory === index ? styles.activeSubCategoryItem : {},
          ]}>
          <Text
            style={[
              styles.subCategoryText,
              selectedSubCategory === index ? styles.activeSubCategoryText : {},
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.subCategoryList,
        {justifyContent: 'flex-start'},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  subCategoryList: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 60,
  },
  subCategoryItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    alignSelf: 'flex-start',
  },
  activeSubCategoryItem: {
    borderColor: 'blue',
    borderBottomWidth: 3,
  },
  subCategoryText: {
    fontSize: 14,
  },
  activeSubCategoryText: {
    color: 'black',
  },
});

export default SubCategoryList;
