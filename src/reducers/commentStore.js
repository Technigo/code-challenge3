import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  comments: [],
  isLoading: false,
  errorMessage:""
};

export const commentStore = createSlice({
	name: 'commentStore',
	initialState,
	reducers: {
		addingComment: (state, action) => {
      const comments = state.comments
      comments.push(action.payload)
			state.comments = comments
		},
    removingComment: (state, action) => {
      const comments = state.comments
      const comment = action.payload
      const newList = comments.filter((item) => item.message !== comment.message);
			state.comments = newList
		},
    setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    }
	}
});