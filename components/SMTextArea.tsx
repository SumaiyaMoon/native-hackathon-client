import {View, TextInput, Text} from 'react-native';
import rncStyles from 'rncstyles';

const rncStyle: any = rncStyles;

export default function SMTextArea({
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
        multiline={true}
        verticalAlign="top"
        numberOfLines={2}
      />
    </View>
  );
}

{
  /*

const [textAreaValue, setTextAreaValue] = useState('');

const handleTextAreaChange = (text: any) => {
  setTextAreaValue(text);
};

<SMTextArea
        label="Enter Text"
        placeholder="Type something..."
        value={textAreaValue}
        onChangeText={handleTextAreaChange}
      />

      */
}
