import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsState {
  list: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  list: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action: PayloadAction<Post[]>) {
      state.loading = false;
      state.list = action.payload;
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    searchPostsByUserId(state, action: PayloadAction<number>) {
      const userId = action.payload;
      state.list = state.list.filter(post => post.userId === userId);
    },
    fetchEnd(state){
        state.loading=false
    }
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure, searchPostsByUserId,fetchEnd } = postsSlice.actions;

export default postsSlice.reducer;
