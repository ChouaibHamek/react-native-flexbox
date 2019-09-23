import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

const ColorsScreen = () => {
    const [colors, setColors] = useState([]);
    const generateColor = () => {
        const red = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        return `rgb(${red}, ${blue}, ${green})`;
    }
    const renderColors = (colors) => {
        colorsComponents = [];
        for (i = 0; i < colors.length; i++) {
            colorsComponents.push(
                <View style={{ height: 100, width: 100, backgroundColor: colors[i] }} />
            );
        }
        return colorsComponents;
    }
    return <View>
        <Button title="Add Color" onPress={() => {
            setColors([...colors, generateColor()]);
            console.log(colors);
        }} />
        <FlatList
            keyExtractor={item => item}
            data={colors}
            renderItem={({ item }) => <View style={{ height: 100, width: 100, backgroundColor: item }} />}
        />
    </View>
}

export default ColorsScreen;