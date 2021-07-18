import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [pass, setPass] = useState(' ');

    return (
     <View>
         <Text style ={styles.textStyle}>Enter Password:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={pass}
            onChangeText={(newValue) => setPass(newValue)}
        />
        <Text>Your password: {pass}</Text>
        {pass.length <= 6 ? <Text>Password must be longer than 5 characters!</Text> : null}
    </View>
    );
};

const styles = StyleSheet.create({
    input: { //property is your own custom made pass!
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    textStyle:{
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default TextScreen;