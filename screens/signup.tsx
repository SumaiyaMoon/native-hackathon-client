import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  ToastAndroid,
  Image,
  StyleSheet,
} from 'react-native';
import rncStyles from 'rncstyles';
import {Post} from '../config/api-methods';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../config/redux/reducers/userslice';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import SMIcon from '../components/SMIcon';
import SMDatePicker from '../components/SMDatePicker';

const rncStyle: any = rncStyles;

export default function SignUp({navigation}: any) {
  const [profilePicture, setProfilePicture] = useState(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXk5ueutLff4uOnrrHn6eqrsbTZ3N25vsHHy82zuLvr7e7c3+DV2NnQ09W8wcPMz9FRQ01gAAADeUlEQVR4nO2b23LjIAxAuYibMfj//3ZxkqZJmtggWyKzw3no9PGMEAJLRIjBYDAYDAaDwWAwGAwGg4EQACBUjFFd/vsGANScXbiS/Sy6awFYH7SRd4zWLqmuXmCdfDC6eRmZ+2kVJf1q9BOvTlog/N8o/WrJ1MEKbPistKIzv1PaNLoGKzI7LR+y6RnLuYTgt5fuHixGK0hVcbrEis1prlUqseJyEnVrd5Xi2oOuQUoaz5FWsLQ4lXrFUturk/yGo1eqrQa/mEQuZRuVVqjXrz1Qa6iorVozaoU4q1q33i1UxCezQzhR16qIcSpMlFIJs3qlgFKuH2SclFkI12/COZVjmVAKMAVhhbIoWGSkZFBkTi23uxfoMh1XOlcIyyfm4LtJ0d3V/zep+RulCCP1lYmOPPokZUkQ8xcWT9y9c4XymJmwUpQH8hRwTqRXT+z2I6wIAn1N0LTfWLgPh0x6RwePChTdIXORipj9F0idcPuPvkWFKOqaWEkgUp2hlwe2NatIz70bU1PLsywe5YfoHdWU6yaQ1qgfGlr7K0wDmqmho6BntkFItRVPF/3GzqzvHidOJ6GqtiBrnFYqVpDdaf8bsMsUGebNxDIu9pi3b43bjVw6GF2YbNbvtIz0PR9xgPLhOVzGyLD0fu8Cwi7ZaK2NWf+GvNjveBlULOycUppjcfwKo6I0PdI3TtenXDYtPjt3uc6E4HL2yxzV+ryrg9Gk5iJTsnzlMc9Lahnpsk8RJkYxEDF5qZ9k/paF4paXqFgiBlP0Tm76PBaskBO1VomRN2/r5YaYzpawlAKkN6/dKrRM8ESVAkqQ0C3PEi6Ce/H2Y7caLZlPfrdUjrjGTHqHdmdqQaq8k+9QonVWboEN2P7rXy1zToXA9ck+a7nj9QHiOSv3YHX4lQmkY3vuvZY/5uRPy6YnK3ekO4R8hrBvJfGJ1diJagJbss5O8ScM7rOQMk4riFgBtZM0zdmOHxfX09rzx0+LGzCuaQFx0452q7ZeEXLY2GzVkOwTQ0JdCfVSzUMFNPULCJnLqVBZF2BmC1T90BQ7UkdaVYUK0M80cFJ1WUV1X/lA1eRNsSqVD6+a2zH+5Q8St5/qE+rlwREqUh24naTc7zJgfi5wjP39x3JneZHa/b0Px+Xulf2iwHnu/bAnpYLmZ3f2rTqw5zQYDAaDwaAD/wANKir9WY4qAQAAAABJRU5ErkJggg==',
  );
  const [model, setModel] = useState<any>({
    // requestTime: JSON.parse(JSON.stringify(new Date())),
    profilePicture: profilePicture,
  });
  const dispatch = useDispatch();

  const openCamera = async () => {
    let res: any = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
    });
    let file = res.assets[0];
    // console.log(file);
    setProfilePicture(`data:image/png;base64,${file.base64}`);
  };

  const openGallery = async () => {
    let res: any = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    });
    let file = res.assets[0];
    // console.log(file);
    setProfilePicture(`data:image/png;base64,${file.base64}`);
  };
  let createUser = () => {
    // const serializedDate = model.date.toISOString(); // Convert Date to ISO string
    dispatch(add({...model}));

    Post('auth/signup', model)
      .then(res => {
        console.log(res.data);
        navigation.navigate('Home');
      })
      .catch(err => {
        // console.log(err.response.data);
        console.log(err.message);
        console.log(err);
        ToastAndroid.show(
          'Something Went Wrong, Try again',
          ToastAndroid.SHORT,
        );
      });
  };

  return (
    <>
      <View style={[rncStyle.h100, rncStyle.bgLight]}>
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
              Sign Up
            </Text>
            <Text style={[rncStyle.fs5, rncStyle.textSecondary]}>
              Please Enter Your Information and create Acount.
            </Text>
          </View>
          <ScrollView>
            <View>
              <View>
                <Text style={[rncStyle.fs3]}>Upload Image</Text>
                <View
                  style={[
                    rncStyle.flexRow,
                    rncStyle.justifyContentCenter,
                    rncStyle.alignItemsCenter,
                  ]}>
                  <TouchableOpacity
                    style={[
                      rncStyle.p2,
                      rncStyle.bgWhite,
                      rncStyle.rounded,
                      rncStyle.shadow3,
                      rncStyle.m1,
                    ]}
                    onPress={openCamera}>
                    <SMIcon name="camera" size={30} color="#4F8EF7" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      rncStyle.p2,
                      rncStyle.bgWhite,
                      rncStyle.rounded,
                      rncStyle.shadow3,
                      rncStyle.m1,
                    ]}
                    onPress={openGallery}>
                    <SMIcon name="photo-library" size={30} color="#4F8EF7" />
                  </TouchableOpacity>
                  <View>
                    <Text>Selected Image</Text>
                    <Image
                      style={[rncStyle.p2, rncStyle.m1, styles.image]}
                      source={{uri: profilePicture}}
                    />
                  </View>
                </View>
              </View>
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
                  placeholder="eg. Muhammad Zaid"
                />
              </View>
              <View style={rncStyle.pb1}>
                <Text style={[rncStyle.textPrimary, rncStyle.p1]}>
                  First Name
                </Text>
                <TextInput
                  onChangeText={(e: any) => setModel({...model, firstName: e})}
                  style={[
                    rncStyle.input,
                    rncStyle.bgWhite,
                    rncStyle.rounded,
                    rncStyle.border1,
                    rncStyle.borderPrimary,
                  ]}
                  placeholder="eg. Muhammad Zaid"
                />
              </View>
              <View style={rncStyle.pb1}>
                <Text style={[rncStyle.textPrimary, rncStyle.p1]}>
                  Last Name
                </Text>
                <TextInput
                  onChangeText={(e: any) => setModel({...model, lastName: e})}
                  style={[
                    rncStyle.input,
                    rncStyle.bgWhite,
                    rncStyle.rounded,
                    rncStyle.border1,
                    rncStyle.borderPrimary,
                  ]}
                  placeholder="eg. Muhammad Zaid"
                />
              </View>
              <View style={rncStyle.pb1}>
                <Text style={[rncStyle.textPrimary, rncStyle.p1]}>Email</Text>
                <TextInput
                  onChangeText={(e: any) => setModel({...model, email: e})}
                  keyboardType="email-address"
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
                  secureTextEntry={true}
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
              <View style={rncStyle.pb1}>
                <Text style={[rncStyle.textPrimary, rncStyle.p1]}>
                  Location
                </Text>
                <TextInput
                  onChangeText={(e: any) => setModel({...model, location: e})}
                  style={[
                    rncStyle.input,
                    rncStyle.bgWhite,
                    rncStyle.rounded,
                    rncStyle.border1,
                    rncStyle.borderPrimary,
                  ]}
                  placeholder="XYZ Street Map"
                />
              </View>
              <View style={rncStyle.pb1}>
                <Text style={[rncStyle.textPrimary, rncStyle.p1]}>Bio</Text>
                <TextInput
                  onChangeText={(e: any) => setModel({...model, bio: e})}
                  style={[
                    rncStyle.input,
                    rncStyle.bgWhite,
                    rncStyle.rounded,
                    rncStyle.border1,
                    rncStyle.borderPrimary,
                  ]}
                  placeholder="Coffee Enthusiast.."
                />
              </View>
              <View style={rncStyle.pb1}>
                <Text style={[rncStyle.textPrimary, rncStyle.p1]}>Gender</Text>
                <TextInput
                  onChangeText={(e: any) => setModel({...model, gender: e})}
                  style={[
                    rncStyle.input,
                    rncStyle.bgWhite,
                    rncStyle.rounded,
                    rncStyle.border1,
                    rncStyle.borderPrimary,
                  ]}
                  placeholder="eg. Muhammad Zaid"
                />
              </View>
              {/* <View style={[rncStyle.py1]}>
                <SMDatePicker
                  label="Date of Birth"
                  onDateChange={(e: any) => {
                    setModel({...model, dateOfBirth: e.toISOString()});
                  }}
                />
              </View> */}
              <View style={rncStyle.py2}>
                <TouchableOpacity
                  style={[rncStyle.btnPrimary, rncStyle.rounded]}
                  onPress={createUser}>
                  <Text
                    style={[
                      rncStyle.fs5,
                      rncStyle.textWhite,
                      rncStyle.textCenter,
                    ]}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View
            style={[
              rncStyle.py2,
              rncStyle.flexRow,
              rncStyle.justifyContentCenter,
            ]}>
            <Text
              style={[rncStyle.textBold, rncStyle.textSecondary, rncStyle.fs5]}>
              Have an Account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={[
                  rncStyle.textBold,
                  rncStyle.fs5,
                  rncStyle.ms1,
                  rncStyle.textPrimary,
                ]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
