import { useSelector, useDispatch } from "react-redux";
import { selectAlumnos, eliminarAlumno } from '../features/alumnos/alumnosSlice';


const NameList = () => {

    const alumnos = useSelector(selectAlumnos);
    const dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col s12 l6 offset-l3">
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>Alumnos con reservas</h4></li>
                        {alumnos.length === 0 ? <li className="collection-item"><div>No hay reservas</div></li> :
                            alumnos.map(alumno => {
                                return (
                                    <li key={alumno.fecha} className="collection-item"><div>{`Nombre: ${alumno.nombre} - Fecha: ${alumno.fecha}`}<a onClick={() => dispatch(eliminarAlumno(alumno.fecha))} href="#!" className="secondary-content"><i className="material-icons black-text">delete</i></a></div></li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NameList;