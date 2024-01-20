import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import rncStyles from 'rncstyles';
import SMIcon from './SMIcon';

const rncStyle: any = rncStyles;

export default function SMCard({title, description, iconOne, iconTwo}: any) {
  return (
    <>
      <View style={[rncStyle.paper, rncStyle.m1, rncStyle.py2]}>
        <Text style={[rncStyle.fs3, rncStyle.textBold, {color: 'black'}]}>
          {title}
        </Text>
        <Text numberOfLines={2} style={[rncStyle.fs5]}>
          {description}
        </Text>
        <View style={[rncStyle.flexRow]}>
          <TouchableOpacity style={[rncStyle.py1]}>
            <SMIcon name={iconOne} size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={[rncStyle.py1]}>
            <SMIcon name={iconTwo} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

{
  /* <SMCard
title="Example Card"
description="This is a simple card component for React Native. Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
iconOne="rocket"
iconTwo="info"
/> */
}
