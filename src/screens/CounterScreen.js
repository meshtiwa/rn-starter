import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button} from "react-native";


const reducer = (state, action) => {
    //state === {counter: number}
    //action === {type: 'increment' || 'decrement', amount: 1}
    switch(action.thisCounter){
        case 'increment':
            return {...state, counter: state.count + action.amount}
        case 'decrement':
            return {...state, counter: state.count - action.amount}
        default:
            return;
    }
}

const CounterScreen = () => {

    const [state, runMyReducer] = useReducer(reducer, {counter: 0} )


    return (
    <View>
        <Button title = "Increase" onPress ={() => {
            runMyReducer({type: 'increment', amount: 1 })
        }}/>
        <Button title = "Decrease" onPress ={() => {
           runMyReducer({type: 'decrement', amount: 1 })
        }}/>
        <Text>Current Count: {state.counter}</Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;