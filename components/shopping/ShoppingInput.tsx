import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text } from 'react-native';

interface IShoppingInput {
  addItem: (item : ShoppingItem) => void,
}

export default function ShoppingInput({ addItem }: IShoppingInput) {
  const [cost, setCost] = useState<string>('');
  const [itemData, setItemData] = useState<ShoppingItem>({ title: '', amount: '', cost: 0 });
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.inputTitle]}
          value={itemData.title}
          onChangeText={(text) => setItemData({ ...itemData, title: text })}
          placeholder="Banana"
        />
        <TextInput
          style={[styles.input, styles.inputAmount]}
          value={itemData.amount}
          onChangeText={(text) => setItemData({ ...itemData, amount: text })}
          placeholder="2 kg"
        />
        <TextInput
          style={[styles.input, styles.inputCost]}
          value={cost}
          onChangeText={(text) => setCost(text)}
          placeholder="3.22"
          keyboardType="numeric"
        />
        <TouchableHighlight style={styles.button} onPress={handleAddItem} underlayColor={Colors.tertiary}>
          <Text>ADD</Text>
        </TouchableHighlight>
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
  function handleAddItem() {
    if (!itemData.title || !itemData.amount || !cost) {
      setErrorMessage('All fields are required!');
      return;
    }
    addItem({...itemData, cost: Number(cost) });

    setItemData({ title: '', amount: '', cost: 0 });
    setCost('');
    setErrorMessage('');
  }
}


const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
    gap: 5,
  },
  input: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  inputTitle: {
    flex:4
  },
  inputAmount: {
    flex:2
  },
  inputCost: {
    flex:2
  },
  button: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
  },
  errorText: {
    color: Colors.danger,
    fontSize: 20,
    textAlign: 'center',
  },
});
