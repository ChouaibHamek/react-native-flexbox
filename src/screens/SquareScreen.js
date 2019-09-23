import React, { useState, useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorAdjustment from '../components/ColorAdjustment';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch(action.type) {
        case 'red':
            return state.red + action.payload >= 0 && state.red + action.payload <= 255 ? { ...state, red: state.red + action.payload } : state;
        case 'green':
            return state.green + action.payload >= 0 && state.green + action.payload <= 255 ? { ...state, green: state.green + action.payload } : state;
        case 'blue':
            return state.blue + action.payload >= 0 && state.blue + action.payload <= 255 ? { ...state, blue: state.blue + action.payload } : state;
        default:
            return state;
    }
}
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});

    // USE STATE EXAMPLE
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // const setColor = (color, change) => {
    //     // color === "red", "blue", "green"
    //     // change is the amount to change (+/- 5)
    //     switch(color) {
    //         case "red":
    //             if (red + change <= 255 && red + change >= 0) setRed(red + change);
    //             return;
    //         case "blue":
    //             if (blue + change <= 255 && blue + change >= 0) setBlue(blue + change);
    //             return;
    //         case "green":
    //             if (green + change <= 255 && green + change >= 0) setGreen(green + change);
    //             return;
    //         default:
    //             return;
    //     }
    // }

    // USE STATE EXAMPLE
    // const backgroundColor = `rgb(${red},${green},${blue})`
    const backgroundColor = `rgb(${state.red},${state.green},${state.blue})`

    return <View>
        <Text>Square Screen</Text>
        <ColorAdjustment title="Red" 
            increase={() => {
                // USE STATE EXAMPLE
                // setColor("red", COLOR_INCREMENT)
                dispatch({ type: "red", payload: COLOR_INCREMENT })
            }} 
            decrease={() => dispatch({ type: "red", payload: -COLOR_INCREMENT })}
        />
        <ColorAdjustment title="Green" 
            increase={() => dispatch({ type: "green", payload: COLOR_INCREMENT })} 
            decrease={() => dispatch({ type: "green", payload: -COLOR_INCREMENT })} 
        />
        <ColorAdjustment title="Blue" 
            increase={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })} 
            decrease={() => dispatch({ type: "blue", payload: -COLOR_INCREMENT })} 
        />
        <Text>{state.red}, {state.green}, {state.blue}</Text>
        <View style={{ height: 100, width: 100, backgroundColor }} />
    </View>;
}

const styles = StyleSheet.create({});

export default SquareScreen;