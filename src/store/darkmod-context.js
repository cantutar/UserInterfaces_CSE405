import React, { useState, useContext } from "react";

const ThemeCtx = React.createContext();
const ToggleDarkmode = React.createContext();

export function useTheme() {
    return useContext(ThemeCtx);
}
export function useToggleDark() {
    return useContext(ToggleDarkmode);
}

export default function DarkModeContextProvider(props) {
    const [isDarkValid, setIsDarkValid] = useState(false);

    function darkModeHandler() {
        setIsDarkValid((prevTheme) => !prevTheme);
    }

    return (
        <ThemeCtx.Provider value={isDarkValid}>
            <ToggleDarkmode.Provider value={darkModeHandler}>
                {props.children}
            </ToggleDarkmode.Provider>
        </ThemeCtx.Provider>
    );
}
