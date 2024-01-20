import {useState} from 'react';
import {RadioButton} from 'react-native-paper';

export default function SMRadioButton() {
  const [checked, setChecked] = useState('first');

  return (
    <>
      <RadioButton
        value="second"
        uncheckedColor={'black'}
        color={'#007ea7'}
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
    </>
  );
}
