import React from 'react';
import {Text, StyleSheet, View} from 'react-native'; //takes info from components and uses it to show content on mobile device

const  ComponentsScreen = () => {
    const name = <Text style = {styles.subHeaderStyle}>My name is Mesh and I suck at Draven!</Text>;

    return (
    <View>
        <Text style ={styles.textStyle}>Who are you?????</Text>
        {name}
    </View>
    );
};

const styles = StyleSheet.create({ // styles object (being referenced by the component)
    textStyle:{
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;