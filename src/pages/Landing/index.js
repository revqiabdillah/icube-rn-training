import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground} from 'react-native';

import appStyles from '../../styles/app';
import styles from './styles';

import ButtonCustom from '../../components/Button';
import ButtonSigInUp from '../../components/ButtonSign';

import routes from '../../navigations/routes';
import {useTranslation} from 'react-i18next';
import {GraphSplash} from '../../services/graphql';

const Landing = ({navigation}) => {
  const [imgUrl, setImgUrl] = useState({uri: ''});
  const {t, i18n} = useTranslation();

  const getBg = () => {
    GraphSplash.getImg()
      .then(res => {
        const img = res.data.getSplashScreen.images[0].mobile_image_url;
        setImgUrl({uri: img});
      })
      .catch(e => {
        console.log('Error', e);
      });
  };

  useEffect(() => {
    getBg();
  });

  return (
    <ImageBackground
      source={imgUrl}
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
