import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import rncStyles from 'rncstyles';

const rncStyle: any = rncStyles;

export default function SMButton({label, onPress}: any) {
  const buttonBgColor = '#756EF3';
  const buttonTextColor = 'white';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: buttonBgColor},
        rncStyle.m1,
        rncStyle.roundedPill,
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: buttonTextColor}, rncStyle.p2]}>
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
