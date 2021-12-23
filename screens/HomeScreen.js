import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text, Button, TextInput } from 'react-native';
import WeatherInfo from '../components/WeatherInfo';




const HomeScreen = ({ navigation }) => {
  
  const [currentWeather, setCurrentWeather] = useState ({});
  let city = 'Mechelen'

  const getWeather = async (city) => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8351c874df924b50b37193648212212&q=${city}`)
      const result = await response.json()
      
      setCurrentWeather(result.current);
      console.log(currentWeather);
    } catch (error) {
      console.error(error);
    }
    
  }

  useEffect(()=> {
    getWeather('Antwerp');
  },[]);
  
  return (
      <View>
          <TextInput placeholder="Vul een stad in" style={styles.input} onChangeText={getWeather}/>
          
          <View>
            <WeatherInfo currentWeather = {currentWeather} />
          </View>
          <Button title="Weervoorspelling 30 dagen" onPress={() => navigation.navigate('Details')}/>
      </View>
  )
  
  
}

const styles = StyleSheet.create({
  input: {
    
  }
});
export default HomeScreen;