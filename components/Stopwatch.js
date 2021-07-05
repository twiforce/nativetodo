import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Stopwatch} from 'react-native-stopwatch-timer';

const StopwatchComponent = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Stopwatch
        laps
        msecs
        start={isStopwatchStart}
        //To start
        reset={resetStopwatch}
        //To reset
        options={options}
        //options for the styling
        getTime={time => {}}
      />
      <TouchableHighlight
        onPress={() => {
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(false);
        }}>
        <Text style={styles.buttonText}>
          {!isStopwatchStart ? 'START' : 'STOP'}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          setIsStopwatchStart(false);
          setResetStopwatch(true);
        }}>
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableHighlight>
    </View>
  );
};

export default StopwatchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};
