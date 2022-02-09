import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = props => {

    const [lightMode, setLightMode] = useState(false);

    return (
        <ThemeContext.Provider
            value={{
                lightMode,
                setLightMode
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;