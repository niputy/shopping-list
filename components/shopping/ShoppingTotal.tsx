import { Colors } from '@/constants/Colors';
import { StyleSheet, View, Text } from 'react-native';

interface IShoppingTotal {
  total: number,
}

export default function ShoppingTotal({ total }: IShoppingTotal) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total:</Text>
      <Text style={styles.title}>${total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 24,
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderColor: Colors.dangerLight,
    justifyContent: 'space-between',
  },
});
