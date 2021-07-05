import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import TodoInput from './components/TodoInput';
import TimerComponent from './components/Timer';
import TodoListComponent from './components/TodoList';
import StopwatchComponent from './components/Stopwatch';

const App: () => Node = () => {
  const isDarkMode = false; //useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter, //isDarkMode ? Colors.darker : Colors.lighter,
    padding: 12,
  };

  const [timerRunning, setTimerRunning] = useState(false);

  const [timerPaused, setTimerPaused] = useState(false);

  const [timerDuration, setTimerDuration] = useState(0);

  const [timerName, setTimerName] = useState('');

  const [showEditor, setShowEditor] = useState(false);

  const [todoItems, setTodoItems] = useState([
    {
      text: 'Very Fast',
      time: '3',
    },
    {
      text: 'Normal',
      time: '10',
    },
    {
      text: 'Slow',
      time: '30',
    },
  ]);

  function addTodoItem(_text) {
    setTodoItems([...todoItems, _text]);
  }

  function deleteTodoItem(_index) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr);
  }

  function startTimer(item) {
    setTimerName(item.name);
    setTimerDuration(item.time);
    setTimerRunning(true);
    setTimerPaused(true);
  }

  function stopTimer() {
    setTimerRunning(false);
  }

  function toggleTimer() {
    setTimerPaused(!timerPaused);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text
        style={{fontSize: 36, fontWeight: 'bold', paddingVertical: 12}}
        onPress={() => setShowEditor(!showEditor)}>
        Simple Todo Timer
      </Text>
      {showEditor ? <TodoInput onPress={addTodoItem} /> : null}
      <StopwatchComponent />
      {timerRunning ? (
        <TimerComponent
          title={timerName}
          duration={timerDuration}
          isPlaying={timerRunning}
          isPaused={timerPaused}
          stopTimer={stopTimer}
          toggleTimer={toggleTimer}
        />
      ) : (
        <TodoListComponent
          startTimer={startTimer}
          todoItems={todoItems}
          deleteTodoItem={deleteTodoItem}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
