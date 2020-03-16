import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  Text
} from 'react-native';

import { 
    Colors,
    Typography
} from '../../styles';

import styles from './styles';

const ButtonCustom = ({
    type = 'outline',
    icon = null,
    rounded = false,
    label,
    click,
    style = {}
}) => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {

    }, []);

    const setActive = (value) => {
        setIsActive(value);
    }

    return (
        <TouchableHighlight
            underlayColor={Colors.PRIMARY}
            style={[styles.button, style]}
            onShowUnderlay={() => setActive(true)}
            onHideUnderlay={() => setActive(false)}
            onPress={click}>
            <Text style={[
                (!isActive) ? styles.buttonText : styles.buttonTextActive
            ]}>{label}</Text>
        </TouchableHighlight>
    );
}

export default ButtonCustom;