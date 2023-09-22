import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const PostListItem = ({ post }) => {
  return (
    <View>
      <Text>{post.content}</Text>
    </View>
  );
};
