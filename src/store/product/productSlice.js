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
        products:     [],
        productsFlag: false,
        error:        '',
    },
    extraReducers: builder => {
        builder
            .addCase(productRequestAsync.pending, state => {
                state.error = '';
                state.productsFlag = false;
            })
            .addCase(productRequestAsync.fulfilled, (state, action) => {
                state.error = '';
                state.products = action.payload;
                state.productsFlag = true;
            })
            .addCase(productRequestAsync.rejected, (state, action) => {
                state.error = action.payload.error;
            });
    }
});

export default productSlice.reducer;
