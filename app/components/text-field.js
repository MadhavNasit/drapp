import React from 'react';
import { TextInput } from 'react-native';

const TextField = (props) => {

  const {
    placeholder,
    onTextChange,
  } = props;

  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={(value) => onTextChange(value)}
    />
  )
}

export default TextField;