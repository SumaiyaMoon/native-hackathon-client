import React from 'react';
import {View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import rncStyles from 'rncstyles';

const rncStyle: any = rncStyles;

const SMPriorityComponent = ({
  label,
  selectedPriority,
  onSelectPriority,
}: any) => {
  const priorityOptions = ['Low', 'Moderate', 'High'];

  return (
    <View style={rncStyle.pb1}>
      <Text style={[rncStyle.textPrimary, rncStyle.p1]}>{label}</Text>
      <View
        style={[
          rncStyle.bgWhite,
          rncStyle.rounded,
          rncStyle.border1,
          rncStyle.borderPrimary,
        ]}>
        <RNPickerSelect
          onValueChange={value => onSelectPriority(value)}
          value={selectedPriority}
          items={priorityOptions.map(option => ({
            label: option,
            value: option.toLowerCase(),
          }))}
        />
      </View>
    </View>
  );
};

export default SMPriorityComponent;
