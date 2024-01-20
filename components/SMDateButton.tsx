import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import rncStyles from 'rncstyles';

const rncStyle: any = rncStyles;

export default function SMDateButton({label, onPress}: any) {
  return (
    <TouchableOpacity style={[styles.button, rncStyle.m1]} onPress={onPress}>
      <Text
        style={[
          rncStyle.textPrimary,
          rncStyle.input,
          rncStyle.bgWhite,
          rncStyle.rounded,
          rncStyle.border1,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
// Example usage:
// <SMButton
//   onPress={() => {
//     navigation.navigate('Login');
//   }}
//   label="Login"
//   bgColor="#756EF3" // Optional: Set background color
//   color="white"     // Optional: Set text color
// />
