import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text, Button, TextInput } from 'react-native';
import WeatherInfo from '../components/WeatherInfo';
import Searchbar from '../components/SearchBar';




const HomeScreen = ({ navigation }) => {
  
  

  useEffect(()=> {
    getWeather('Antwerp');
  },[]);
  
  return (
      <View>
          <View>
            <Searchbar getWeather = {getWeather}/> 
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