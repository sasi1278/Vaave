import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, FlatList, TextInput, ActivityIndicator } from 'react-native';
import CardItem from '../../components/postCard';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure, fetchEnd } from '../../utils/redux/postSlice';
import { RootState } from '@reduxjs/toolkit/query';
import { get } from '../../utils/apiUtils';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PostDataArray = Post[];

const PostList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchUserId, setSearchUserId] = useState<string>('');
  const { list, loading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (!list.length) {
      fetchData();
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      dispatch(fetchPostsStart());
      const responseData: PostDataArray = await get<PostDataArray>('/posts');
      dispatch(fetchPostsSuccess(responseData));
    } catch (error) {
      console.error('Error:', error);
      dispatch(fetchPostsFailure(error.message));
    } finally {
      dispatch(fetchEnd());
    }
  }, [dispatch]);

  const press = useCallback((postId: number, userId: number, title: string) => {
    navigation.navigate('Post', { postId, userId, title });
    setSearchUserId('');
  }, [navigation]);

  const renderItem = useCallback(({ item }: { item: Post }) => (
    <CardItem
      title={item.title}
      userId={item.userId}
      postId={item.id}
      onPress={() => press(item.id, item.userId, item.title)}
    />
  ), [press]);

  const handleSearch = (text: string) => {
    setSearchUserId(text);
  };

  const filteredList = searchUserId ? list.filter(post => post.userId === parseInt(searchUserId)) : list;

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter User ID"
          value={searchUserId}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : filteredList.length > 0 ? (
          <FlatList
            data={filteredList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text>No posts found.</Text>
        )}
      </View>
    </View>
  );
};

export default PostList;
