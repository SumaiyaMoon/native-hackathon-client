import React from 'react';
import {View, StyleSheet} from 'react-native';
import SMInput from './SMInput';
import SMTextArea from './SMTextArea';
import SMButton from './SMButton';

export default function SMForm({
  textInputValue,
  textAreaValue,
  onChangeTextInput,
  onChangeTextArea,
  onPressButton,
  textAreaLabel,
  textAreaPlaceholder,
  textInputLabel,
  textInputPlaceholder,
  buttonLabel,
}: any) {
  return (
    <View style={styles.formContainer}>
      <SMInput
        label={textInputLabel}
        placeholder={textInputPlaceholder}
        value={textInputValue}
        onChangeText={onChangeTextInput}
      />
      <SMTextArea
        label={textAreaLabel}
        placeholder={textAreaPlaceholder}
        value={textAreaValue}
        onChangeText={onChangeTextArea}
      />
      <SMButton label={buttonLabel} onPress={onPressButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
  },
});

{
  /*

const [textInputValue, setTextInputValue] = useState('');
const [textAreaValue, setTextAreaValue] = useState('');

const handleTextInputChange = (text: any) => {
  setTextInputValue(text);
};

const handleTextAreaChange = (text: any) => {
  setTextAreaValue(text);
};

const handlePressButton = () => {
  // Implement your form submission logic here
  // For demonstration purposes, we'll just display an alert with the input values
  Alert.alert(
    'Form Submitted',
    `Name: ${textInputValue}\nMessage: ${textAreaValue}`,
  );
};

<SMForm
        textAreaValue={textAreaValue}
        textInputValue={textInputValue}
        onChangeTextInput={handleTextInputChange}
        onChangeTextArea={handleTextAreaChange}
        onPressButton={handlePressButton}
        textInputLabel="Name"
        textInputPlaceholder="Enter your name"
        textAreaLabel="Message"
        textAreaPlaceholder="Type your message..."
        buttonLabel="Submit"
      />
      
*/
}
