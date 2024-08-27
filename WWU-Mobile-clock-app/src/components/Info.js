// Info.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import useDateAndLocation from '../hooks/DateAndLocation';
import { useThemeColors } from '../hooks/useThemeColors';
import { InfoText, InfoTextBold } from './themed/Text';

const Info = () => {
    const { fullTimezone, day, weekDay, weekNum } = useDateAndLocation();
    const { colors } = useThemeColors();

    return (
        <View style={[styles.infoContainer, {backgroundColor: colors.background}]}>
            <View style={styles.entry}>
                <InfoText style={[styles.keyText]}>CURRENT TIMEZONE</InfoText>
                <InfoTextBold style={[styles.valueText]}>{fullTimezone}</InfoTextBold>
            </View>
            <View style={styles.entry}>
                <InfoText style={[styles.keyText]}>DAY OF THE YEAR</InfoText>
                <InfoTextBold style={[styles.valueText]}>{day}</InfoTextBold>
            </View>
            <View style={styles.entry}>
                <InfoText style={[styles.keyText]}>DAY OF THE WEEK</InfoText>
                <InfoTextBold style={[styles.valueText]}>{weekDay}</InfoTextBold>
            </View>
            <View style={styles.entry}>
                <InfoText style={styles.keyText}>WEEK NUMBER</InfoText>
                <InfoTextBold style={styles.valueText}>{weekNum}</InfoTextBold>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    entry: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        height: 40,
        marginVertical: 5,
    }
});

export default Info;
