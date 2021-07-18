import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from './components/ImageDetail'; // import the child class into the parent

const ImageScreen = () => { //"title" and "imageToShow" prop is made up!
    return <View>
        <ImageDetail 
            title = "Forest" 
            imageToShow = {require('C:/Users/tiwar/rn-starter/assets/forest.jpg')} 
            imageScore = {9}/>
        <ImageDetail 
            title = "Beach" 
            imageToShow = {require('C:/Users/tiwar/rn-starter/assets/beach.jpg')} 
            imageScore = {7}/>
        <ImageDetail 
            title = "Mountain" 
            imageToShow = {require('C:/Users/tiwar/rn-starter/assets/mountain.jpg')} 
            imageScore = {4}/>
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;