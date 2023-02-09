import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const screenWidth = Dimensions.get('screen').width

export const LandingScreen = () => {
    const { addressContainer } = styles;

    return (
        <View style={styles.container}>
            <View style={styles.navigation} />
            
            <View style={styles.body}>
                <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
                <View style={styles.addressContainer}>
                    <Text style={styles.addressContainer}>Your delivery address</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
      
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },

    navigation: {
        flex: 2,
        backgroundColor: 'red',

    },

    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
        flex: 1,
        backgroundColor: 'cyan',
    },

    deliveryIcon: {
        width: 120,
        height: 120,
    },

    addressContainer: {
        width: screenWidth - 100,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center',
    },

    addressTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#7d7d7d',
    }
});
