import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = function(){
    const friends = [ //array (each friend object has properties "name" and "age")
        {name: 'Friend #1', age: '60'},
        {name: 'Friend #2', age: '22'},
        {name: 'Friend #3', age: '34'},
        {name: 'Friend #4', age: '17'},
    ];
    return (
    <FlatList
        //horizontal - this prop makes app scroll horizontally
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}

        keyExtractor ={friend => friend.name}
        data = {friends} //passing in the array of data
        renderItem = {({ item }) => { //converting each item in list into an element
            return <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;