import React, {useState, useContext, useEffect} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Href from '../../components/Href';

import {connect} from 'react-redux';
import {AuthContext} from '../../navigations/auth-navigator';

import appStyles from '../../styles/app';
import styles from './styles';

import {useTranslation} from 'react-i18next';
import Navbar from '../../components/Navbar';
import Button from '../../components/ButtonSign';
import routes from '../../navigations/routes';
import Input from '../../components/TextField';

const SignIn = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = useContext(AuthContext);
  const {t, i18n} = useTranslation();

  useEffect(() => {}, []);

  return (
    <View style={[appStyles.container]}>
      <Navbar navigation={navigation} title={t('signin')} />
      <View style={[styles.containerSignin]}>
        <Text style={styles.title}>
          {t('loginTitle')}&nbsp;
          <Href
            label={t('signup')}
            click={() => navigation.navigate(routes.SIGNUP.name)}
          />
        </Text>
        <View style={styles.form}>
          <Input placeholder={t('emailPlaceholder')} />
          <Input placeholder={t('passwordPlaceholder')} />
        </View>
        <Button label={t('signin')} />
        <Href label={t('forgotPassword')} style={styles.hrefForgorPasswd} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(SignIn);
