import React from "react";
import { View, Text, Button } from "react-native";

const ColorAdjustment = ({ title, increase, decrease }) => {
    return <View>
        <Text>{title}</Text>
        <Button title={`Increase ${title}`} onPress = {increase} />
        <Button title={`Decrease ${title}`} onPress = {decrease} />
    </View>
}

export default ColorAdjustment;