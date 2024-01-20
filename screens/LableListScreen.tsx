import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SMIcon from '../components/SMIcon';
import rncStyles from 'rncstyles';
const rncStyle: any = rncStyles;

const LabelsListScreen = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [newLabel, setNewLabel] = useState('');
  const [editingLabel, setEditingLabel] = useState('');
  const navigation = useNavigation();

  const addNewLabel = () => {
    if (newLabel.trim() !== '') {
      setLabels([...labels, newLabel.trim()]);
      setNewLabel('');
      setModalVisible(false);
    }
  };

  const editLabel = () => {
    const index = labels.indexOf(editingLabel);
    if (index !== -1) {
      const updatedLabels = [...labels];
      updatedLabels[index] = newLabel.trim();
      setLabels(updatedLabels);
      setNewLabel('');
      setEditingLabel('');
      setEditModalVisible(false);
    }
  };

  const deleteLabel = (label: string) => {
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete "${label}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedLabels = labels.filter(item => item !== label);
            setLabels(updatedLabels);
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>List of Labels</Text>
      <FlatList
        data={labels}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.labelItem}>
            <TouchableOpacity
              onPress={() => {
                console.log('Label Pressed:', item);
              }}>
              <Text style={styles.labelText}>{item}</Text>
            </TouchableOpacity>
            <View style={styles.labelOptions}>
              <TouchableOpacity
                onPress={() => {
                  setEditingLabel(item);
                  setNewLabel(item);
                  setEditModalVisible(true);
                }}>
                <SMIcon name="edit" size={24} color="#3498db" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteLabel(item)}>
                <SMIcon name="delete" size={24} color="#e74c3c" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Add Label Modal */}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={[rncStyle.paper]}>
            <Text style={styles.headerText}>Add Label</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter label"
              value={newLabel}
              onChangeText={text => setNewLabel(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={addNewLabel}>
              <SMIcon name="add" size={24} color="#fff" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}>
              <SMIcon name="close" size={24} color="#fff" />
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Edit Label Modal */}
      <Modal
        visible={isEditModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={[rncStyle.paper]}>
            <Text style={styles.headerText}>Edit Label</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter label"
              value={newLabel}
              onChangeText={text => setNewLabel(text)}
            />
            <TouchableOpacity style={styles.editButton} onPress={editLabel}>
              <SMIcon name="check" size={24} color="#fff" />
              <Text style={styles.addButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                setNewLabel('');
                setEditingLabel('');
                setEditModalVisible(false);
              }}>
              <SMIcon name="close" size={24} color="#fff" />
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Button to open the modal */}
      <TouchableOpacity
        style={styles.addButtonContainer}
        onPress={() => setModalVisible(true)}>
        <SMIcon name="add-circle" size={48} color="#3498db" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#3498db',
  },
  labelItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  labelText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  labelOptions: {
    flexDirection: 'row',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default LabelsListScreen;
