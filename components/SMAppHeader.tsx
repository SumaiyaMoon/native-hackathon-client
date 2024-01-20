import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import rncStyles from 'rncstyles';
import SMIcon from './SMIcon';
const rncStyle: any = rncStyles;

export default function SMAppHeader() {
  return (
    <View
      style={[
        rncStyle.h10,
        rncStyle.flexRow,
        rncStyle.justifyContentBetween,
        rncStyle.alignItemsCenter,
        rncStyle.px2,
      ]}>
      <TouchableOpacity>
        <SMIcon name="navigate-before" size={36} color="black" />
        {/* <Text>back</Text> */}
      </TouchableOpacity>
      <View style={[rncStyle.w70, rncStyle.textCenter]}>
        <Text style={[rncStyle.textBold, rncStyle.fs3, rncStyle.textSecondary]}>
          ScreenHeader
        </Text>
      </View>
    </View>
  );
}
