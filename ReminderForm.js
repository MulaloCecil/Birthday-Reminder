import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';

function ReminderForm({ reminders, setReminders }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigation = useNavigation();

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);
  const showTimePicker = () => setTimePickerVisible(true);
  const hideTimePicker = () => setTimePickerVisible(false);

  const handleDatePicked = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleTimePicked = (time) => {
    setSelectedTime(time);
    hideTimePicker();
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const saveReminder = () => {
    if (title && selectedDate && selectedTime) {
      const newReminder = {
        title,
        description,
        date: formatDate(selectedDate),
        time: formatTime(selectedTime),
      };
      setReminders([...reminders, newReminder]);

      setTitle('');
      setDescription('');
      setSelectedDate('');
      setSelectedTime('');

      navigation.navigate('ReminderList');
    }
  };

  const cancelReminder = () => {
    navigation.navigate('LandingPage'); 
  };

  return (
    <View style={styles.modalContainer}>
    <Text style={{paddingBottom:10, fontWeight: 'bold', fontSize:30}}>New Reminder</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input1}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <View style={styles.dateTimeContainer}>
        <View style={styles.datePickerContainer}>
          <TouchableOpacity style={styles.button} onPress={showDatePicker}>
            <Text style={styles.buttonText1}>Pick Date</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Selected Date:</Text>
          <Text style={styles.dateText}>{selectedDate ? formatDate(selectedDate) : ''}</Text>
        </View>

        <View style={styles.timePickerContainer}>
          <TouchableOpacity style={styles.button} onPress={showTimePicker}>
            <Text style={styles.buttonText1}>Pick Time</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Selected Time:</Text>
          <Text style={styles.timeText}>{selectedTime ? formatTime(selectedTime) : ''}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={saveReminder}>
          <Text style={styles.buttonText}>Save Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={cancelReminder}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={handleDatePicked}
        onCancel={hideDatePicker}
        mode="date"
      />
      <DateTimePicker
        isVisible={isTimePickerVisible}
        onConfirm={handleTimePicked}
        onCancel={hideTimePicker}
        mode="time"
      />
    </View>
  );
}

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    width: '80%',
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },

  input1: {
  width: '80%',
  fontSize: 18,
  borderWidth: 2,
  borderColor: 'gray',
  borderRadius: 5,
  paddingVertical: 16,
  paddingHorizontal: 8,
  marginBottom: 10,
  height: 100,
},
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerContainer: {
    width: '50%',
    alignItems: 'center',
  },
  timePickerContainer: {
    width: '50%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    margin: 10,
  },
 saveButton: {
    width: '39%',
    backgroundColor: 'green',
    borderRadius: 16,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  cancelButton: {
    width: '39%',
    backgroundColor: 'red',
    borderRadius: 16,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    borderColor:'blue',
    borderWidth:1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width:'60%',
  },

    buttonText1: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },


  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 16,
  },
};

export default ReminderForm;
