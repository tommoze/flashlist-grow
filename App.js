import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

export default function App() {
  return (
    <View style={styles.container}>
      <FlashList
        renderItem={({ item }) => {
          return <View>{item}</View>;
        }}
        estimatedItemSize={50}
        data={[]}
        contentContainerStyle={{ backgroundColor: "green" }}
      />
      <Text>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
