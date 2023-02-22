import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

interface ButtonProps { 

 }

const SearchBarButton: React.FC<ButtonProps> = ({  }) => {
    return (
        <TouchableOpacity>
        </TouchableOpacity>
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

export { SearchBarButton }
