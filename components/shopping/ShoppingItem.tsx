import { Colors } from '@/constants/Colors';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface IShoppingItem {
  item: ShoppingItem,
  remove: () => void,
}

export default function ShoppingItem({ item, remove } : IShoppingItem) {
  return (
    <View style={styles.row}>
      <View style={styles.titleRow}>
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.amountRow}>
        <Text style={styles.title}>{item.amount}</Text>
      </View>
      <View style={styles.costRow}>
        <Text style={styles.title}>${item.cost}</Text>
      </View>
      <TouchableOpacity onPress={remove}>
        <Text style={[styles.title, styles.remove]}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  title: {
    marginTop: 10,
    fontSize: 20,
  },
  remove: {
    color: Colors.danger,
  },
  titleRow: {
    flex: 4,
  },
  amountRow: {
    flex: 2
  },
  costRow: {
    flex: 2
  }
});
