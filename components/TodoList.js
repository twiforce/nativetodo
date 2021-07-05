import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TodoListComponent = props => {
  const {startTimer, todoItems, deleteTodoItem} = props;
  return (
    <FlatList
      style={{paddingVertical: 8}}
      data={todoItems}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity style={{paddingVertical: 8}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{fontSize: 18}}
                onPress={() => {
                  startTimer(item);
                }}>
                {item.text} ({item.time}s)
              </Text>
              <Text
                style={{color: 'red', fontSize: 18}}
                onPress={() => {
                  deleteTodoItem(index);
                }}>
                [X]
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default TodoListComponent;
