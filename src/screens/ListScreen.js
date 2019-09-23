import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: "Friend #11123" },
        { name: "Friend #11" },
        { name: "Friend #11w1" },
        { name: "Friend #11d11" },
        { name: "Friend #11111" },
        { name: "Friend #1q11" },
        { name: "Friend #1e1" },
        { name: "Friend #1" }
    ];

    return <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item, index }) => <Text style={styles.textStyle}>{item.name}</Text>}
    />
};

const styles = StyleSheet.create({
    textStyle: {
        margin: 50
    }
});

export default ListScreen;