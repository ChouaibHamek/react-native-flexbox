import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState('');
    return <View>
        <Text>Enter your name</Text>
        <TextInput
            style={styles.input}
            atuoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newName) => setName(newName)}
        />
        <Text>Your name is: {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;