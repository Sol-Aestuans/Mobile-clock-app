import {React, useEffect} from "react";
import { ThemeProvider } from "./context/Theme";
import ClockScreen from "./screens/ClockScreen";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf')
      });
    
      // wait for the fonts to load before hiding the splash screen
      
    useEffect(() => {
        const fetchSetting = async () => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        };
        fetchSetting();
    }, [fontsLoaded]);
    
    if (!fontsLoaded) return null;

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <ClockScreen></ClockScreen>
            </ThemeProvider>
        </SafeAreaProvider>
    );
};

export default App;