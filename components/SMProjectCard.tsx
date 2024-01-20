import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import rncStyles from 'rncstyles';
import SMAvatar from './SMAvatar';
import * as Progress from 'react-native-progress';

const rncStyle: any = rncStyles;

export default function SMProjectCard({
  title,
  description,
  bgColor,
  width,
  margin,
}: any) {
  const textColor = bgColor === 'white' ? '#756EF3' : 'white';
  const progressBarColor = bgColor === 'white' ? '#756EF3' : 'white';

  return (
    <>
      <View
        style={[
          rncStyle.paper,
          rncStyle.p3,

          {
            backgroundColor: bgColor ?? '#756EF3',
            width: width ?? 350,
            margin: margin ?? 5,
          },
        ]}>
        <Text style={[rncStyle.fs3, rncStyle.textBold, {color: textColor}]}>
          {title}
        </Text>
        <Text
          numberOfLines={2}
          style={[rncStyle.fs6, rncStyle.py1, {color: textColor}]}>
          {description}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={avatar.container}>
            <SMAvatar style={[avatar.avatar]} />
            <SMAvatar style={[avatar.avatar, avatar.halfOverlapping2]} />
            <SMAvatar style={[avatar.avatar, avatar.halfOverlapping3]} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              flexDirection: 'column',
              marginRight: 10,
            }}>
            <Text
              style={[
                rncStyle.fs6,
                rncStyle.py1,
                {color: textColor},
                rncStyle.me3,
              ]}>
              Progress
            </Text>
            <Progress.Bar progress={0.5} width={100} color={progressBarColor} />
          </View>
          <View>
            <Text
              style={[
                rncStyle.fs6,
                rncStyle.py1,
                {color: textColor},
                rncStyle.mx1,
                rncStyle.mt1,
              ]}>
              50/80
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

const avatar = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
  },
  avatar: {
    marginRight: -25,
  },
  halfOverlapping2: {
    position: 'absolute',
    top: 0,
    left: 25,
  },
  halfOverlapping3: {
    position: 'absolute',
    top: 0,
    left: 50,
  },
});
