import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import rncStyles from 'rncstyles';
import {RadioButton} from 'react-native-paper';
const rncStyle: any = rncStyles;

export default function SMPayment() {
  // const [toggleCheckBoxCreditCard, settoggleCheckBoxCreditCard] = useState(false)
  // const [toggleCheckBoxPaypal, settoggleCheckBoxPaypal] = useState(false)
  // const [toggleCheckBoxVisa, settoggleCheckBoxVisa] = useState(false)
  const [checked, setChecked] = React.useState('first');
  const [thankYou, setThankYou] = useState(false);
  let Saved = () => {
    ToastAndroid.show('Payment Method Saved', ToastAndroid.SHORT);
  };
  return (
    <>
      <View style={[rncStyle.mt4]}>
        <View
          style={[
            rncStyle.bgWhite,
            rncStyle.p1,
            rncStyle.ms2,
            rncStyle.me2,
            rncStyle.mb1,
            rncStyle.flexRow,
            rncStyle.alignItemsCenter,
            rncStyle.justifyContentBetween,
            {borderRadius: 5},
          ]}>
          <View style={[rncStyle.flexRow, rncStyle.alignItemsCenter]}>
            <Text style={[rncStyle.textBlack, rncStyle.me2]}>
              <Icon name="payments" size={30} />
            </Text>
            <Text style={[rncStyle.textBlack, rncStyle.fs6]}>Credit Card</Text>
          </View>
          <RadioButton
            value="first"
            uncheckedColor={'black'}
            color={'#007ea7'}
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
        </View>
        <View
          style={[
            rncStyle.bgWhite,
            rncStyle.p1,
            rncStyle.ms2,
            rncStyle.me2,
            rncStyle.mb1,
            rncStyle.flexRow,
            rncStyle.alignItemsCenter,
            rncStyle.justifyContentBetween,
            {borderRadius: 5},
          ]}>
          <View style={[rncStyle.flexRow, rncStyle.alignItemsCenter]}>
            <Text style={[rncStyle.textBlack, rncStyle.me2]}>
              <Icon name="payments" size={30} />
            </Text>
            <Text style={[rncStyle.textBlack, rncStyle.fs6]}>Visa</Text>
          </View>
          <RadioButton
            value="second"
            uncheckedColor={'black'}
            color={'#007ea7'}
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>
        <View
          style={[
            rncStyle.bgWhite,
            rncStyle.p1,
            rncStyle.ms2,
            rncStyle.me2,
            rncStyle.mb1,
            rncStyle.flexRow,
            rncStyle.alignItemsCenter,
            rncStyle.justifyContentBetween,
            {borderRadius: 5},
          ]}>
          <View style={[rncStyle.flexRow, rncStyle.alignItemsCenter]}>
            <Text style={[rncStyle.textBlack, rncStyle.me2]}>
              <Icon name="payments" size={30} />
            </Text>
            <Text style={[rncStyle.textBlack, rncStyle.fs6]}>Paypal</Text>
          </View>
          <RadioButton
            value="third"
            uncheckedColor={'black'}
            color={'#007ea7'}
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
        </View>
        <View style={[rncStyle.mx2, rncStyle.my1]}>
          <Text style={[rncStyle.textInfo, rncStyle.fs]}>
            Before choosing payment method,make sure the accuracy of your
            information
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={Saved} style={[rncStyle.p1]}>
            <Text style={[rncStyle.btnPayment]}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
