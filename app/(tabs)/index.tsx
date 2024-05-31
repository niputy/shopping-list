import Container from '@/components/core/Container';
import ShoppingInput from '@/components/shopping/ShoppingInput';
import ShoppingItem from '@/components/shopping/ShoppingItem';
import ShoppingTotal from '@/components/shopping/ShoppingTotal';
import { Colors } from '@/constants/Colors';
import { fetchShoppingList, storeShoppingList } from '@/store/AsyncStorage';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet,  Text } from 'react-native';



export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [list, setList] = useState<ShoppingItem[]>([]);
  const total = list.reduce((acc, item) => acc + item.cost, 0);
  useEffect(() => {
    const fetch = async () => setList(await fetchShoppingList());
    fetch();
    setIsLoading(false)
  }, [])

  return (
    <Container>
      <Text style={styles.title}>Shopping List</Text>
      {isLoading ? <ActivityIndicator style={styles.indicator} size={'large'} color={Colors.secondary}/>
      :
      <ScrollView overScrollMode="never">
        {list.map((item, idex) => (
          <ShoppingItem key={idex} item={item} remove={() => removeItem(idex)}/>
        ))}
        <ShoppingInput addItem={addItem}/>
        <ShoppingTotal total={total}/>
      </ScrollView>
      }
    </Container>
  );

  function addItem(newItem: ShoppingItem) {
    const newList = [...list, newItem];
    setList(newList);
    storeShoppingList(newList);
  }
  function removeItem(idex: number) {
    const newList = list.filter((_, i) => i !== idex);
    setList(newList)
    storeShoppingList(newList);
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 20,
  },
  indicator: {
    marginTop: 20,
  },
});
