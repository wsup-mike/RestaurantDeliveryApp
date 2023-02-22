import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ImageSourcePropType } from 'react-native';

interface ButtonProps { 
    onTap: Function;
    width: number;
    height: number;
    icon: ImageSourcePropType;
 }

const GenericSearchBarButtonIcon: React.FC<ButtonProps> = ({  onTap, width, height, icon }) => {
    
    return (
        <TouchableOpacity style={[styles.btn, { width, height }]}>
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
