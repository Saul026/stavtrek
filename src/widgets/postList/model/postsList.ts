import { createSlice } from '@reduxjs/toolkit';
import { Device } from 'shared/api/devices';

interface PostsListState {
    posts: Device[] | [];
}

const initialState: PostsListState = {
    posts: [],
};

export const postsListSlice = createSlice({
    name: 'postsList',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
    },
    selectors: {
        selectPosts: (state) => state.posts,
    },
});

export const { setPosts } = postsListSlice.actions;
export const { selectPosts } = postsListSlice.selectors;
