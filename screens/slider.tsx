import {ScrollView, Text, View, Image} from 'react-native';
// import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import rncStyles from 'rncstyles';
import SMCard from '../components/SMCard';
import SMButton from '../components/SMButton';
// import cover from '../assets/cover';

const rncStyle: any = rncStyles;

export default function Slider({navigation}: any) {
  return (
    <>
      <View style={[rncStyle.bgLight]}>
        <ScrollView>
          <View>
            <Image
              style={[rncStyle.w100]}
              source={require('../assets/cover.png')}
            />
            <View style={[rncStyle.flexCenter, rncStyle.alignItemsCenter]}>
              <View
                style={[
                  rncStyle.paper,
                  rncStyle.w100,
                  rncStyle.flexCenter,
                  rncStyle.alignItemsCenter,
                ]}>
                <View style={[rncStyle.p2]}>
                  <Text
                    style={[
                      {fontSize: 40},
                      rncStyle.textBold,
                      rncStyle.textCenter,
                      {color: 'black'},
                    ]}>
                    Taskcy
                  </Text>
                  <Text
                    style={[
                      rncStyle.fs2,
                      rncStyle.textBold,
                      {color: '#2F394B'},
                      rncStyle.textCenter,
                    ]}>
                    Building Better Workplaces
                  </Text>
                  <Text
                    style={[
                      rncStyle.fs6,
                      // rncStyle.textBold,
                      {color: 'black'},
                      rncStyle.textCenter,
                    ]}>
                    Create a unique emotional story that describes better than
                    words
                  </Text>
                  <View>
                    <SMButton
                      label="Get Started"
                      onPress={() => {
                        navigation.navigate('IntroOne');
                      }}
                    />
                  </View>
                  <View>
                    <SMButton
                      label="Skip to Login"
                      onPress={() => {
                        navigation.navigate('Login');
                      }}
                    />
                  </View>
                  <View>
                    <SMButton
                      label="Skip to Home"
                      onPress={() => {
                        navigation.navigate('Home');
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
