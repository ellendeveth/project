import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList, TextInput } from 'react-native';

 
const DetailsScreen = ({ navigation }) => {
  


    return (
      <View style={styles.screen}>
        
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