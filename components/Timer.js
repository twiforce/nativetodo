import React from 'react';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Dimensions, Text, View} from 'react-native';

// const children = ({remainingTime}) => {
//   const minutes = Math.floor(remainingTime / 60);
//   const seconds = remainingTime % 60;
//
//   return (
//     <Text style={{fontSize: 24}}>
//       ${minutes}:${seconds}
//     </Text>
//   );
// };

const TimerComponent = props => {
  const {duration, isPaused, stopTimer, toggleTimer} = props;

  return (
    <View style={{paddingTop: 12}}>
      <CountdownCircleTimer
        isPlaying={isPaused}
        duration={duration}
        onComplete={stopTimer}
        size={Dimensions.get('window').width - 24}
        strokeWidth={24}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2],
        ]}>
        {({remainingTime}) => <Text>{remainingTime}</Text>}
      </CountdownCircleTimer>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          onPress={() => {
            toggleTimer(!isPaused);
          }}>
          {!isPaused ? 'START' : 'PAUSE'}
        </Text>
        <Text
          onPress={() => {
            stopTimer();
          }}>
          STOP
        </Text>
      </View>
    </View>
  );
};

export default TimerComponent;
