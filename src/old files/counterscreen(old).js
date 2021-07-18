// import React, { useState } from "react";
// import { Text, StyleSheet, View, Button} from "react-native";


// const CounterScreen = () => {
//     //state being used right below to modify variable "counter"
//     const [counter, setCounter] = useState(0);
//     //setCounter being used to change the variable, not counter++!

//     return (
//     <View>
//         <Button title = "Increase" onPress ={() => {
//             //Don't do this!!!! (below)
//             //counter++;
//             setCounter(counter+1);
//         }}/>
//         <Button title = "Decrease" onPress ={() => {
//            setCounter(counter-1);
//         }}/>
//         <Text>Current Count: {counter}</Text>
//     </View>
//     );
// };

// const styles = StyleSheet.create({});

// export default CounterScreen;