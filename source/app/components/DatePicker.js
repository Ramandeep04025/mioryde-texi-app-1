import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { colors } from '../../assets/styles/Colors';

const DatePickerModal = (props) => {
  const { open, close } = props;
  const [date, setDate] = useState(props.date ? props.date : new Date())

  return (
    <>
      <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        theme="light"
        textColor={colors.black}
        onConfirm={(date) => (props.onConfirm(date), close())}
        onCancel={() => {
          close()
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({

})



export default DatePickerModal