import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const Configuracion = () => {

    const { lightMode, setLightMode } = useContext(ThemeContext)

    const handleSwitch = () => {
        setLightMode(!lightMode);
    }

    return (
        <div className="container center-align">
            <div className="row">
                <div className="col s12">
                    <h2>Configuracion</h2>
                    <h4>Light Theme</h4>
                    <div className="switch">
                        <label>
                            Off
                            <input onClick={handleSwitch} type="checkbox" />
                            <span className ="lever"></span>
                            On
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Configuracion;