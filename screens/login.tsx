import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import rncStyles from 'rncstyles';
import {Post, login} from '../config/api-methods';
import {useDispatch} from 'react-redux';
import {add} from '../config/redux/reducers/userslice';

const rncStyle: any = rncStyles;

export default function Login({navigation}: any) {
  const [model, setModel] = useState<any>({
    // requestTime: JSON.parse(JSON.stringify(new Date())),
  });
  const dispatch = useDispatch();

  // const logIn = async () => {
  //   try {
  //     let errorMessages = [];

  //     if (!userName) {
  //       errorMessages.push('User Name is required');
  //     }

  //     if (!password || password.length < 6) {
  //       errorMessages.push(
  //         'Password is required and should be at least 6 characters',
  //       );
  //     }

  //     if (errorMessages.length > 0) {
  //       console.log(errorMessages);
  //       return;
  //     }

  //     const loginCredentials = {
  //       userName,
  //       password,
  //     };

  //     // Call the login API
  //     const response = await login(loginCredentials);

  //     // Assuming your API response contains a 'token' field
  //     const token = response.token;

  //     // Store the token in AsyncStorage or wherever you prefer
  //     // AsyncStorage.setItem('your_token_key', token);

  //     // Navigate to Home or do any other post-login actions
  //     navigation.navigate('Home');
  //   } catch (error: any) {
  //     console.error('Error logging in:', error);

  //     if (error.response && error.response.status === 401) {
  //       ToastAndroid.show(
  //         'Invalid credentials. Please check your username and password.',
  //         ToastAndroid.SHORT,
  //       );
  //     } else {
  //       ToastAndroid.show(
  //         'Login failed. Please try again later.',
  //         ToastAndroid.SHORT,
  //       );
  //     }
  //   }
  // };

  const logIn = async () => {
    try {
      // Validate your form input (if needed)
      let errorMessages: any = [];
      // Add validation logic here and push error messages to the errorMessages array

      if (errorMessages.length > 0) {
        console.log(errorMessages);
        return;
      }

      // Dispatch the action to update Redux state
      dispatch(add({...model}));

      // Make the API call to sign up
      const response = await Post('auth/login', model);

      // Handle the response
      console.log(response.data);
      navigation.navigate('Home');
    } catch (error: any) {
      console.error('Error signing up:', error);

      // Handle different types of errors
      if (error.response && error.response.status === 401) {
        ToastAndroid.show(
          'Invalid credentials. Please check your username and password.',
          ToastAndroid.SHORT,
        );
      } else {
        ToastAndroid.show(
          'Sign-up failed. Please try again later.',
          ToastAndroid.SHORT,
        );
      }
    }
  };
  return (
    <>
      <View style={[rncStyle.h100, rncStyle.bgLight]}>
        <ScrollView>
          <View
            style={[rncStyle.h100, rncStyle.p2, rncStyle.justifyContentCenter]}>
            <View style={rncStyle.py5}>
              <Text
                style={[
                  rncStyle.fs1,
                  rncStyle.textPrimary,
                  rncStyle.textBold,
                  rncStyle.mb1,
                ]}>
                Login
              </Text>
              <Text style={[rncStyle.fs5, rncStyle.textSecondary]}>
                Please Sign in to continue.
              </Text>
            </View>
            <View>
              <View style={rncStyle.pb1}>
                <Text style={[rncStyle.textPrimary, rncStyle.p1]}>
                  User Name
                </Text>
                <TextInput
                  onChangeText={(e: any) => setModel({...model, username: e})}
                  style={[
                    rncStyle.input,
                    rncStyle.bgWhite,
                    rncStyle.rounded,
                    rncStyle.border1,
                    rncStyle.borderPrimary,
                  ]}
                  placeholder="username"
                />
              </View>
              <View style={rncStyle.pb1}>
                <Text style={[rncStyle.textPrimary, rncStyle.p1]}>Email</Text>
                <TextInput
                  onChangeText={(e: any) => setModel({...model, email: e})}
                  style={[
                    rncStyle.input,
                    rncStyle.bgWhite,
                    rncStyle.rounded,
                    rncStyle.border1,
                    rncStyle.borderPrimary,
                  ]}
                  placeholder="example@abc.com"
                />
              </View>
              <View style={rncStyle.pb1}>
                <Text style={[rncStyle.textPrimary, rncStyle.p1]}>
                  Password
                </Text>
                <TextInput
                  onChangeText={(e: any) => setModel({...model, password: e})}
                  style={[
                    rncStyle.input,
                    rncStyle.bgWhite,
                    rncStyle.rounded,
                    rncStyle.border1,
                    rncStyle.borderPrimary,
                  ]}
                  placeholder="Enter Password atleast 6 characters"
                />
              </View>
              <View style={rncStyle.py1}>
                <TouchableOpacity>
                  <Text
                    style={[
                      rncStyle.textPrimary,
                      rncStyle.textBold,
                      rncStyle.fs5,
                      rncStyle.textEnd,
                    ]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={rncStyle.py2}>
                <TouchableOpacity
                  onPress={logIn}
                  style={[rncStyle.btnPrimary, rncStyle.rounded]}>
                  <Text
                    style={[
                      rncStyle.fs5,
                      rncStyle.textWhite,
                      rncStyle.textCenter,
                    ]}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                rncStyle.py2,
                rncStyle.flexRow,
                rncStyle.justifyContentCenter,
              ]}>
              <Text
                style={[
                  rncStyle.textBold,
                  rncStyle.textSecondary,
                  rncStyle.fs5,
                ]}>
                Not Registered yet?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text
                  style={[
                    rncStyle.textBold,
                    rncStyle.fs5,
                    rncStyle.ms1,
                    rncStyle.textPrimary,
                  ]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
