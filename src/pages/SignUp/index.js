import React, {useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/ButtonSign';
import Checkbox from '../../components/Checkbox';
import Href from '../../components/Href';
import Navbar from '../../components/Navbar';
import Input from '../../components/TextField';
import InputPassword from '../../components/TextFieldPassword';
import {AuthContext} from '../../navigations/auth-navigator';
import OtpBlock from '../../components/Blocks/Otp';
import appStyles from '../../styles/app';
import styles from './styles';
import {GraphUser} from '../../services/graphql';
import routes from '../../navigations/routes';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [acceptTos, setAcceptTos] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const {signIn} = useContext(AuthContext);
  const {t, i18n} = useTranslation();

  useEffect(() => {}, []);

  const LabelTos = (
    <Text>
      {t('labelAccept')} <Href label={t('labelTos')} />
    </Text>
  );

  const requestOtp = () => {
    GraphUser.sendOtp({
      phoneNumber: phoneNumber,
    })
      .then(res => {
        console.log('Res', res);
        ToastAndroid.show('OTP Send Success !', ToastAndroid.SHORT);
      })
      .catch(e => {
        console.log('Err', e);
      });
  };

  const verifOtp = () => {
    GraphUser.verifOtp({
      phoneNumber: phoneNumber,
      otp: otp,
    })
      .then(res => {
        console.log('Res', res);
        ToastAndroid.show('OTP Valid !', ToastAndroid.SHORT);
      })
      .catch(e => {
        console.log('Err', JSON.stringify(e));
      });
  };

  const register = () => {
    GraphUser.register({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      otp: otp,
    })
      .then(res => {
        console.log('Res', res);
        ToastAndroid.show('Register Success !', ToastAndroid.SHORT);
        navigation.navigate(routes.SIGNIN.name);
      })
      .catch(e => {
        console.log('Err', e);
      });
  };

  const checkForm = () => {
    if (firstName === '' || !firstName) return false;
    if (email === '' || !email) return false;
    if (password === '' || !password) return false;
    if (phoneNumber === '' || !phoneNumber) return false;
    if (otp === '' || !otp) return false;
    if (!acceptTos) return false;
    return true;
  };

  useEffect(() => {
    const valid = checkForm();
    setValidForm(valid);
  }, [firstName, email, password, phoneNumber, otp, acceptTos]);

  return (
    <View style={[appStyles.container]}>
      <Navbar navigation={navigation} title={t('signup')} />
      <View style={[styles.containerSignin]}>
        <View style={styles.form}>
          <Input
            placeholder={t('fname')}
            style={styles.fieldSignup}
            onChange={setFirstName}
            value={firstName}
          />
          <Input
            placeholder={t('lname')}
            style={styles.fieldSignup}
            onChange={setLastName}
            value={lastName}
          />
        </View>
        <View style={styles.form}>
          <Input
            placeholder={t('emailPlaceholder')}
            style={styles.fieldSignup}
            onChange={setEmail}
            value={email}
          />
          <InputPassword
            placeholder={t('passwordPlaceholder')}
            style={styles.fieldSignup}
            onChange={setPassword}
            value={password}
          />
        </View>
        <OtpBlock
          getOtp={setOtp}
          getPhoneNumber={setPhoneNumber}
          requestOtp={requestOtp}
          verifOtp={verifOtp}
        />
        <View style={styles.viewOtp}>
          <Checkbox label={t('labelNewsLater')} />
          <Checkbox label={LabelTos} click={setAcceptTos} />
        </View>
        <Button label={t('signup')} click={register} disabled={!validForm} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(SignUp);
