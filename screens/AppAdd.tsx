import {Text, View} from 'react-native';
import rncStyles from 'rncstyles';
import SMButton from '../components/SMButton';

const rncStyle: any = rncStyles;

export default function AppAdd({navigation}: any) {
  return (
    <>
      <View style={[rncStyle.h100, rncStyle.bgLight]}>
        <View
          style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
          <View style={[rncStyle.paper, rncStyle.p5]}>
            <Text
              style={[
                rncStyle.fs1,
                rncStyle.textBold,
                rncStyle.textCenter,
                {color: '#756EF3'},
                rncStyle.p1,
              ]}>
              Boost Productivity
            </Text>
            <Text
              style={[
                rncStyle.fs5,
                rncStyle.textBold,
                rncStyle.textCenter,
                {color: '#756EF3'},
                rncStyle.p1,
              ]}>
              Add Tasks and Projects
            </Text>
            <Text
              style={[
                rncStyle.fs6,
                rncStyle.textBold,
                rncStyle.textCenter,
                {color: 'grey'},
                rncStyle.p1,
              ]}>
              Elevate your efficiency by effortlessly adding tasks and projects.
              Stay organized and achieve more!
            </Text>
            <View
              style={[
                rncStyle.flexRow,
                {flex: 1, justifyContent: 'center', alignItems: 'center'},
              ]}>
              <SMButton
                label="Add Task"
                onPress={() => {
                  navigation.navigate('CreateTask');
                }}
              />
              <SMButton
                label="View Tasks"
                onPress={() => {
                  navigation.navigate('AppTask');
                }}
              />
            </View>
            <View
              style={[
                rncStyle.flexRow,
                {flex: 1, justifyContent: 'center', alignItems: 'center'},
              ]}>
              <SMButton
                label="Add Project"
                onPress={() => {
                  navigation.navigate('CreateProject');
                }}
              />
              <SMButton
                label="View Projects"
                onPress={() => {
                  navigation.navigate('AppProject');
                }}
              />
            </View>
            <View
              style={[
                rncStyle.flexRow,
                {flex: 1, justifyContent: 'center', alignItems: 'center'},
              ]}>
              <SMButton
                label="Add Team"
                onPress={() => {
                  navigation.navigate('CreateTeam');
                }}
              />
              <SMButton
                label="View Team"
                onPress={() => {
                  navigation.navigate('AppTeam');
                }}
              />
              <SMButton
                label="Label List"
                onPress={() => {
                  navigation.navigate('LabelList');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
