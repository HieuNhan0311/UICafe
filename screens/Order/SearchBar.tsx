import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SearchBarProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

const SearchBar = ({searchText, onSearchChange}: SearchBarProps) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Mời bạn nhập sản phẩm"
        style={styles.searchInput}
        value={searchText}
        onChangeText={onSearchChange}
      />
      <TouchableOpacity>
        <Icon
          name="search-outline"
          size={24}
          color="black"
          style={styles.iconSearch}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderBottomWidth: 2.5,
    borderColor: '#ddd',
  },
  searchInput: {
    fontSize: 20,
    flex: 1,
    height: 40,
    paddingVertical: 0,
  },
  iconSearch: {
    marginLeft: 10,
  },
});

export default SearchBar;
