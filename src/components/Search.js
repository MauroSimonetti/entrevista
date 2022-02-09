import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { agregarAlumno } from '../features/alumnos/alumnosSlice';
import { mostrarError } from '../features/error/errorSlice';

import styled from "styled-components";

const Form = styled.form`
    @media (min-width:992px){
        width:50%;
    }
`

const Search = () => {

    const [alumnoValido, setAlumnoValido] = useState({ nombre: '', fecha: '' });
    const [listaAlumnos, setListaAlumnos] = useState([]);

    const dispatch = useDispatch();


    useEffect(() => {
        const elem = document.querySelector('.datepicker');
        window.M.Datepicker.init(elem, {
            onClose: () => handleFecha(elem),
        });
    })


    const axios = require('axios');

    // Obtener alumnos con Axios desde JSON server
    const obtenerAlumnos = async () => {
        try {
            const response = await axios.get('http://localhost:4000/alumnos');
            console.log(response.data);
            setListaAlumnos(response.data);
        } catch {
            console.log('error al traer alumnos');
        }
    }

    // Llamo a la función solo cuando se monta el componente
    useEffect(() => {
        obtenerAlumnos();
    }, []);


    const handleChangeNombre = e => {
        setAlumnoValido({ ...alumnoValido, nombre: e.target.value });
    }


    const handleFecha = e => {
        console.log(e.value);
        setAlumnoValido({ ...alumnoValido, fecha: e.value });
    }

    const handleClickAgregar = () => {
        if (listaAlumnos.find(alumno => alumno.nombre === alumnoValido.nombre)) {
            console.log(alumnoValido);
            dispatch(agregarAlumno(alumnoValido));
        } else {
            dispatch(mostrarError());
        }
    }

    return (
        <div className="container mt-5">
            <Form className="row">
                <div className="col s12 l5 input-field">
                    <input onChange={handleChangeNombre} id="name" type="text" className="validate" />
                    <label htmlFor="name">Nombre</label>
                </div>
                <div className="col s12 l5 input-field">
                    <input type="text" className="datepicker" id="fecha" />
                    <label htmlFor="fecha">Fecha</label>
                </div>
                <div className="col s12 l2 input-field">
                    <a onClick={handleClickAgregar} className="btn waves-effect waves-light black">Agregar
                        <i className="material-icons right">add</i>
                    </a>
                </div>
            </Form>
        </div>
    );
}

export default Search;