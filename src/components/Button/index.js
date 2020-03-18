import React, {useState, useEffect} from 'react';
import {TouchableOpacity, TouchableHighlight, Text} from 'react-native';

import {Colors, Typography} from '../../styles';

import styles from './styles';

const ButtonCustom = ({
  type = 'outline',
  icon = null,
  rounded = false,
  label,
  click,
  style = {},
  labelStyle = {},
  disabled = false,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {}, []);

  const setActive = value => {
    setIsActive(value);
  };

  const btnStyle = type === 'contained' ? styles.contained : styles.button;
  const textBtn =
    type === 'contained' ? styles.buttonTextActive : styles.buttonText;

  return (
    <TouchableHighlight
      underlayColor={Colors.PRIMARY}
      style={[disabled ? styles.disabled : styles.enable, btnStyle, style]}
      onShowUnderlay={() => setActive(true)}
      onHideUnderlay={() => setActive(false)}
      disabled={disabled}
      onPress={click}>
      <Text style={[textBtn, labelStyle]}>{label}</Text>
    </TouchableHighlight>
  );
};

export default ButtonCustom;
