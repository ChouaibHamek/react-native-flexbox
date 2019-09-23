import React from "react";
import { View, Text, StyleSheet } from "react-native";

// StyleSheet.absoluteFillObject
// => Fill parent element no matter what
const BoxScreen = () => {
    return (
        <View style={{ height: "100%", borderWidth: 5, borderColor: "green" }}>
            <View style={{ ...styles.parentStyle, alignItems: "stretch"}}>
                <Text>alignItems: "stretch"</Text>
                <Text style={styles.childStyle}>Child #1</Text>
                <Text style={{...styles.childStyle, alignSelf: "center"}}>alignSelf: "center"</Text>
                <Text style={styles.childStyle}>Child #3</Text>
            </View>
            <View style={{ ...styles.parentStyle, alignItems: "flex-start"}}>
                <Text>alignItems: "flex-start"</Text>
                <Text style={styles.childStyle}>Child #1</Text>
                <Text style={styles.childStyle}>Child #2</Text>
                <Text style={styles.childStyle}>Child #3</Text>
            </View>
            <View style={{ ...styles.parentStyle, alignItems: "center"}}>
                <Text>alignItems: "center"</Text>
                <Text style={styles.childStyle}>Child #1</Text>
                <Text style={styles.childStyle}>Child #2</Text>
                <Text style={styles.childStyle}>Child #3</Text>
            </View>
            <View style={{ ...styles.parentStyle, flexDirection: "row", height: 80 }}>
                <Text>flexDir': "row", heit': 80 </Text>
                <Text style={styles.childStyle}>Child #1</Text>
                <Text style={styles.childStyle}>Child #2</Text>
                <Text style={styles.childStyle}>Child #3</Text>
            </View>
            <View style={{ ...styles.parentStyle, flexDirection: "row", height: 80 }}>
                <Text>// </Text>
                <Text style={{...styles.childStyle, flex: 1}}>Flex 1</Text>
                <Text style={{...styles.childStyle, flex: 1}}>Flex 1</Text>
                <Text style={{...styles.childStyle, flex: 2}}>Flex 2</Text>
            </View>
            <View style={{ ...styles.parentStyle, justifyContent: "center", height: 200 }}>
                <Text>justifyContent: "center", height: 200 </Text>
                <Text style={styles.childStyle}>Child #1</Text>
                <Text style={styles.childStyle}>Child #2</Text>
                <Text style={styles.childStyle}>Child #3</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    childStyle: {
        borderWidth: 1,
        borderColor: "red"
    }
});

export default BoxScreen;
