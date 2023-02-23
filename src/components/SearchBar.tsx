import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

interface SearchBarProps {
    onEndEditing?: any | undefined;
    didTouch?: any | undefined;
    autoFocus?: boolean | undefined;
    onTextChange: Function;
}

// const DismissKeyboard = ({children}) => (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         {children}
//     </TouchableWithoutFeedback>
// )

const SearchBar: React.FC<SearchBarProps> = ({ onEndEditing, didTouch, autoFocus, onTextChange }) => {
    return (
        
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Image style={{ width: 25, height: 25 }} source={require('../images/search.png')} />
                <TextInput 
                style={{ marginLeft: 5, flex: 9, display: 'flex', fontSize: 20, height: 42, borderWidth: 1, borderColor: 'black' }}
                placeholder={'Search options'}
                autoFocus={autoFocus}
                onTouchStart={didTouch}
                onChangeText={(text) => onTextChange(text)}
                onEndEditing={onEndEditing}
                keyboardAppearance={'dark'}
                
            />
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