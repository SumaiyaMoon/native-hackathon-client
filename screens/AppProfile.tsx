import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import rncStyles from 'rncstyles';
import SMIcon from '../components/SMIcon';
import SMAppHeader from '../components/SMAppHeader';

const rncStyle: any = rncStyles;

export default function AppProfile({navigation}: any) {
  const userData = useSelector((state: any) => state.user);
  const Screen = [
    {
      name: 'Projects List',
      route: 'AppProject',
      icon: '',
    },
    {
      name: 'Join Team',
      route: 'AppTeam',
      icon: '',
    },
    {
      name: 'Settings',
      route: 'AppSettings',
      icon: '',
    },
    {
      name: 'Tasks List',
      route: 'AppTask',
      icon: '',
    },
  ];

  console.log(userData);
  return (
    <>
      <View
        style={[
          rncStyle.h100,
          rncStyle.bgLight,
          rncStyle.justifyContentCenter,
        ]}>
        <SMAppHeader />
        <ScrollView>
          <View style={[rncStyle.p2]}>
            <View style={rncStyle.flexCenter}>
              {userData?.profilePicture ? (
                <Image
                  resizeMode="contain"
                  style={[rncStyle.roundedPill, {width: 100, height: 100}]}
                  source={{
                    uri: userData.profilePicture,
                  }}
                />
              ) : (
                // You can provide a fallback image or leave it empty, based on your design
                <Image
                  resizeMode="contain"
                  style={[rncStyle.roundedPill, {width: 100, height: 100}]}
                  source={require('../assets/avatar.jpg')}
                />
              )}
            </View>
            <View style={rncStyle.flexCenter}>
              <Text
                style={[
                  rncStyle.fs3,
                  rncStyle.textPrimary,
                  rncStyle.textBold,
                  rncStyle.mb1,
                ]}>
                {userData?.username || '--'}
              </Text>
              <Text style={[rncStyle.fs6, rncStyle.textSecondary]}>
                {userData?.email || '--'}
              </Text>
              <TouchableOpacity
                style={[
                  rncStyle.border1,
                  rncStyle.rounded,
                  rncStyle.my1,
                  rncStyle.w30,
                ]}>
                <Text
                  style={[
                    rncStyle.textBlack,
                    rncStyle.p1,
                    rncStyle.rounded,
                    rncStyle.textCenter,
                  ]}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={[
              rncStyle.rounded,
              // rncStyle.shadow5,
              rncStyle.bgWhite,
              // rncStyle.p1,
              rncStyle.flexRow,
            ]}>
            <View style={[rncStyle.flex1]}>
              <Text
                style={[
                  rncStyle.textPrimary,
                  rncStyle.textBold,
                  rncStyle.fs4,
                  rncStyle.textCenter,
                ]}>
                145
              </Text>
              <Text
                style={[
                  rncStyle.textSecondary,
                  rncStyle.textBold,
                  rncStyle.textCenter,
                ]}>
                Designs
              </Text>
            </View>
            <View style={[rncStyle.flex1]}>
              <Text
                style={[
                  rncStyle.textPrimary,
                  rncStyle.textBold,
                  rncStyle.fs4,
                  rncStyle.textCenter,
                ]}>
                32
              </Text>
              <Text
                style={[
                  rncStyle.textSecondary,
                  rncStyle.textBold,
                  rncStyle.textCenter,
                ]}>
                Following
              </Text>
            </View>
          </View>
          <View style={rncStyle.p2}>
            {Screen.map((x: any, i: any) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  navigation.navigate(x.route);
                }}
                style={[
                  rncStyle.p1,
                  rncStyle.mb2,
                  rncStyle.borderBottom1,
                  rncStyle.borderLight,
                  rncStyle.flexRow,
                ]}>
                <View style={[rncStyle.w90]}>
                  <Text style={[rncStyle.textSecondary, rncStyle.textBold]}>
                    {x.name}
                  </Text>
                </View>
                {x.icon ? x.icon : <SMIcon name="chevron-right" />}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
