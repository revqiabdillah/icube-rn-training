import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground} from 'react-native';

import appStyles from '../../styles/app';
import styles from './styles';

import ButtonCustom from '../../components/Button';
import ButtonSigInUp from '../../components/ButtonSign';

import routes from '../../navigations/routes';
import {useTranslation} from 'react-i18next';

const Landing = ({navigation}) => {
  const logoImageURL = require('../../assets/img/splash.png');
  const {t, i18n} = useTranslation();

  return (
    <ImageBackground
      source={logoImageURL}
      style={[appStyles.matchParent, styles.container]}>
      <View style={[styles.postionBtnLang]}>
        <ButtonCustom
          rounded
          label={t('language')}
          style={[styles.btnLang]}
          labelStyle={[styles.textBtnLang]}
        />
      </View>
      <View style={[styles.signContainer]}>
        <Text style={[styles.welcomeText]}>{t('welcome')}</Text>
        <ButtonSigInUp
          label={t('signin')}
          click={() => navigation.navigate(routes.SIGNIN.name)}
        />
        <ButtonSigInUp
          label={t('signup')}
          click={() => navigation.navigate(routes.SIGNUP.name)}
        />
        <Text style={[styles.skipText]}>{t('skip')}</Text>
      </View>
    </ImageBackground>
  );
};

export default Landing;
