import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_PRODUCT } from '../../const';

export const productRequestAsync = createAsyncThunk(
    'product/fetch',
    (category) =>
        fetch(`${API_PRODUCT}?category=${category}`)
            .then(response => response.json())
            .catch(error => ({ error }))
);

const productSlice = createSlice({
    name:         'product',
    initialState: {
        products: [],
        error:    '',
    },
    extraReducers: builder => {
        builder
            .addCase(productRequestAsync.pending.type, state => {
                state.error = '';
            })
            .addCase(productRequestAsync.fulfilled.type, (state, action) => {
                state.error = '';
                state.products = action.payload;
            })
            .addCase(productRequestAsync.rejected.type, (state, action) => {
                state.error = action.payload.error;
            });
    }
});

export default productSlice.reducer;
