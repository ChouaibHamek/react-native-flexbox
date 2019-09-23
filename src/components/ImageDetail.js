import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = ({ image, title }) => {
    return <View>
        <Image source={image} />
        <Text>{title}</Text>
    </View>;
}

const style = StyleSheet.create({
    image: {

    },
    title: {

    }
});

export default ImageDetails;