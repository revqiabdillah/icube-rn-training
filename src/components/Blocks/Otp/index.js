import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {useTranslation} from 'react-i18next';
import styles from './style';
import Input from '../../TextField';
import ButtonCustom from '../../Button';

const OtpBlock = ({getOtp, getPhoneNumber, requestOtp, verifOtp}) => {
  const {t, i18n} = useTranslation();
  const [otp, setOtp] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [time, setTime] = useState(0);
  const [sendOtp, setSendOtp] = useState(false);
  const [manySend, setManySend] = useState(1);

  const handleOtp = value => {
    setOtp(value);
    getOtp(value);
  };

  const handlePhoneNumber = value => {
    setPhoneNumber(value);
    getPhoneNumber(value);
  };

  const handleSendOtp = () => {
    setManySend(manySend + 1);
    requestOtp();
    const countdown = manySend >= 3 ? 320 : manySend <= 1 ? 60 : manySend * 30;
    setTime(countdown);
    setSendOtp(true);
  };

  useEffect(() => {
    if (!time) return;
    const intervalId = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <View style={styles.viewOtp}>
      <View style={styles.inlineForm}>
        <Input
          placeholder={t('phonePlaceholder')}
          style={styles.fieldInline}
          onChange={handlePhoneNumber}
          value={phoneNumber}
        />
        <ButtonCustom
          label={t('labelOtp')}
          type="contained"
          style={styles.btnInline}
          click={handleSendOtp}
          disabled={time > 0 ? true : false}
        />
      </View>
      {time > 0 && (
        <Text style={styles.timingReqOtp}>
          {t('timeReqOtp')} {time}
        </Text>
      )}
      <View style={styles.inlineForm}>
        <Input
          placeholder={t('otpPlaceholder')}
          style={styles.fieldInline}
          onChange={handleOtp}
          value={otp}
          keyboardType="numeric"
        />
        <ButtonCustom
          type="contained"
          label={t('labelVerify')}
          style={[styles.btnInline]}
          disabled={!sendOtp}
          click={verifOtp}
        />
      </View>
    </View>
  );
};

export default OtpBlock;
