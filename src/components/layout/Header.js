import { useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../img/san-logo.png';
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const Logo = styled.img`
    height: 40px;
    vertical-align: sub;
`

const Header = () => {

    const { lightMode } = useContext(ThemeContext);

    useEffect(() => {
        const elem = document.querySelector('.sidenav');
        window.M.Sidenav.init(elem, {})
    })

    return (
        <>
            <nav className={lightMode ? 'grey lighten-4' : 'black'}>
                <div className="nav-wrapper container">
                    <Link to="/" className={lightMode ? 'brand-logo black-text' : 'brand-logo'}> <Logo src={logo} alt="logo" /></Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className={lightMode ? 'material-icons black-text' : 'material-icons'}>menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link className={lightMode ? 'black-text' : null} to="/">Home</Link></li>
                        <li><Link className={lightMode ? 'black-text' : null} to="/configuracion">Configuración</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/configuracion">Configuración</Link></li>
            </ul>
        </>
    );
}

export default Header;