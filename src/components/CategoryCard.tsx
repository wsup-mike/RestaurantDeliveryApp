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
            <Image source={{ uri: `${item.icon}`}}/>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },

});

export { CategoryCard }