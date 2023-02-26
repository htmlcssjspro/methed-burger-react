import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_PRODUCT } from '../../const';

export const categoryRequestAsync = createAsyncThunk(
    'category/fetch',
    () =>
        fetch(`${API_PRODUCT}/category`)
            .then(response => response.json())
            .catch(error => ({ error }))
);

const categorySlice = createSlice({
    name:         'category',
    initialState: {
        category:       [],
        categoryActive: 0,
        error:          '',
    },
    reducers: {
        changeCategory(state, action) {
            state.categoryActive = action.payload.categoryIndex;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(categoryRequestAsync.pending, state => {
                state.error = '';
            })
            .addCase(categoryRequestAsync.fulfilled, (state, action) => {
                state.error = '';
                state.category = action.payload;
            })
            .addCase(categoryRequestAsync.rejected, (state, action) => {
                state.error = action.payload.error;
            });
    }
});

export const { changeCategory } = categorySlice.actions;

export default categorySlice.reducer;
