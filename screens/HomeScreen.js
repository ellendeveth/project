import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text, Button, TextInput } from 'react-native';
import WeatherInfo from '../components/WeatherInfo';
import Searchbar from '../components/SearchBar';




const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState ({});
  

  const getWeather = async (text) => {
    try {
      const url = encodeURI("http://api.weatherapi.com/v1/current.json?key=8351c874df924b50b37193648212212&q=" + text);
      const response = await fetch(url)
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
          <View style= {styles.inputcontainer}>
            <TextInput 
                placeholder="Vul een stad in" 
                style={styles.input} 
                value={city}
                onChangeText = {(text)=> setCity(text)}
                />
            <Button style={styles.zoek} title="Zoek" onPress={() => getWeather(city)} />
          </View>
          
          <WeatherInfo currentWeather = {currentWeather} />
        
          <Button title="Weervoorspelling 30 dagen" onPress={() => navigation.navigate('Details')}/>
      </View>
  )
  
  
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 100,
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  zoek: {
    borderWidth: 1,
    borderRadius: 20,

  }
});
export default HomeScreen;