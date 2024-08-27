import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';

export const useTheme = () => {
    const context = useContext(ThemeContext);

    return {
        theme: context.theme,
        setTheme: context.setTheme,
        colors: context.colors,
    }
}