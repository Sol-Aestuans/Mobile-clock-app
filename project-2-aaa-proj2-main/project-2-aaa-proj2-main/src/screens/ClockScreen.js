import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import QuoteGenerator from '../components/QuoteGenerator';
import Clock from '../components/Clock';
import DateAndLocation from '../hooks/DateAndLocation';
import Info from '../components/Info';
import ArrowUpIcon from '../../assets/ArrowUpIcon';
import { useThemeColors } from '../hooks/useThemeColors';

const dayImage = require('../../assets/bg-image-daytime.jpg');
const nightImage = require('../../assets/bg-image-nighttime.jpg');


const ClockScreen = () => {
  const { isNight } = DateAndLocation();
  const [showInfo, setShowInfo] = useState(false);
  const { colors } = useThemeColors();

  const slideUpAnimation = useState(new Animated.Value(0))[0];

  const toggleSlideUp = () => {
    setShowInfo(!showInfo);
    Animated.timing(slideUpAnimation, {
      toValue: showInfo ? 0 : 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  const bgSrc = isNight ? nightImage : dayImage;

  return (
    <ImageBackground source={bgSrc} style={styles.background} resizeMode='stretch'>
      <View style={styles.container}>
      <View style={styles.element}>
      <Animated.View style={{ transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, -250] }) }] }}>
        
          <QuoteGenerator />
        
      </Animated.View>
      </View>

        <View style={styles.element}>
          <Animated.View style={[{ transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, -250] }) }] }]}>
            <Clock />
            {/* Conditionally render button */}
            {!showInfo ? (<TouchableOpacity onPress={toggleSlideUp} testID='moreInfoButton' style={[styles.buttonMore, {backgroundColor: colors.primary}]}><Text style={styles.buttonText}>MORE</Text><ArrowUpIcon /></TouchableOpacity>) :
             (<TouchableOpacity onPress={toggleSlideUp} testID='lessInfoButton' style={[styles.buttonLess, {backgroundColor: colors.primary}]}><Text style={styles.buttonText}>LESS</Text><ArrowUpIcon style={styles.rotatedIcon}/></TouchableOpacity>)}

          </Animated.View>
        </View>
      </View>
      <View style={[styles.infoContainer]}>
        <Animated.View style={[styles.slideUpContainer, { transform: [{ translateY: slideUpAnimation.interpolate({ inputRange: [0, 1], outputRange: [250, 0] }) }] }]}>
          <Info/>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .5)", //adds an opaque background so that the quotes can be read w/day background
    paddingBottom: 10,
    
  },

  element: {
    width: '95%',
    marginTop: 10,
  },

  infoContainer: {
    width: '100%',
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
  },

  buttonMore: {
    flexDirection: 'row',
    width: 140,
    height: 50,
    borderRadius: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 4,
    marginVertical: 10,
    fontFamily: 'Roboto-Regular',
  },

  buttonLess: {
    flexDirection: 'row',
    width: 140,
    height: 50,
    borderRadius: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    fontFamily: 'Roboto-Regular',
  },

  buttonText: {
    fontSize: 20,
    letterSpacing: 2,
  },

  slideUpContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  rotatedIcon: {
    transform: [{ rotate: '180deg' }] // Apply rotation here
  },
});

export default ClockScreen;
