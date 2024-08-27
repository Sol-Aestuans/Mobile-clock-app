import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SunIcon from '../../assets/SunIcon';
import MoonIcon from '../../assets/MoonIcon';
import DateAndLocation from '../hooks/DateAndLocation';

const Clock = () => {
    const { currentTime, location, greeting, isNight, timezone, timePeriod } = DateAndLocation();
    
    return (
        <View style={styles.container} testID='clock'>
            
            <Text style={styles.text}>{isNight ? <MoonIcon/> : <SunIcon/>} {greeting}, it's currently </Text>
            <View style={styles.timeContainer}>
                <Text style={[styles.timeText]}>
                    {currentTime} <View style = {styles.footerContainer}><Text style={styles.footerText}>{timePeriod}</Text><Text style={styles.footerText}>{timezone}</Text></View>
                </Text>
            </View>
            <Text style={[styles.text, {fontFamily: 'Roboto-Bold'}]}>In {location}</Text>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 50,
        padding: 2,
    },
    
    timeContainer: {
        flexDirection: 'row',
        padding: 2,
    },

    text: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Roboto-Regular',
        
    },

    footerContainer: {
        justifyContent: 'center',
    },

    footerText: {
        fontSize: 16,
        color: '#fff',
    },

    timeText: {
        fontSize: 90,
        color: '#FFF',
        fontFamily: 'Roboto-Bold',
    },

})

export default Clock;