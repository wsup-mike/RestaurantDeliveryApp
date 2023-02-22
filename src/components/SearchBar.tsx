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
            <View style={styles.searchBar}>
                
            </View>
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
    },

    searchBar: {
        display: 'flex',
        height: 32,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ededed',
        alignItems: 'center',
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#e5e5e5',
        borderWidth: 2,
    }
});

export { SearchBar }