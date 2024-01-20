import {useState} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import rncStyles from 'rncstyles';
import SMInput from '../components/SMInput';
// import {addData} from '../config/firebasemethods';
import SMDatePicker from '../components/SMDatePicker';
import SMTextArea from '../components/SMTextArea';
import SMButton from '../components/SMButton';
import {Post} from '../config/api-methods';

const rncStyle: any = rncStyles;

export default function CreateTeam({navigation}: any) {
  const [model, setModel] = useState<any>({});

  const saveTask = () => {
    Post('Tasks', model)
      .then(() => {
        ToastAndroid.show('Task saved', ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={[rncStyle.h100, rncStyle.bgLight]}>
        <ScrollView style={rncStyle.py2}>
          <View style={[rncStyle.py1]}>
            <SMInput
              placeholder="Enter Title"
              label="Title"
              value={model.title}
              onChangeText={(e: any) => {
                setModel({...model, title: e});
              }}
            />
          </View>
          <View style={[rncStyle.py1]}>
            <SMTextArea
              placeholder="Enter Task"
              label="Task"
              value={model.task}
              onChangeText={(e: any) => {
                setModel({...model, task: e});
              }}
            />
          </View>
          <View style={[rncStyle.py1]}>
            <SMDatePicker
              label="Select Due Date"
              onDateChange={(selectedDate: Date) => {
                setModel({...model, date: selectedDate});
              }}
            />
          </View>
          <View>
            <SMButton onPress={saveTask} label="Save Task" />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
