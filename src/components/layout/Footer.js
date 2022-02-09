import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

const StickyFooter = styled.footer`
@media (min-width: 992px){
    position:fixed;
    bottom: 0;
    width: 100%;
}
`

const Footer = () => {

    const { lightMode } = useContext(ThemeContext);

    return (
        <StickyFooter className={lightMode ? 'page-footer grey lighten-2' : 'page-footer black'}>
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className={lightMode ? 'black-text' : 'white-text'}>Footer Content</h5>
                        <p className={lightMode ? 'black-text' : 'grey-text text-lighten-4'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, fugit!</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className={lightMode ? 'black-text' : 'white-text'}>Links</h5>
                        <ul>
                            <li><a className={lightMode ? 'black-text' : 'grey-text text-lighten-3'} href="#!">Link 1</a></li>
                            <li><a className={lightMode ? 'black-text' : 'grey-text text-lighten-3'} href="#!">Link 2</a></li>
                            <li><a className={lightMode ? 'black-text' : 'grey-text text-lighten-3'} href="#!">Link 3</a></li>
                            <li><a className={lightMode ? 'black-text' : 'grey-text text-lighten-3'} href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={lightMode ? 'footer-copyright grey lighten-1 black-text' : 'footer-copyright grey darken-4'}>
                <div className="container">
                    © 2021 Copyright Mauro Simonetti
                    <a className={lightMode ? 'black-text right' : 'grey-text text-lighten-4 right'} href="#!">More Links</a>
                </div>
            </div>
        </StickyFooter>
    );
}

export default Footer;