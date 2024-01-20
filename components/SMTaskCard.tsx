import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import rncStyles from 'rncstyles';
import * as Progress from 'react-native-progress';

const rncStyle: any = rncStyles;

export default function SMTaskCard({title, description, progress, time}: any) {
  const percentage = Math.round(progress * 100);

  return (
    <View style={[rncStyle.paper, rncStyle.p3, rncStyle.ms1, styles.card]}>
      <View style={styles.rowContainer}>
        <View style={styles.textContainer}>
          <Text style={[rncStyle.fs3, rncStyle.textBold, {color: '#756EF3'}]}>
            {title}
          </Text>
          <Text numberOfLines={1} style={[rncStyle.fs6, rncStyle.py1]}>
            {description}
          </Text>
          <Text numberOfLines={1} style={{fontSize: 12, paddingVertical: 4}}>
            {time}
          </Text>
        </View>
        <View style={styles.chartContainer}>
          <Progress.Circle
            progress={progress}
            thickness={5}
            size={100}
            color="#756EF3"
          />
          <View style={styles.overlayTextContainer}>
            <Text style={{color: '#756EF3', fontSize: 16}}>{percentage}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: 375,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 2,
  },
  chartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
