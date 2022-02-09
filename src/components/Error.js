import { useDispatch } from "react-redux";
import { quitarError } from '../features/error/errorSlice';

const Error = () => {

    const dispatch = useDispatch();

    return (
        <div className="container center-align">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="col s12 m6 offset-m3">
                            <div className="card-panel red darken-3">
                                <span className="white-text">
                                    El Alumno ingresado no se encuentra en la lista de admitidos o no se ha enviado ningún valor
                                </span> <br />
                                <a onClick={() => dispatch(quitarError())} className="waves-effect waves-light btn mt-4 white black-text">Ocultar Error</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;