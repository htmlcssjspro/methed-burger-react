import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { closeModal } from '../modal/modalSlice';
import { clearOrder } from '../order/orderSlice';

export const validateForm = () => (dispatch, getState) => {
    const form = getState().form;
    const errors = {};

    if (!form.name) {
        errors.name = 'Name is required';
    }
    if (!form.phone) {
        errors.phone = 'Phone is required';
    }
    if (!form.format) {
        errors.format = 'Format is required';
    }
    if (!form.address && form.format === 'delivery') {
        errors.address = 'Address is required';
    }
    if (!form.floor && form.format === 'delivery') {
        errors.floor = 'Floor is required';
    }
    if (!form.intercom && form.format === 'delivery') {
        errors.intercom = 'Intercom is required';
    }
    if (form.format === 'pickup') {
        dispatch(updateFormValue({ field: 'adress', value: '' }));
        dispatch(updateFormValue({ field: 'floor', value: '' }));
        dispatch(updateFormValue({ field: 'intercom', value: '' }));
    }
    if (Object.keys(errors).length) {
        dispatch(setErrors(errors));
    } else {
        dispatch(clearErrors());
    }

};

export const submitForm = createAsyncThunk(
    'form/submit',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const response = await fetch(
                'https://cloudy-slash-rubidium.glitch.me/api/order',
                {
                    method:  'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

            if (!response.ok){
                throw new Error(`Ошибка: ${response.statusText}`);
            }

            dispatch(clearOrder());
            dispatch(closeModal());

            return await response.json();
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

const formSlice = createSlice({
    name:         'form',
    initialState: {
        name:     '',
        phone:    '',
        format:   'delivery',
        address:  '',
        floor:    '',
        intercom: '',
        error:    null,
        errors:   {},
        touch:    false,
    },
    reducers: {
        updateFormValue: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        clearErrors: state => {
            state.errors = {};
        },
        changeTouch: state => {
            state.touch = true;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(submitForm.pending, state => {
                state.status = 'loading';
                state.response = null;
                state.error = null;
            })
            .addCase(submitForm.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.response = action.payload;
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            });
    }
});

export const {
    updateFormValue,
    setErrors,
    clearErrors,
    changeTouch,
} = formSlice.actions;
export default formSlice.reducer;
