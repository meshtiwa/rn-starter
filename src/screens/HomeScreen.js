import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({ navigation }) => { //instead of passing in "props", use destructuring to not have to do all that
  return (
  <View>
    <Text style = {styles.text}>xD FARTTTTTt moment!</Text>
    <Button
    onPress = {() => navigation.navigate('Components')}
    title = "Go to Components Demo"
    />
    <Button
    onPress = {() => navigation.navigate('List')}
    title = "Go to List Demo"
    />
    <Button
    onPress = {() => navigation.navigate('Image')}
    title = "Go to Images Demo"
    />
    <Button
    onPress = {() => navigation.navigate('Counter')}
    title = "Go to Counter Demo"
    />
     <Button
    onPress = {() => navigation.navigate('Color')}
    title = "Go to Color Demo"
    />
    <Button
    onPress = {() => navigation.navigate('Square')}
    title = "Go to Square Demo"
    />
    <Button
    onPress = {() => navigation.navigate('Text')}
    title = "Go to Text Demo (text shows up simeoltanily)"
    />
    <Button
    onPress = {() => navigation.navigate('Box')}
    title = "Go to Box Demo (making it pretty)"
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


