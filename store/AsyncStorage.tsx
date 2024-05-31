import AsyncStorage from '@react-native-async-storage/async-storage';

const SHOPPING_LIST = 'shopping-list';

export const storeShoppingList = async (shoppingList: ShoppingItem[]): Promise<void> => {
  const jsonShoppingList = JSON.stringify(shoppingList);
  try {
    await AsyncStorage.setItem(SHOPPING_LIST, jsonShoppingList);
  } catch (error) {
    throw new Error('Failed to store shopping list');
  }
};

export const fetchShoppingList = async (): Promise<ShoppingItem[]> => {
  try {
    const shoppingListString = await AsyncStorage.getItem(SHOPPING_LIST);
    return shoppingListString ? JSON.parse(shoppingListString) : [];
  } catch (error) {
    throw new Error('Error fetching shopping list');
  }
};
