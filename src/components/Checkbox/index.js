import React, {useState, useEffect} from 'react';

import styles from './styles';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomCheckbox = ({label, click = () => {}}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {}, []);

  const setActive = value => {
    setIsActive(value);
    click(value);
  };

  return (
    <View style={styles.containerCheckbox}>
      <TouchableHighlight
        style={[styles.checkbox, isActive && styles.active]}
        onPress={() => setActive(!isActive)}>
        <View style={styles.checkMark}>
          {isActive && <Icon name="ios-checkmark" color="white" size={20} />}
        </View>
      </TouchableHighlight>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default CustomCheckbox;
