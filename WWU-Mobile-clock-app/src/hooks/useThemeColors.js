import Colors from '../constants/Colors';
import { useTheme } from './useTheme';

export const useThemeColors = () => {
  const customTheme = useTheme();

  return {
    theme: customTheme.theme,
    colors: Colors[customTheme.theme],
  };
}