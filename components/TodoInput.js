import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';

export default function TodoInput(props) {
  const [text, setText] = useState(null);
  const [time, setTime] = useState(null);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
      }}>
      <TextInput
        style={{
          flex: 3,
          height: 40,
          color: '#000000',
          borderColor: '#212121',
          borderWidth: 1,
          borderRadius: 8,
        }}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Activity Name"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={{
          flex: 1,
          height: 40,
          color: '#000000',
          borderColor: '#212121',
          borderWidth: 1,
          borderRadius: 8,
          marginLeft: 4,
        }}
        onChangeText={time => setTime(time)}
        value={time}
        keyboardType="numeric"
        placeholder="Time (s)"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity
        style={{
          marginLeft: 4,
          padding: 8,
          backgroundColor: '#ff0000',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}
        onPress={() => {
          props.onPress({text: text, time: time});
          setText('');
          setTime('');
        }}>
        <Text style={{color: '#fafafa'}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
