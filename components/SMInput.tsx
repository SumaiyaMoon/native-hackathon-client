import {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import rncStyles from 'rncstyles';

const rncStyle: any = rncStyles;

export default function SMInput({
  placeholder,
  onChangeText,
  label,
  value,
}: any) {
  return (
    <View style={rncStyle.pb1}>
      <Text style={[rncStyle.textPrimary, rncStyle.p1]}>{label}</Text>
      <TextInput
        style={[
          rncStyle.input,
          rncStyle.bgWhite,
          rncStyle.rounded,
          rncStyle.border1,
          rncStyle.borderPrimary,
        ]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
}

{
  /*

const [inputValue, setInputValue] = useState('');

const handleInputChange = (text: any) => {
  setInputValue(text);
};

<SMInput
  label="Enter Text"
  placeholder="Type something..."
  value={inputValue}
  onChangeText={handleInputChange}
/>;

*/
}
