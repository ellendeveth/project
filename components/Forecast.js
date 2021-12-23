import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Forecast = props => {
    return (
        <View style={styles.container}> 
            <ForecastItem item={props.forecastday[1]}/>
            <ForecastItem item={props.forecastday[2]}/>
            <ForecastItem item={props.forecastday[3]}/>
            
        </View>
    )
}

const ForecastItem = ({item}) => {
    return (
        <View style = {styles.item} > 
            <Text style = {styles.text}>{item.date}</Text>
            <Text style = {styles.text}>gemiddelde temperatuur {item.day.avgtemp_c}</Text>
            <Text style={styles.text}>gemiddelde luchtvochtigheid {item.day.avghumidity}  </Text>
        </View>
    )
        
    
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    item: {
        
        justifyContent: "center",
        backgroundColor: "#e9f5f8",
        borderRadius: 10,
        borderColor: "blue",
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    text: {
        fontSize: 20,
        color: "blue",
        textAlign: "center",
    }
});
export default Forecast
