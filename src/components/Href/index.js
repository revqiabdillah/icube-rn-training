import React, {useState, useEffect} from 'react';
import {TouchableHighlight, Text} from 'react-native';

import styles from './styles';

const Href = ({label, click, style}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {}, []);

  const setActive = value => {
    setIsActive(value);
  };

  return (
    <Text style={[styles.textHref, style]} onPress={click}>
      {label}
    </Text>
  );
};

export default Href;
