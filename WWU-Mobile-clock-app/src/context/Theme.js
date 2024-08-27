import { createContext, useState } from "react";
import Colors from "../constants/Colors";
const Themes = ['day', 'night'];

const ThemeContext = createContext({
    theme: 'day',
    setTheme: () => {},
    colors: Colors['day'],
});

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('day');
    const colors = Colors[theme];

    return (
        <ThemeContext.Provider value = {{ theme, setTheme, colors }}>
            { children }
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider, Themes};