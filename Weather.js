import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Thunderstorm",
        subtitle: "Just don't go outside."
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Drizzle",
        subtitle: "Just don't go outside."
    },
    Rain: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Rain",
        subtitle: "Just don't go outside."
    },
    Snow: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Snow",
        subtitle: "Just don't go outside."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Atmosphere",
        subtitle: "Just don't go outside."
    },
    Clear: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Clear",
        subtitle: "Just don't go outside."
    },
    Clouds: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Clouds",
        subtitle: "Just don't go outside."
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "Just don't go outside."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "Just don't go outside."
    }
};

export default function Weather({ temp, condition }) {
    console.log(condition)
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
                <Text style={styles.temp}>{condition}</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    )
};

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    temp: {
      fontSize: 42,
      color: "white"
    },
    halfContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      color: "white",
      fontSize: 44,
      fontWeight: "300",
      marginBottom: 10
    },
    subtitle: {
      fontWeight: "600",
      color: "white",
      fontSize: 24
    },
    textContainer: {
      paddingHorizontal: 20,
      alignItems: "flex-start"
    }

});