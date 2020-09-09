import React from 'react';
import { Alert, ImagePropTypes } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "8040ad82cbf5ff1b6a9ceb9589b3c3b3";
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
//http://api.openweathermap.org/data/2.5/weather?lat=37.5463051&lon=126.9203586&appid=8040ad82cbf5ff1b6a9ceb9589b3c3b3
export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0,
    condition: 'Clear',
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log(weather[0].main)
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync()
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Cant find you.", "So sad")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp, 1)} condition={condition} />;

  }
}


