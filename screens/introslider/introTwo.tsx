import {ScrollView, Text, View, Image} from 'react-native';
// import {Image} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import rncStyles from 'rncstyles';
import SMButton from '../../components/SMButton';
import SMIconButton from '../../components/SMIconButton';

// import cover from '../assets/cover';

const rncStyle: any = rncStyles;

export default function IntroTwo({navigation}: any) {
  return (
    <>
      <View style={[rncStyle.bgLight]}>
        <ScrollView>
          <View>
            <Image
              style={[rncStyle.w100]}
              source={require('../../assets/intro3.png')}
            />
            <View
              style={[
                // rncStyle.paper,
                // rncStyle.h100,
                // rncStyle.w100,
                // rncStyle.p5,
                rncStyle.flexCenter,
                rncStyle.alignItemsCenter,
              ]}>
              <View
                style={[
                  rncStyle.paper,
                  // rncStyle.h100,
                  rncStyle.w100,
                  rncStyle.p5,
                  rncStyle.flexCenter,
                  rncStyle.alignItemsCenter,
                ]}>
                <Text
                  style={[rncStyle.fs3, rncStyle.textBold, {color: 'black'}]}>
                  Taskcy
                </Text>
                <Text style={[rncStyle.fs5]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, vitae, inventore
                </Text>
                <View style={[rncStyle.p3]}>
                  <SMButton
                    label="Next"
                    onPress={() => {
                      navigation.navigate('IntroThree');
                    }}
                  />
                </View>
                <View style={[rncStyle.flexRow]}>
                  <SMIconButton
                    name="chevron-left"
                    onPress={() => {
                      navigation.navigate('IntroOne');
                    }}
                  />
                  <SMIconButton
                    name="chevron-right"
                    onPress={() => {
                      navigation.navigate('IntroThree');
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
