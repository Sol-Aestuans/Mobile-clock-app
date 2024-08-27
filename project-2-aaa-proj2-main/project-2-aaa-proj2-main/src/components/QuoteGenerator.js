import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import RefreshIcon from '../../assets/RefreshIcon';
import { Text } from '../components/themed/Text';

const QuoteGenerator = () => {
    const [data, setData] = useState(null);

    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://api.quotable.io/random');
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    return(
        <View style={styles.container}>
                <TouchableOpacity testID='button' onPress={fetchQuote} style={styles.button}>
                    <RefreshIcon/>
                </TouchableOpacity>
            
            <View style={styles.quote}>
                <Text>{data !== null ? data.content : 'Error Fetching Quote'}</Text>
                <Text> </Text>
                <Text>{data !== null ? data.author : ''}</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 50
    },

    quote: {
        flex: 10,
        height: '100%',
        paddingTop: 10
    },

    button: {
        flex: 1,
        padding: 10,
        height: '50%',
        alignItems: 'center',
    }
})

export default QuoteGenerator;
