import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

let state = {
    counter: 0
};

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return <View>
        <Text>Counter Screen</Text>
        <Button title="Increase" onPress={() => setCounter(counter + 1)} />
        <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
        <Text>Current Counter is {counter}</Text>
    </View>;
}

const style = StyleSheet.create({

});

export default CounterScreen;