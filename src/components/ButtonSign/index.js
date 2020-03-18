import React, {useState, useEffect} from 'react';
import Button from '../Button';

import styles from './styles';

const ButtonSign = ({label, click, disabled = false}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {}, []);

  const setActive = value => {
    setIsActive(value);
  };

  return (
    <Button
      rounded
      label={label}
      click={click}
      style={[styles.btnSignInUp]}
      labelStyle={[styles.textBtnSignInUp]}
      type="contained"
      disabled={disabled}
    />
  );
};

export default ButtonSign;
