import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { dpHeight, dpWidth } from '../../assets/styles/Sizes';

const countryData = [
  { name: 'India', code: '+91', cca2: 'IN' },
  { name: 'United States', code: '+1', cca2: 'US' },
  // Add more countries as needed
];

const PhoneInputField = () => {
  const [code, setCode] = useState('+91');
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState('');

  const onSelect = (country) => {
    setCode(country.code);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.codeText}>{code}</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="Phone Number"
        />
      </View>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={countryData}
            keyExtractor={(item) => item.cca2}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onSelect(item)} style={styles.countryItem}>
                <Text>{item.name} ({item.code})</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: dpWidth(4),
    paddingHorizontal: dpWidth(3),
    height: dpHeight(7),
    backgroundColor: 'white',
  },
  codeText: {
    fontSize: 14,
    color: '#000',
  },
  separator: {
    width: 1,
    height: '60%',
    backgroundColor: '#D9D9D9',
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    height: dpHeight(7)
  },
  modalContainer: {
    marginTop: '50%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  countryItem: {
    paddingVertical: 10,
  },
});

export default PhoneInputField;
