import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Category } from '../redux'

interface CategoryCardProps { 
    item: Category;
    onTap: Function;
 }

const CategoryCard: React.FC<CategoryCardProps> = ({ item, onTap }) => {
    return (
        
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

export { CategoryCard }