import React, {useState} from 'react';
import {View, ToastAndroid, ScrollView} from 'react-native';
import rncStyles from 'rncstyles';
import SMInput from '../components/SMInput';
import SMDatePicker from '../components/SMDatePicker';
import SMTextArea from '../components/SMTextArea';
import SMButton from '../components/SMButton';
import SMPriorityComponent from '../components/SMPriorityComponent'; // Update with the correct path
import SMStatusComponent from '../components/SMStatusComponent'; // Update with the correct path
import {Post} from '../config/api-methods';

const rncStyle: any = rncStyles;

export default function CreateTask({navigation}: any) {
  const [model, setModel] = useState<any>({
    title: '',
    description: '',
    dueDate: null,
    priority: null,
    status: null,
  });

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
              value={model.description}
              onChangeText={(e: any) => {
                setModel({...model, description: e});
              }}
            />
          </View>
          <View style={[rncStyle.py1]}>
            <SMDatePicker
              label="Select Due Date"
              onDateChange={(selectedDate: Date) => {
                setModel({...model, dueDate: selectedDate});
              }}
            />
          </View>
          <View style={[rncStyle.py1]}>
            <SMPriorityComponent
              label="Select Priority"
              selectedPriority={model.priority}
              onSelectPriority={(selectedPriority: string) => {
                setModel({...model, priority: selectedPriority});
              }}
            />
          </View>
          <View style={[rncStyle.py1]}>
            <SMStatusComponent
              label="Select Status"
              selectedStatus={model.status}
              onSelectStatus={(selectedStatus: string) => {
                setModel({...model, status: selectedStatus});
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
