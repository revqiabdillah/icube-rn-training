import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

const TextField = ({
  placeholder,
  style,
  onChange,
  value,
  keyboardType = 'default',
}) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {}, []);

  const setActive = value => {
    setIsActive(value);
  };

  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.containerField, style]}
      onChangeText={onChange ? onChange : setText}
      value={value ? value : text}
      keyboardType={keyboardType}
    />
  );
};

export default TextField;
