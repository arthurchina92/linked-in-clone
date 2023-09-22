import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Post } from "../types";

type PostListItemProps = {
  post: Post;
};

export const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={{ uri: post.author.image }}
          style={styles.userImage}
        ></Image>
        <View>
          <Text style={styles.userName}>{post.author.name}</Text>
          <Text>{post.author.position}</Text>
        </View>
      </View>
      <Text>{post.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
});
