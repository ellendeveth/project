import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, TextInput } from 'react-native';
import WeatherScroll from '../components/WeatherScroll'
 
const DetailsScreen = ({ navigation }) => {
    const [forecast, setForecast] = useState ({});

    const getWeatherDays = async() => {
      try {
        const response = await fetch( "http://api.weatherapi.com/v1/forecast.json?key=8351c874df924b50b37193648212212&q=Londen&days=7")
        const result = await response.json();
        console.log("hallo");
        /*console.log(result.forecast.forecastday[2].day.avgtemp_c);
        console.log(result.forecast.forecastday[2].day.avghumidity);
        console.log(result.forecast.forecastday[2].day.condition.icon);
        console.log(result.forecast.forecastday[2].date);*/
        setForecast(result);
        console.log(forecast.forecastday[1]);
      } catch (error) {
        console.error(error);
      }
      
      
    }

    return (
      <View style={styles.screen}>
        <WeatherScroll forecast = {forecast}/>
        <Button title="testapi" onPress={getWeatherDays}/>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
    }
  });
  export default DetailsScreen;