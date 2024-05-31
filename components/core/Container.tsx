import { StyleSheet, View, Text, StatusBar } from 'react-native';


export default function Container({ children } : any) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});
