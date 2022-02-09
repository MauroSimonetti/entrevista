import { createSlice } from '@reduxjs/toolkit'


export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        value: false,
    },
    reducers: {
        mostrarError: (state) => {
            state.value = true
        },
        quitarError: (state) => {
            state.value = false
        },
    },
})

export const selectError = state => state.error.value;
export const { mostrarError, quitarError } = errorSlice.actions
export default errorSlice.reducer
