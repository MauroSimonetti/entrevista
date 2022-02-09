import { configureStore } from '@reduxjs/toolkit'
import alumnosReducer from '../features/alumnos/alumnosSlice'
import errorReducer from '../features/error/errorSlice'

export default configureStore({
    reducer: {
        alumnos: alumnosReducer,
        error: errorReducer,
    },
})