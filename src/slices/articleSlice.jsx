import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticleById = createAsyncThunk(
    'articleSlice/fetchArticleById',
    async (articleId) => {
        try {
            const adjustedId = articleId;

            const response = await fetch(`http://localhost:5000/api/posts/${adjustedId}`);
            const article = await response.json();
            return article;
        } catch (error) {
            console.error('Error fetching post by ID:', error);
            throw error;
        }
    }
);

export const articleSlice = createSlice({
    name: "articleSlice",
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export default articleSlice.reducer;
