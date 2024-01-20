import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import rncStyles from 'rncstyles';

const rncStyle: any = rncStyles;

export default function SMLink(props: any) {
  const {label, onPress} = props;
  return (
    <>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={[
              rncStyle.textCenter,
              rncStyle.textBold,
              rncStyle.fs6,
              {textDecorationLine: 'underline'},
            ]}>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

{
  /*

const handleLinkPress = () => {
    // Implement the logic you want when the link is pressed
    console.log('Link pressed!');
  };

  <SMLink label="Click me!" onPress={handleLinkPress} />
  
*/
}
