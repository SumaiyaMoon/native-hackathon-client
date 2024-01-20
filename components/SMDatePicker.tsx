import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import SMButton from './SMButton';
import SMDateButton from './SMDateButton';

export default function SMDatePicker({label, onDateChange}: any) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    onDateChange(newDate); // Pass the selected date to the parent component
    setOpen(false);
  };

  return (
    <>
      <SMDateButton
        color="info"
        label={label}
        onPress={() => {
          setOpen(true);
        }}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={handleDateChange}
        onCancel={handleClose}
      />
    </>
  );
}

{
  /* <View style={[rncStyles.py1]}>
<SMDatePicker
  label="Select Due Date"
  onDateChange={(selectedDate: Date) => {
    setModel({...model, date: selectedDate});
  }}
/>
</View> */
}
