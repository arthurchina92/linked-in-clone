import { StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";

export default function NewPostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New post</Text>
      <Text>Coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
