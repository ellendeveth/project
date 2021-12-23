import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WeatherInfo = props => {
   
    return (
        <View >
            <View style = {styles.container}>
                <Text>Het is hier</Text>
                <Text style={styles.text}>{props.currentWeather.temp_c}°C</Text>
            </View >
            <View style = {styles.container}>
                <Text>Het voelt aan als</Text>
                <Text style = {styles.text}>{props.currentWeather.feelslike_c}°C</Text>
            </View>
            <View style = {styles.container}>
                <Text>De luchtvochtigheid is</Text>
                <Text style = {styles.text}>{props.currentWeather.humidity}%</Text>
            </View>
            <View style = {styles.container}>
                <Text>De UV-index is</Text>
                <Text style = {styles.text}>{props.currentWeather.uv}</Text>
            </View>
            <View style = {styles.container}>
                <Text>De windsnelheid is</Text>
                <Text style = {styles.text}>{props.currentWeather.wind_kph}km/u</Text>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal:20,
        paddingVertical:20,
        
    },
    text:{
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    image: {
        width: 100,
        height: 100
    }
});

export default WeatherInfo;
