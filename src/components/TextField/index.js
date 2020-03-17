import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

const ButtonSign = ({placeholder, style}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {}, []);

  const setActive = value => {
    setIsActive(value);
  };

  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.containerField, style]}
    />
  );
};

export default ButtonSign;
