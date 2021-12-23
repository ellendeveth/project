import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

 const SearchBar = props => {
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
    return (
        <View>
            <TextInput 
                placeholder="Vul een stad in" 
                style={styles.input} 
                />
            <Button title="Zoek" onPress={() => getWeather()} />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 20,
    }
})
export default SearchBar;
