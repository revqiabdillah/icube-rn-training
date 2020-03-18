import React, {useState, useEffect} from 'react';
import {TextInput, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {BG_PRIMARY} from '../../styles/colors';

const TextFieldPassword = ({placeholder, style, onChange, value}) => {
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {}, []);
  return (
    <View style={[styles.containerField, style]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange ? onChange : setText}
        value={value ? value : text}
        secureTextEntry={!show}
      />
      <TouchableHighlight
        underlayColor={BG_PRIMARY}
        style={styles.iconEyeBtn}
        onPress={() => setShow(!show)}>
        {show ? (
          <Icon name="eye" size={20} />
        ) : (
          <Icon name="eye-with-line" size={20} />
        )}
      </TouchableHighlight>
    </View>
  );
};

export default TextFieldPassword;
