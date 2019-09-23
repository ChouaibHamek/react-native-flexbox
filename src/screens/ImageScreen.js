import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetails from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetails title="Beach Image" image={require('../../assets/beach.jpg')} />
        <ImageDetails title="Forst Image" image={require('../../assets/forest.jpg')} />
        <ImageDetails title="Mountain Image" image={require('../../assets/mountain.jpg')} />
    </View>;
}

const styles = StyleSheet.create({

});

export default ImageScreen;