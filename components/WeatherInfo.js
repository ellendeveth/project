import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WeatherInfo = props => {
   
    return (
        <View style = {styles.tempcontainer}>
            <Text>Het is</Text>
            
            <Text>{props.currentWeather.temp_c}°C</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    tempcontainer: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100
    }
});

export default WeatherInfo;
