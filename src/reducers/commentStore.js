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
		addingcomment: (state, action) => {
      const comments = state.comments
      comments.push(action.payload)
			state.comments = comments
		},
    setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    }
	}
});