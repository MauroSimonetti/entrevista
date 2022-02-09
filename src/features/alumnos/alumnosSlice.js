import { createSlice } from '@reduxjs/toolkit'


export const alumnosSlice = createSlice({
    name: 'alumnos',
    initialState: {
        value: [],
    },
    reducers: {
        agregarAlumno: (state, action) => {
            state.value.push(action.payload)
        },
        eliminarAlumno: (state, action) => {
           state.value = state.value.filter(alumno => alumno.fecha !== action.payload)
        },
    },
})

export const selectAlumnos = state => state.alumnos.value;
export const { agregarAlumno, eliminarAlumno } = alumnosSlice.actions
export default alumnosSlice.reducer
