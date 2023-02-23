import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Category } from '../redux'

interface CategoryCardProps { 
    item: Category;
    onTap: Function;
 }

const CategoryCard: React.FC<CategoryCardProps> = ({ item, onTap }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: `${item.icon}`}} style={{ width: 120, height: 120, borderRadius: 20, backgroundColor: '#eaeaea'}} />
            <Text>{item.title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 140,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5
    },

});

export { CategoryCard }