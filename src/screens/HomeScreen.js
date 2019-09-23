import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>My HomeScreen</Text>
    <Button 
      onPress={() => props.navigation.navigate("Components")}
      title="Components" 
      />
    <Button 
      onPress={() => props.navigation.navigate("List")}
      title="List" 
      />
    <Button 
      onPress={() => props.navigation.navigate("Images")}
      title="Images" 
    />
    <Button 
      onPress={() => props.navigation.navigate("Counter")}
      title="Counter" 
    />
    <Button 
      onPress={() => props.navigation.navigate("Colors")}
      title="Colors" 
    />
    <Button 
      onPress={() => props.navigation.navigate("SquareColors")}
      title="Square Colors" 
    />
    <Button 
      onPress={() => props.navigation.navigate("TextInput")}
      title="Text Input" 
    />
    <Button 
      onPress={() => props.navigation.navigate("Box")}
      title="Box Screen" 
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;