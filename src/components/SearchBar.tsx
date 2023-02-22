import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

interface SearchBarProps {
    onEndEditing?: any | undefined;
    didTouch?: any | undefined;
    autoFocus?: boolean | undefined;
    onTextChange: Function;
}

const SearchBar: React.FC<SearchBarProps> = ({ onEndEditing, didTouch, autoFocus, onTextChange }) => {
    return (
        <View style={styles.container}>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
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

export { SearchBar }