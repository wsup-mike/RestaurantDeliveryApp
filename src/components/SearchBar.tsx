import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

interface {


}

const : React.FC<> = ({ }) => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text>Navigation</Text>
            </View>
            <View style={styles.body}>
                <Text>Body</Text>
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
        backgroundColor: 'green',
    },

    navigation: {
        flex: 2,
        backgroundColor: 'red',
    },

    body: {
        flex: 10,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
        flex: 1,
        backgroundColor: 'cyan',
    }
});

export { }