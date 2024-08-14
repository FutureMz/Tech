import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TodoList } from './Screens/TodoList';
import { Opay } from './Screens/Opay';



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Opay/>
    </View>
  );
};

const styles = StyleSheet.create({
});
