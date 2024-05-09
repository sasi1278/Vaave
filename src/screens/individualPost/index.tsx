import React, { useEffect, useState } from "react";
import { Image, View, TouchableWithoutFeedback, Text, FlatList } from "react-native";
import styles from "./styles";
import { get } from "../../utils/apiUtils";
import CommentCard from "../../components/commentCard";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface RouteParams {
  postId: number;
  userId: number;
  title: string;
}


const Post = ({ route }: { route: { params: RouteParams } }) => {
  const { postId, userId, title } = route.params;
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await get<Comment[]>(`/posts/${postId}/comments`);
        setComments(responseData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://picsum.photos/700' }}
        />
        <TouchableWithoutFeedback onPress={() => {}}>
          <Text style={styles.id}>{userId}</Text>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.shadow} />
      {loading ? (
        <Text style={{textAlign:'center'}}>Loading...</Text>
      ) : (
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CommentCard mail={item.email} subject={item.name} content={item.body} name={item.name}/>
          )}
        />
      )}
    </View>
  );
};

export default Post;
