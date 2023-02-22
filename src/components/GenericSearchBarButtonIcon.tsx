import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

interface ButtonProps { 
    onTap: Function;
    width: number;

 }

const GenericSearchBarButtonIcon: React.FC<ButtonProps> = ({  }) => {
    return (
        <TouchableOpacity style={[styles.btn, { }]}>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        width: 60,
        height: 40,
    }
});

export { GenericSearchBarButtonIcon }
