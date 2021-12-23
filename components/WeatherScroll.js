import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import Forecast from './Forecast'

const WeatherScroll = props => {
    return (
        <ScrollView horizontal={true}>
            <Forecast forecast = {props.forecast}/>
        </ScrollView>
    )
}
export default WeatherScroll

