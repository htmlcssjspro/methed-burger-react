import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_PRODUCT } from '../../const';

export const localStorageMiddleware = store => next => action => {
    const nextAction = next(action);

    if (nextAction.type.startsWith('order/')) {
        const orderList = store.getState().order.orderList;
        localStorage.setItem('order', JSON.stringify(orderList));
    }

    return nextAction;
};

export const orderRequestAsync = createAsyncThunk(
    'order/fetch',
    (_, { getState }) => {
        const idList = getState().order.orderList.map(item => item.id);

        return fetch(`${API_PRODUCT}?list=${idList}`)
            .then(response => response.json())
            .catch(error => ({ error }));
    }
);

const orderSlice = createSlice({
    name:         'order',
    initialState: {
        orderList:  JSON.parse(localStorage.getItem('order') || '[]'),
        orderGoods: [],
        totalCount: 0,
        totalPrice: 0,
        error:      '',
    },
    reducers: {
        addProduct(state, action){
            const listProduct = state.orderList.find(item => item.id === action.payload.id);
            if (listProduct) {
                listProduct.count++;
                const goodsProduct = state.orderGoods.find(item => item.id === action.payload.id);
                goodsProduct.count = listProduct.count;
            } else {
                state.orderList.push({ ...action.payload, count: 1 });
            }
        },
        removeProduct(state, action){
            const listProduct = state.orderList.find(item => item.id === action.payload.id);
            if (listProduct.count > 1) {
                listProduct.count--;
                const goodsProduct = state.orderGoods.find(item => item.id === action.payload.id);
                goodsProduct.count = listProduct.count;
            } else {
                state.orderList = state.orderList.filter(item => item.id !== action.payload.id);
            }
        },
        calcTotal(state) {
            state.totalCount = state.orderGoods.reduce((acc, item) => acc + item.count, 0);
            state.totalPrice = state.orderGoods.reduce((acc, item) => acc + item.price * item.count, 0);
        },
        clearOrder(state) {
            state.orderList = [];
            state.orderGoods = [];
        },
    },
    extraReducers: builder => {
        builder
            .addCase(orderRequestAsync.pending, state => {
                state.error = '';
            })
            .addCase(orderRequestAsync.fulfilled, (state, action) => {
                const orderGoods = state.orderList.map(item => {
                    const product = action.payload.find(product => product.id === item.id);
                    product.count = item.count;

                    return product;
                });

                state.error = '';
                state.orderGoods = orderGoods;
            })
            .addCase(orderRequestAsync.rejected, (state, action) => {
                state.error = action.payload.error;
            });
    }
});


export const { addProduct, removeProduct, calcTotal, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
