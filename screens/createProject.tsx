import {useState} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import rncStyles from 'rncstyles';
import SMInput from '../components/SMInput';
import SMDatePicker from '../components/SMDatePicker';
import SMTextArea from '../components/SMTextArea';
import SMButton from '../components/SMButton';
import {Post} from '../config/api-methods';

const rncStyle: any = rncStyles;

export default function CreateProject({navigation}: any) {
  const [model, setModel] = useState<any>({});

  const saveProject = () => {
    Post('Projects', model) // Assuming 'Projects' is the correct endpoint
      .then(() => {
        ToastAndroid.show('Project saved', ToastAndroid.SHORT);
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
              placeholder="Enter Project Name"
              label="Name"
              value={model.name}
              onChangeText={(e: any) => {
                setModel({...model, name: e});
              }}
            />
          </View>
          <View style={[rncStyle.py1]}>
            <SMTextArea
              placeholder="Enter Project Description"
              label="Description"
              value={model.description}
              onChangeText={(e: any) => {
                setModel({...model, description: e});
              }}
            />
          </View>
          <View style={[rncStyle.py1]}>
            <SMDatePicker
              label="Select Start Date"
              onDateChange={(selectedDate: Date) => {
                setModel({...model, startDate: selectedDate});
              }}
            />
          </View>
          <View style={[rncStyle.py1]}>
            <SMDatePicker
              label="Select End Date"
              onDateChange={(selectedDate: Date) => {
                setModel({...model, endDate: selectedDate});
              }}
            />
          </View>
          <View>
            <SMButton onPress={saveProject} label="Save Project" />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
